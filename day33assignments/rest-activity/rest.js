const baseUrl = 'https://jsonplaceholder.typicode.com';

// Get all posts
function getAllPosts() {
    hideResults();
    fetch(`${baseUrl}/posts`)
        .then(response => response.json())
        .then(json => showResult('getAllPostsResult', JSON.stringify(json)));
}

// Get post by id
function getPostById() {
    hideResults();
    fetch(`${baseUrl}/posts/10`)
        .then(response => response.json())
        .then(json => showResult('getPostByIdResult', JSON.stringify(json)));
}

// Create new post
function createNewPost() {
    hideResults();
    const post = {
        title: 'New Post',
        body: 'Lorem ipsum dolor sit amet',
        userId: 1
    };
    fetch(`${baseUrl}/posts`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
        .then(json => showResult('createNewPostResult', `New post created with ID ${json.id}`));
}

// Replace post by id
function replacePost() {
    hideResults();
    const post = {
        title: 'Replaced Post',
        body: 'Lorem ipsum dolor sit amet',
        userId: 1
    };
    fetch(`${baseUrl}/posts/12`, {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
        .then(json => showResult('replacePostResult', JSON.stringify(json)));
}

// Update post by id
function updatePost() {
    hideResults();
    const post = {
        title: 'Updated Title'
    };
    fetch(`${baseUrl}/posts/12`, {
        method: 'PATCH',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
        .then(json => showResult('updatePostResult', JSON.stringify(json)));
}

// Delete post by id
function deletePost() {
    hideResults();
    fetch(`${baseUrl}/posts/12`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                showResult('deletePostResult', 'Post with ID 12 was successfully deleted');
            } else {
                showResult('deletePostResult', `Error deleting post: ${response.status} ${response.statusText}`);
            }
        });
}

// Hide all result elements
function hideResults() {
    const results = document.querySelectorAll('.result');
    results.forEach(result => result.style.display = 'none');
}

// Show result in specified element
function showResult(elementId, result) {
    const resultElement = document.getElementById(elementId);
    resultElement.innerHTML = result;
    resultElement.style.display = 'block';
}

// Get all posts button
const getAllPostsButton = document.getElementById('getAllP');
getAllPostsButton.addEventListener('click', getAllPosts);

// Get post by ID button
const getPostByIdButton = document.getElementById('getId');
getPostByIdButton.addEventListener('click', getPostById);

// Create new post button
const createNewPostButton = document.getElementById('createNewP');
createNewPostButton.addEventListener('click', createNewPost);

// Replace post button
const replacePostButton = document.getElementById('replaceP');
replacePostButton.addEventListener('click', replacePost);

// Update post button
const updatePostButton = document.getElementById('updateP');
updatePostButton.addEventListener('click', updatePost);

// Delete post button
const deletePostButton = document.getElementById('deleteP');
deletePostButton.addEventListener('click', deletePost);