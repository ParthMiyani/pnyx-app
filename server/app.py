from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import json


# Assume engine in same directory if not adjust path as needed
from engine import get_closest_song_1NN
from db_connection import get_db_connection

import pandas as pd

from datetime import datetime, timezone

app = Flask(__name__)
CORS(app)

# Global variable to store songs data
# songs_df = pd.read_csv('music.csv')
                            

@app.route('/')
def setup():
    return 'Intialized setup'

@app.route('/signup', methods=['POST'])
@cross_origin()
def signup():
    conn = get_db_connection()
    cur = conn.cursor()
    request_data = request.get_json()
    email, artist_id = None, None
    # if email and artist_id are not provided, return 400 status
    if request_data:
        if 'email' in request_data:
            email = request_data['email']
        if 'artist_id' in request_data:
            artist_id = request_data['artist_id']
        if not artist_id or not email:
            return "Invalid data", 400
    else:
        return "Invalid data", 400

    try:
        # find the more recent user_id added
        cur.execute("SELECT MAX(userID) FROM Users;")
        max_id = cur.fetchone()[0]
        next_id = max_id + 1 if max_id else 1
        # determine if email is taken
        cur.execute("SELECT userID FROM Users WHERE email=%s;", [email])
        user = cur.fetchone()

        if user:
            return jsonify({"message": "User Login", "userID": user[0]}), 201
        else:
            # add user to database 
            cur.execute("INSERT INTO Users (userID, email, created_at,artist_id) VALUES (%s, %s, %s,%s);",
                        (next_id, email, datetime.now(timezone.utc),artist_id))
            conn.commit()
            return jsonify({"message": "User Created", "userID": next_id}), 201
    except Exception as e:
        conn.rollback()  
        return "Error occurred: " + str(e), 500
    finally:
        cur.close()
        conn.close()
        
    
@app.route('/users/<userID>', methods=['GET'])
def get_user(userID):
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        # get user from database
        cur.execute('SELECT * FROM users WHERE userID = %s;', (userID,))
        user = cur.fetchone()
        if not user:
            return "User not found.", 404
            
        # get user's purchases and reveals 
        cur.execute('SELECT song_id FROM purchases WHERE userID = %s;', (userID,))
        purchases = [purchase[0] for purchase in cur.fetchall()]

        cur.execute('SELECT song_id FROM Revealed WHERE userID = %s;', (userID,))
        revealed = [reveal[0] for reveal in cur.fetchall()]

        cur.close()
        conn.close()
        
        #format data to send in response 
        user_data = {
            'email': user[1],  
            'artist_id': user[5], 
            'views_left': user[6],  
            'view_count': user[7],  
            'purchase_count': user[8], 
            'purchased_songs': purchases,
            'revealed_songs': revealed
        }

        return jsonify(user_data), 200
    except Exception as e:
        return str(e), 500


@app.route('/users/<userID>', methods=['PUT'])
def update_user(userID):
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        # extract all the payload parameters
        new_view_count = request.json['view_count']
        new_views_left = request.json['views_left']
        new_purchase_count = request.json['purchase_count']
        new_email = request.json['email']
        new_artist = request.json['artist_id']
        new_purchases = request.json['new_purchases']
        new_reveals = request.json['new_reveals']
    except KeyError:
        return "Invalid data", 400 
    
    if new_email != '':
        cur.execute('SELECT userID FROM users WHERE email = %s AND userID <> %s;', (new_email, userID))
        user = cur.fetchone()
        if user:
            return "Email already taken.", 401
    else:
        return "Invalid data", 400
    
    try:
        # update user info
        cur.execute('UPDATE users SET updated_at = %s, view_count = %s, views_left = %s, purchased_count = %s, email = %s, artist_id = %s WHERE userID = %s;',
                    (datetime.now(timezone.utc), new_view_count, new_views_left, new_purchase_count, new_email, new_artist, userID))
        # add new purchases to database 
        if new_purchases:
            cur.execute("SELECT MAX(purchase_id) FROM purchases")
            max_id = cur.fetchone()[0]
            new_pid = max_id + 1 if max_id else 1
            for song in new_purchases:
                cur.execute("INSERT INTO purchases (purchase_id, userID, song_id) VALUES (%s, %s, %s);", (new_pid, userID, song))
                new_pid += 1
        # add new reveals to database
        if new_reveals:
            cur.execute("SELECT MAX(reveal_id) FROM revealed")
            max_id = cur.fetchone()[0]
            new_rid = max_id + 1 if max_id else 1
            for song in new_reveals:
                cur.execute("INSERT INTO Revealed (reveal_id, userID, song_id) VALUES (%s, %s, %s);", (new_rid, userID, song))
                new_rid += 1
        
        conn.commit()
        updated_rows = cur.rowcount
        cur.close()
        conn.close()
        
        if updated_rows:
            return "User updated successfully.", 200
        else:
            return "User not found.", 404
    except Exception as e:
        return str(e), 500
    
