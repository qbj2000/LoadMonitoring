from flask import Flask

PROD_DB = 'sqlite:///load.sqlite3'
TEST_DB = 'sqlite:///load_test.sqlite3'

def create_app(prod=True):
    app = Flask(__name__)

    _db = PROD_DB if prod else TEST_DB
    app.config['SQLALCHEMY_DATABASE_URI'] = _db

    return app