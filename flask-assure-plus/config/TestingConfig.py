from .Config import Config


class TestingConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:Development_2023@localhost:5432/flask-assure-plus-test'
    TESTING = True

