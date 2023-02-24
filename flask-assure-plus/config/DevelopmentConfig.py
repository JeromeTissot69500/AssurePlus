from .Config import Config


class DevelopmentConfig(Config):
    SQLALCHEMY_DATABASE_URI = "postgresql://postgres:Development_2023@localhost:5432/flask-assure-plus"
    SECRET_KEY = 'dev'
    DEBUG = True

