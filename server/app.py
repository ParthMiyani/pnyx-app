from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import sys
import os
import json


# Assume engine in same directory if not adjust path as needed
from Engine import get_closest_song_1NN

import pandas as pd

import psycopg2
import os
from dotenv import load_dotenv
from datetime import datetime, timezone
from flask import jsonify

load_dotenv()
app = Flask(__name__)
CORS(app)

# Global variable to store songs data
# songs_df = pd.read_csv('music.csv')

def get_db_connection():
    url = os.getenv("DATABASE_URL")
    conn = psycopg2.connect(url)
    return conn
                            

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
            return "Email taken.", 401
        else:
            # add user to database 
            cur.execute("INSERT INTO Users (userID, email, created_at,artist_id) VALUES (%s, %s, %s,%s);",
                        (next_id, email, datetime.now(timezone.utc),artist_id))
            conn.commit()
            return "UserID: " + str(next_id) , 200
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
  
    return {'name': artist[1]}, 200


# Load songs data
songs_df = pd.read_csv('music.csv')  # Update the path to your music.csv file

@app.route('/recommend', methods=['POST'])
def recommend_songs():
    request_data = request.get_json()
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

with open('audio_data.json', 'r') as file:
    audio_data = json.load(file)

# Retrieves audio url given the song title
@app.route('/get_audio_url', methods=['POST'])
def get_audio_url():
    track_title = request.json['track_title']
    print(track_title)

    # Initialize variables to store songList and track count
    songList = None
    track_count = 0

    # Iterate over each key in the data dictionary
    for key, value in audio_data.items():
        # Check if the value is a dictionary with the 'tracks' key
        if isinstance(value, dict) and 'tracks' in value:
            # Update songList if it's different from the previous key
            if songList != key:
                songList = key
                track_count = 0  # Reset track count for new songList

            # Loop through each track in the 'tracks' list
            for track in value['tracks']:
                track_count += 1  # Increment track count for each track
                # Check if the track_title matches the desired title
                if track['metadata']['track_title'] == track_title:
                    # Return songList and track count
                    return jsonify({"songList": songList, "track": track_count}), 200

    # If the desired track is not found, return an error message
    return jsonify({"error": f"No track found with title '{track_title}'"}), 404

if __name__ == '__main__':
    app.run(debug=True)
