


def test_get_client(test_client):
    client, db = test_client
    response = client.get('/get_load ')
    return response