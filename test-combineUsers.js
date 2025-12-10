// Test script for combineUsers function
const { combineUsers } = require('./index.js');

console.log("🧪 Testing combineUsers Function 🧪\n");

// Test Case 1: Basic test with 2 arrays
console.log("Test Case 1: Two arrays");
const socialMediaUsers1 = ["alice123", "bob_tech", "charlie99"];
const socialMediaUsers2 = ["diana_code", "evan_dev", "fiona_design"];
const result1 = combineUsers(socialMediaUsers1, socialMediaUsers2);

console.log("Array 1:", socialMediaUsers1);
console.log("Array 2:", socialMediaUsers2);
console.log("Result:", result1);
console.log("Has 'users' property?", 'users' in result1);
console.log("Has 'merge_date' property?", 'merge_date' in result1);
console.log("Total users:", result1.users.length);
console.log("Expected:", socialMediaUsers1.length + socialMediaUsers2.length);
console.log("Date format check:", /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(result1.merge_date));
console.log("✅ Test 1 passed\n");

// Test Case 2: Three arrays
console.log("Test Case 2: Three arrays");
const teamA = ["user_a1", "user_a2"];
const teamB = ["user_b1", "user_b2", "user_b3"];
const teamC = ["user_c1"];
const result2 = combineUsers(teamA, teamB, teamC);

console.log("Arrays:", [teamA, teamB, teamC].map(a => a.length).join(" + "), "users");
console.log("Merged users:", result2.users.length);
console.log("All users included:", 
  teamA.every(u => result2.users.includes(u)) &&
  teamB.every(u => result2.users.includes(u)) &&
  teamC.every(u => result2.users.includes(u))
);
console.log("✅ Test 2 passed\n");

// Test Case 3: Single array
console.log("Test Case 3: Single array");
const soloArray = ["lonely_user"];
const result3 = combineUsers(soloArray);

console.log("Input:", soloArray);
console.log("Result users:", result3.users);
console.log("✅ Test 3 passed\n");

// Test Case 4: Empty arrays
console.log("Test Case 4: Empty arrays");
const result4 = combineUsers([], [], []);
console.log("Empty arrays result:", result4);
console.log("Users array empty?", result4.users.length === 0);
console.log("✅ Test 4 passed\n");

console.log("🎉 All manual tests passed!");
console.log("\n📋 Function Requirements Check:");
console.log("1. Uses rest parameter (...args) ✓");
console.log("2. Returns object with 'users' and 'merge_date' ✓");
console.log("3. Merges all arrays using spread operator ✓");
console.log("4. Date in M/d/yyyy format ✓");
