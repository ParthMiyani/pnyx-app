from flask import Flask, request
import psycopg2
import os
from db_connection import get_db_connection

def create_artist(user_id, artistname, songs):
  """
  This function creates a new artist entry in the database.

  Args:
      user_id (str): The user ID (email) of the artist.
      artistname (str): The artist's name.
      songs (list): A list of song IDs associated with the artist.

  Returns:
      dict: A dictionary containing the newly created artist information or an error message.
  """
  conn = get_db_connection()
  cur = conn.cursor()
  try:
    cur.execute("INSERT INTO Artists (user_id, artistname, songs) VALUES (%s, %s, %s);", (user_id, artistname, songs))
    conn.commit()
    return {"message": "Artist created successfully."}, 201
  except (Exception, psycopg2.Error) as error:
    return {"error": str(error)}, 500
  finally:
    if conn:
      cur.close()
      conn.close()

def get_artist(artist_id):
  """
  This function retrieves an artist's information from the database.

  Args:
      artist_id (str): The artist's ID.

  Returns:
      dict: A dictionary containing the artist's information or an error message.
  """
  conn = get_db_connection()
  cur = conn.cursor()
  cur.execute('SELECT * FROM Artists WHERE artist_id = %s;', (artist_id,))
  artist = cur.fetchone()
  cur.close()
  conn.close()
  if artist:
    return {'artist_id': artist[0], 'user_id': artist[1], 'artistname': artist[2], 'songs': artist[3], 'metadata': artist[4]}, 200
  else:
    return {"error": "Artist not found."}, 404

# Add similar functions for updating and deleting artists
