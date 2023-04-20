//Create an array of user objects called users. Each user object should have an id, name, and email property.
const users = [
    { id: 1, name: 'Camilo', email: 'camilo@gmail.com' },
    { id: 2, name: 'Marina', email: 'marina@gmail.com' },
    { id: 3, name: 'Albert', email: 'albert@gmail.com' }
]

// Implement a function called fetchUserById that accepts a user ID as an argument and returns a promise.
// The promise should resolve with the user object if the user with the given ID exists in the users array. 
//Otherwise, it should reject with an error message.
//Simulate an asynchronous request by using setTimeout() 
//to delay the resolution or rejection of the promise by 1 second.

function fetchUserById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Simulate an asynchronous request.
            const userId = users.find((user) => user.id === id);
            if (userId) {
                resolve(userId);
            } else {
                reject('User not found');
            }
        }, 1000);
    });
}


// Use the fetchUserById function to fetch the user with ID 1. 
// Log the user object if the promise is fulfilled and the error message if the promise is rejected. 
// Next, chain another fetchUserById call to fetch the user with ID 2. 
// Log the user object if the promise is fulfilled and the error message if the promise is rejected.

fetchUserById(1)
.then(userId => {
    console.log(userId);
  })
  
  fetchUserById(2)
  .then(userId => {
    console.log(userId);
})
.catch(error => {
    console.log(error);
    
});
