import os
import psycopg2

conn = psycopg2.connect(
        host="localhost",
        database="pnyx_db",
        user=os.environ['DB_USERNAME'],
        password=os.environ['DB_PASSWORD'])

cur = conn.cursor()

cur.execute('DROP TABLE IF EXISTS Users;')
cur.execute('CREATE TABLE Users (email VARCHAR(255) PRIMARY KEY,'
                                 'artist_code VARCHAR(50),'
                                 'metadata JSON,'
                                 'view_count INTEGER DEFAULT 0,'
                                 'purchase_list VARCHAR(255)[]);'
                                 )
cur.execute('DROP TABLE IF EXISTS Artists;')
cur.execute('CREATE TABLE Artists (artist_id VARCHAR(100) PRIMARY KEY,'
                                 'metadata JSON);'
                                 )


conn.commit()

cur.close()
conn.close()