//create element (object) of type template named header
const header = document.createElement('template');
header.innerHTML = `
<h1>
    <a id="main-title" href="index.html"> 
    ≥w≤ paraphernalia ≥w≤ 
    </a>
</h1>
<nav>
<ul>
    <li><a class ="title" href="about.html">ABOUT</a></li>
    <li><a class ="title" href="#">BLOG</a></li>
    <li><a class ="title" href="writing-home.html">WRITINGS</a></li>
    <li><a class ="title" href="books.html">BOOKS</a></li>
    <li><a class ="title" href="canvas-stars.html">GAMES</a></li>
</ul>
</nav>
`;
document.getElementById("header-sec").appendChild(header.content);

const footer = document.createElement('template')
footer.innerHTML = `
<p>
    mine. feel free to copy any code though :P
</p>
<a href="mailto:danir8228@gmail.com">email me!</a>
`;
document.getElementById("footer-sec").appendChild(footer.content);


// Function to fetch posts from the API and display them

async function fetchPosts() {
    try {
        // Fetch data from your Flask API
        const response = await fetch('http://127.0.0.1:5000/api/posts'); // URL of your API endpoint
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON data
        const posts = await response.json();

        // Select the container to display posts
        const postsContainer = document.getElementById('posts-container');

        //TODO: add links and how posts look
        // Loop through the posts and create HTML for each one
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <div class="meta"> Author: ${post.author} ${new Date(post.published_date).toLocaleDateString()}</div>
                <p>${post.content}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Call the function to fetch and display posts when the page loads
window.onload = fetchPosts;