@app.route('/users/<userID>/user-song-views', methods=['PUT'])
def decrement_views_left(userID):
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute('SELECT views_left, view_count FROM users WHERE userID = %s;', (userID,))
        response = cur.fetchone()
        if response[0] == 0:
            return "No views left for today.", 401
        cur.execute('UPDATE users SET views_left = views_left - 1, view_count = view_count + 1 WHERE userID = %s;', (userID,))
        conn.commit()
        cur.close()
        conn.close()
        return "View decremented successfully.", 200
    except Exception as e:
        return str(e), 500


@app.route('/users/<userID>', methods=['DELETE'])
def delete_user(userID):
    conn = get_db_connection()
    cur = conn.cursor()
    # delete user from database
    cur.execute('DELETE FROM users WHERE userID = %s;', (userID,))
    deleted_rows = cur.rowcount
    conn.commit()
    cur.close()
    conn.close()
    if deleted_rows:
        return "User deleted successfully.", 200
    else:
        return "User not found.", 404

@app.route('/artists/<artist_id>', methods=['GET'])
def get_artist(artist_id):
    conn = get_db_connection()
    cur = conn.cursor()
    # get artist from database
    cur.execute('SELECT * FROM artists WHERE artist_id = %s;', (artist_id,))

    artist = cur.fetchone()
    if not artist:
        return "Artist not found.", 404

    cur.close()
    conn.close()
  
    return {'artistId': artist_id, 'name': artist[1]}, 200

@app.route('/artist-suggested', methods=['GET'])
def get_suggested_artists():
    query_header = request.headers.get('X-Query')

    print(query_header)
    if query_header:
        query = json.loads(query_header)
    else:
        query = ''

    if not query:
        return "Invalid data", 400
    
    print("query" + query)

    conn = get_db_connection()
    cur = conn.cursor()
    # get all artists from database
    cur.execute("SELECT artist_id, artistname FROM Artists WHERE artistname ILIKE %s LIMIT 10", ('%' + query + '%',))
    artists = cur.fetchall()
    cur.close()
    conn.close()
    suggestions = [{"id":a[0], "name":a[1]} for a in artists]
    return jsonify(suggestions), 200

# Load songs data
songs_df = pd.read_csv('music.csv')  # Update the path to your music.csv file

@app.route('/recommend', methods=['GET'])
def recommend_songs():
    artists_header = request.headers.get('X-finalArtist')

    if artists_header:
        artists = json.loads(artists_header)
    else:
        artists = ''
    
    if not artists:
        return "Invalid data", 400

    conn = get_db_connection()
    cur = conn.cursor()

    # get all songs for the given artist from database
    try:
        cur.execute("SELECT song_name FROM artists WHERE artist_id = %s;", (artists,))
        songs = cur.fetchall()
        return jsonify(songs[0][0]), 200
    except Exception as e:
        return str(e), 500
    finally:
        cur.close()
        conn.close()

    # TODO: remove above code after the algorithm is implemented

    if not request_data or 'song_names' not in request_data:
        return "Invalid data: Please provide song names.", 400
    
    song_names = request_data['song_names']
    start_songs_features = []

    # For each song name provided, find its features in the songs_df
    for song_name in song_names:
        song_row = songs_df.loc[songs_df['Title'] == song_name]
        if not song_row.empty:
            # Assuming the first row and all columns after 'Title' contain the features
            song_features = song_row.iloc[0, 1:].tolist()
            start_songs_features.append([song_name] + song_features)
        else:
            return jsonify({"error": f"Song named {song_name} not found in the dataset."}), 404

    # Now start_songs_features contains the features for the input songs
    # Convert start_songs_features list to the format expected by your Engine function if needed
    # This part might need adjustments based on the input format your engine expects

    all_songs = songs_df.values.tolist()
    recommended_song_titles = get_closest_song_1NN(start_songs_features, all_songs, N=10)

    # Return the recommended song titles
    return jsonify({"recommendations": recommended_song_titles}), 200

