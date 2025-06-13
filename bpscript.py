import sqlite3

#connect to the SQLite Database
conn = sqlite3.connect('bposts.db')
conn.row_factory = sqlite3.Row #allows accessing columns by name

#create a cursor object
cur = conn.cursor()

#fetch all blog posts
cur.execute('SELECT * FROM blog_posts')
posts = cur.fetchall()

#print out each post
for post in posts:
    print(f"Title: {post['title']}")
    print(f"Content: {post['content']}")
    print(f"Author: {post['author']}")
    print(f"Date: {post['published-date']}")
    print("-" * 40)

#close the connection
conn.close()        