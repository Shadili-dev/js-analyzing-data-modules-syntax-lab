// index.js
// Require the datejs module
const DateJS = require('datejs');

// Function to combine users from multiple arrays
function combineUsers(...args) {
  // Initialize the return object with users array
  const combinedObject = {
    users: []  // This will hold all merged usernames
  };
  
  // Loop through all arrays passed as arguments
  for (let i = 0; i < args.length; i++) {
    // Each args[i] is an array of usernames
    // Merge arrays using spread operator
    combinedObject.users = [...combinedObject.users, ...args[i]];
  }
  
  // Add today's date in M/d/yyyy format using datejs
  const today = new Date();
  combinedObject.merge_date = today.toString('M/d/yyyy');
  
  // Return the combined object
  return combinedObject;
}

// Alternative implementation using reduce (also valid):
// function combineUsers(...args) {
//   // Merge all arrays using reduce and spread operator
//   const mergedUsers = args.reduce((acc, currentArray) => {
//     return [...acc, ...currentArray];
//   }, []);
//   
//   // Create and return the object
//   return {
//     users: mergedUsers,
//     merge_date: new Date().toString('M/d/yyyy')
//   };
// }

// Export the function for testing
if (typeof module !== 'undefined') {
  module.exports = { combineUsers };
}
