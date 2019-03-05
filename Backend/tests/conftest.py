from app import create_app
from datetime import datetime
import pytest
from flask_sqlalchemy import SQLAlchemy


@pytest.fixture(scope='module')
def test_client():

        app = create_app(prod=False)
        db = SQLAlchemy(app)

        class Load(db.Model):
            time = db.Column(db.DateTime, primary_key=True)
            value = db.Column(db.REAL, unique=False, nullable=False)

        db.create_all()

        load1 = Load(time=datetime(2019, 2, 28, 14, 30, 00), value=0.4)
        load2 = Load(time=datetime(2019, 2, 28, 14, 34, 00), value=0.8)

        db.create_all()

        db.session.add(load1)
        db.session.add(load2)

        # Commit the changes for the users
        db.session.commit()

        testing_client = app.test_client()
        ctx = app.app_context()
        ctx.push()

        yield testing_client, db, Load  # this is where the testing happens!

        ctx.pop()

        db.drop_all()