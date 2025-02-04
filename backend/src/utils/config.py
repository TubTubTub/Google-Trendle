import os
import redis
import datetime
from dotenv import load_dotenv
load_dotenv()

class Config:
    CORS_HEADERS = 'Content-Type'
    
    SQLALCHEMY_DATABASE_URI = os.getenv('POSTGRES_URL')

    SESSION_TYPE = 'redis'
    SESSION_PERMANENT = True
    PERMANENT_SESSION_LIFETIME = datetime.timedelta(hours=12)
    SESSION_REDIS = redis.from_url(os.getenv('REDIS_URL'))

    SECRET_KEY = os.getenv('SESSION_SECRET_KEY')