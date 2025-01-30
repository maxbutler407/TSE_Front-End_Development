import { greet } from `/index.js`; // imports the index.js file's greet function 

console.log(greet(`User`)); // calls the greet function with `User` as an argument

fetch('http://localhost:3000/users') // fetch function makes HTTP requests for data from the given http address
    .then(response => response.json()) // converts the response into a JSON format
    .then(data => console.log(data)) // this fetched data is logged into the console
    .catch(error => console.error('Error: ', error)); // catches any errors