import time
from flask import Flask, jsonify, Response, redirect
import os, multiprocessing
from datetime import datetime, timedelta
from threading import Thread
import json

from model import Load, app, db

data_getter_running = True
last_call_time = time.time()
MAX_INACTIVE_LOOP_TIME = 30 * 60

@app.after_request

def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  return response


@app.route('/get_load')
def get_load():
    """
    :return: normalized load average in the last minute

    """
    global data_getter_running, last_call_time
    last_call_time = time.time()

    if not data_getter_running:
        p = Thread(target=auto_load, args=())
        p.start()
        time.sleep(0.5)
        data_getter_running = True

    data = Load.query.order_by(Load.time.desc()).first()

    try:
        res = dict(time=data.time, value=data.value)
        return jsonify(res)
    except Exception as e:
        return Response(json.dumps('[]'), status=500)


@app.route('/get_loads/<minutes>')
def get_load_multiple(minutes):
    """
    :return: all the values of load in the db up to 10 minutes in the past
    """

    t_delta = datetime.utcnow() - timedelta(minutes=int(minutes))
    data = Load.query.filter(Load.time > t_delta).all()
    res = [dict(time=load.time, value=load.value) for load in data]
    if not res:
        return redirect("get_load")
    else:
        return jsonify(res)

def clean_db():
    """
    delete cache older than 24 hours
    :return:
    """
    yest = datetime.utcnow() - timedelta(days=1)
    try:
        Load.query.filter(Load.time < yest).delete()
        db.session.commit()
    except:
        db.session.rollback()

def auto_load():
    """
    When first called after the service is on, this will start getting a new value of load every 10s
    and whenever the function is called afterwards it will return the last value fetched
    This will reduce the discrepancies in case the user load the monitor page multiple time
    there will always have 10s between all data
    :return:
    """
    global last_call_time, data_getter_running
    print ("Process load getter starts running")
    try:
        while time.time() < last_call_time + MAX_INACTIVE_LOOP_TIME:
            cpus = multiprocessing.cpu_count()
            avg = os.getloadavg()[0] / cpus
            now = datetime.utcnow()
            load = Load(time=now, value=avg)
            db.session.add(load)
            db.session.commit()
            time.sleep(10)
    except:
        print ("Unexpectd error in the data getter process occured ... ")
    finally:
        data_getter_running = False

    data_getter_running = False
    print("Process load getter stops running")
    return


if __name__ == '__main__':
    db.create_all()
    clean_db()
    p = Thread(target=auto_load, args=())
    p.start()
    app.run(port=5000)
