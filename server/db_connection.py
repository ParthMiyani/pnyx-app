import psycopg2
import os

def get_db_connection():
    try:
        conn = psycopg2.connect(host='localhost',
                            database='pnyx',
                            user=os.environ['DB_USERNAME'],
                            password=os.environ['DB_PASSWORD'])
        return conn
    except Exception as e:
        print("Database connection failed: ", e)
        return None