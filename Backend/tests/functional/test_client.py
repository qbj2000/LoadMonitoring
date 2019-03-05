from main import auto_load
from threading import Thread
import time


def test_get_client(test_client):
    """
    Test of the auto load function
    :param test_client: we create a simulation environment with a test db, a test client app and a test Load objject
    :return:
    Before running the auto_laod function there should be 2 rows of type Load in the db (those that we inserted when creating the test env)
    After there should be 3. we wait 500 ms to simulate the asynchronous execution
    """
    client, db, Load = test_client
    response = client.get('/get_load ')
    db_data = Load.query.order_by(Load.time.desc()).all()
    assert len(db_data) == 2
    for row in db_data:
        assert isinstance(row, Load)

    assert(db_data[0].value) == 0.8
    p = Thread(target=auto_load, args=(db,))
    p.setDaemon(True)
    p.start()
    time.sleep(0.5)
    db_data = Load.query.order_by(Load.time.desc()).all()
    assert len(db_data) == 3
    for row in db_data:
        assert isinstance(row, Load)
