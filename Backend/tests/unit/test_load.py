from model import Load
from datetime import datetime


def test_new_load():
    now = datetime.now()
    new_load = Load(time=now, value=0.4)
    assert new_load.time == now
    assert new_load.value == 0.4




