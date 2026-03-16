const axios = require('axios'); // How Node imports libraries

// GET request
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log("--- GET DATA ---");
        console.log(response.data[0]); // Just showing the first post
    });

// POST request
axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'The Studio',
    body: 'Something funny',
    userId: 1,
})
.then(response => {
    console.log("--- POST SUCCESS ---");
    console.log(response.data);
});