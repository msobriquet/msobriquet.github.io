from flask import Flask, jsonify
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def get_db_connection():
    conn = sqlite3.connect('bposts.db')
    conn.row_factory = sqlite3.Row #enable access to columns by name.
    return conn

@app.route('/api/posts', methods =['GET'])
def get_posts():
    conn = get_db_connection() #connect to database
    posts = conn.execute('SELECT title, content, author, published_date FROM blog_posts').fetchall()
    conn.close


    #convert the data into a list of dictionaries
    #create a dictionary for each row(post)

    post_list = [{'title': row['title'], 'content': row['content'], 'author': row['author'], 'published_date': row['published_date']} for row in posts]
    response = jsonify(post_list)
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response


    # # Sample response data
    # posts = [
    #     {'title': 'Sample Post', 'content': 'This is a sample post.', 'author': 'John Doe', 'published_date': '2024-08-15 14:32:11'}
    # ]
    # print(posts)
    # return jsonify(posts)  # Ensure data is returned correctly as JSON

if __name__ == '__main__':
    app.run(debug=True)