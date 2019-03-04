from flask_sqlalchemy import SQLAlchemy
from app import create_app

app = create_app(prod=True)
db = SQLAlchemy(app)


class Load(db.Model):
    time = db.Column(db.DateTime, primary_key=True)
    value = db.Column(db.REAL, unique=False, nullable=False)

    def __init__(self, time, value):
        self.time = time
        self.value = value

    def __repr__(self):
        return "Load {} : {}".format(self.dt.strftime("%Y-%m-%d %H:%M:%S"), self.load)
