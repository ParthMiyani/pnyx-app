import os
import psycopg2
from dotenv import load_dotenv


load_dotenv()
url = os.getenv("DATABASE_URL")
conn = psycopg2.connect(url)

cur = conn.cursor()



cur.execute('DROP TABLE IF EXISTS Artists;')
cur.execute('CREATE TABLE Artists (artist_id INTEGER PRIMARY KEY,'
                                  'ArtistName VARCHAR(50) );'
                                 )
cur.execute('DROP TABLE IF EXISTS Users;')

cur.execute('CREATE TABLE Users (userID INTEGER PRIMARY KEY,'
                                 'email VARCHAR(50),'
                                 'created_at timestamp with time zone,'
                                 'updated_at timestamp with time zone,'
                                 'enabled timestamp with time zone,'
                                 'artist_id INTEGER REFERENCES artists,'
                                 'views_left INTEGER DEFAULT 5,'
                                 'view_count INTEGER DEFAULT 0,'
                                 'purchased_count INTEGER DEFAULT 0);'
                                 )




cur.execute('DROP TABLE IF EXISTS Genres;')
cur.execute('CREATE TABLE Genres (genre_id INTEGER PRIMARY KEY,'
                                'genreName VARCHAR(50));'
                                 ) 

cur.execute('DROP TABLE IF EXISTS Songs;')
cur.execute('CREATE TABLE Songs (song_id INTEGER PRIMARY KEY,'
                                'song_name VARCHAR(200),'
                                'song_link VARCHAR(200),'
                                'genre_id INTEGER REFERENCES genres,'
                                'price INTEGER);')
                                 
cur.execute('DROP TABLE IF EXISTS Revealed;')
cur.execute('CREATE TABLE Revealed (reveal_id INTEGER PRIMARY KEY,'
                                'userID INTEGER REFERENCES Users ON DELETE CASCADE ,'
                                'song_id INTEGER REFERENCES Songs);'
                                 ) 
cur.execute('DROP TABLE IF EXISTS Purchases;')
cur.execute('CREATE TABLE Purchases (purchase_id INTEGER PRIMARY KEY,'
                                'userID INTEGER REFERENCES Users ON DELETE CASCADE ,'
                                'song_id INTEGER REFERENCES Songs);'
                                 ) 



conn.commit()

cur.close()
conn.close()