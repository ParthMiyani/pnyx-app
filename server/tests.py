import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_setup(client):
    response = client.get('/')
    assert response.status_code == 200

def test_signup_success(client):
    response = client.post('/signup', data=dict(email='test_user@example.com'))
    assert response.status_code == 200

def test_signup_failure(client):
    response = client.post('/signup', data=dict(email=''))
    assert response.status_code == 404


# New Tests for CRUD Operations
def test_get_user_success(client):
    # Assuming 'test_user@example.com' exists in the database
    response = client.get('/user/test_user@example.com')
    assert response.status_code == 200

def test_update_user_success(client):
    # Assumes that the endpoint accepts JSON data for updates
    response = client.put('/user/test_user@example.com', json={'metadata': '{"new": "data"}', 'view_count': 1})
    assert response.status_code == 200

def test_delete_user_success(client):
    # Cleanup by deleting the test user created earlier
    response = client.delete('/user/test_user@example.com')
    assert response.status_code == 200