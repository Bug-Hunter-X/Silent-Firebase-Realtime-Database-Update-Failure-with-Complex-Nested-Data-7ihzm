The primary solution is to always check for errors returned from the Firebase update operation.  Firebase's asynchronous nature often hides errors.  Do not blindly assume the update was successful.  Always monitor the update's promise for errors and handle them appropriately.  Logging errors and handling failures gracefully will reveal the underlying issues.

Improved Code (JavaScript):

firebase.database().ref(`/data/users/${uid}/profile`).update({
  "name": "John Doe",
  "address": {
    "street": "123 Main St" // Ensure all fields required by rules are present
  }
}).then(() => {
  console.log('Update successful!');
}).catch(error => {
  console.error('Update failed:', error); // Log the error for debugging
  // Handle the error appropriately, e.g., show an error message to the user
});

Additionally, consider using transactions or other atomic operations to ensure data consistency when dealing with concurrent updates and complex data structures.  Thorough testing of your security rules with various update scenarios is also crucial.  A well-defined error handling system will make the process significantly less painful.