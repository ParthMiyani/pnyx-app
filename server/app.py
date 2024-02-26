from flask import Flask, request 
import psycopg2
import os

app = Flask(__name__)


def get_db_connection():
    conn = psycopg2.connect(host='localhost',
                            database='pnyx_db',
                            user=os.environ['DB_USERNAME'],
                            password=os.environ['DB_PASSWORD'])
    return conn
                            

@app.route('/')
def setup():
    return 'Intialized setup'

@app.route('/signup', methods=['POST'])
def signup():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('''SELECT email FROM users;''')   

    error = ''
    if request.method == 'POST':
        for email in cur:
            if email == request.form['email']:
                error = 'Email taken'
        if request.form['email'] == '':
            error = 'Invalid email. '
        
        else:
            cur.execute("INSERT INTO users (email) VALUES (%s);",[request.form['email']])
            conn.commit() 
           
        if error != '':
            return "Error signing user up.", 404
            
        else:
            return "User signed up successfully.", 200




@app.route('/user/<email>', methods=['GET'])
def get_user(email):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM users WHERE email = %s;', (email,))
    user = cur.fetchone()
    cur.close()
    conn.close()
    if user:
        return {'email': user[0], 'artist_code': user[1], 'metadata': user[2], 'view_count': user[3], 'purchase_list': user[4]}, 200
    else:
        return "User not found.", 404


@app.route('/user/<email>', methods=['PUT'])
def update_user(email):
    conn = get_db_connection()
    cur = conn.cursor()
    if request.method == 'PUT':
        new_metadata = request.json['metadata']
        new_view_count = request.json['view_count']
        cur.execute('UPDATE users SET metadata = %s, view_count = %s WHERE email = %s;',
                    (new_metadata, new_view_count, email))
        conn.commit()
        updated_rows = cur.rowcount
        cur.close()
        conn.close()
        if updated_rows:
            return "User updated successfully.", 200
        else:
            return "User not found.", 404


@app.route('/user/<email>', methods=['DELETE'])
def delete_user(email):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('DELETE FROM users WHERE email = %s;', (email,))
    deleted_rows = cur.rowcount
    conn.commit()
    cur.close()
    conn.close()
    if deleted_rows:
        return "User deleted successfully.", 200
    else:
        return "User not found.", 404

if __name__ == '__main__':
    app.run(debug=True)