# with open('audio_data.json', 'r') as file:
#     audio_data = json.load(file)
with open('pnyx_audio_data_2.json', 'r') as file:
    audio_data_2 = json.load(file)

# Retrieves audio url given the song title
@app.route('/get-song-data', methods=['POST'])
def get_song_data():
    conn = get_db_connection()
    cur = conn.cursor()
    request_data = request.get_json()

    if not request_data or 'song-title' not in request_data:
        return "Invalid data: Please provide song title.", 400
    
    song_titles = request_data['song-title']
    try:
        # get songs from database
        placeholders = ', '.join(['%s'] * len(song_titles))
        cur.execute(f'SELECT song_id, song_name, song_link, genre_id, price, duration, song_artist FROM songs WHERE song_name IN ({placeholders});', song_titles)
        songs = cur.fetchall()
        if not songs:
            return "Songs not found.", 404
        return jsonify([{"id": id, "name": name, "link": link, "genre_id": genre_id, "price": price, "duration": duration, "song_artist": song_artist } for id, name, link, genre_id, price, duration, song_artist in songs]), 200
    except Exception as e:
        return str(e), 500
    finally:
        cur.close()
        conn.close()

@app.route('/import_json_into_database', methods=['POST'])
def import_json_into_database():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT MAX(artist_id) FROM Artists;")
    max_artist_id = cur.fetchone()[0]
    next_artist_id = max_artist_id + 1 if max_artist_id else 1
    cur.execute("SELECT MAX(song_id) FROM songs;")
    max_song_id = cur.fetchone()[0]
    next_song_id = max_song_id + 1 if max_song_id else 1
    previous_artist = None
    try:
        # get song data from JSON file
        for ArtistName, song_data in audio_data_2.items():
            for song in song_data:
                # Insert song data into database
                if 'metadata' not in song:
                    continue
                if 'artists' not in song['metadata']:
                    continue
                else:
                    if ArtistName != previous_artist:
                        cur.execute("INSERT INTO artists (artist_id, artistname, song_name) VALUES (%s, %s, ARRAY[%s]);", 
                                (next_artist_id, ArtistName, song['metadata']['track_title']))
                        previous_artist = ArtistName
                        next_artist_id += 1
                    else:
                        cur.execute("UPDATE artists SET song_name = array_append(song_name, %s) WHERE artistname = %s;", (song['metadata']['track_title'], ArtistName))

                    cur.execute("INSERT INTO Songs (song_id, song_name, song_link, duration, song_artist) VALUES (%s, %s, %s, %s, ARRAY[%s]);",
                            (next_song_id, song['metadata']['track_title'], song['metadata']['harmix_audio_url'], song['metadata']['harmix_audio_duration'], song['metadata']['artists']))
                next_song_id += 1
            
        conn.commit()
        return "Data imported successfully.", 200

    except Exception as e:
        conn.rollback()
        return str(e), 500
    finally:
        cur.close()
        conn.close()

# @app.route('/update-artist-song', methods=['GET'])
# def update_artist_song():
    
#     conn = get_db_connection()
#     cur = conn.cursor()
#     try:
#         for ArtistName, song_data in audio_data_2.items():
#             for song in song_data:
#                 if 'metadata' not in song:
#                     continue
#                 if 'artists' not in song['metadata']:
#                     continue
#                 else:
#                     for artist in song['metadata']['artists']:
#                         cur.execute("UPDATE artists SET song_name = array_append(song_name, %s) WHERE artistname = %s;", (song['metadata']['track_title'], artist))
#         conn.commit()
#         return "Data updated successfully.", 200
#     except Exception as e:
#         conn.rollback()
#         return str(e), 500
#     finally:
#         cur.close()
#         conn.close()

# @app.route('/add-duration', methods=['GET'])
# def add_duration():
#     conn = get_db_connection()
#     cur = conn.cursor()
#     try:
#         for ArtistName, song_data in audio_data_2.items():
#             for song in song_data:
#                 if 'metadata' not in song:
#                     continue
#                 if 'artists' not in song['metadata']:
#                     continue
#                 else:
#                     for artist in song['metadata']['artists']:
#                         cur.execute("UPDATE songs SET duration = %s WHERE song_name = %s;", (song['metadata']['duration'], song['metadata']['track_title']))
#         conn.commit()
#         return "Data updated successfully.", 200
#     except Exception as e:
#         conn.rollback()
#         return str(e), 500
#     finally:
#         cur.close()
#         conn.close()

if __name__ == '__main__':
    app.run(debug=True)