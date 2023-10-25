// Sample array of names (replace this with your actual array of names)
const namesArray = ["John", "Jane", "Bob", "Alice", "Jack"];

// Function to determine greeting based on the starting letter of the name
function determineGreeting(name) {
  // Convert the name to lowercase for case-insensitive comparison
  const lowerCaseName = name.toLowerCase();

  // Check if the name starts with 'j'
  if (lowerCaseName.startsWith('j')) {
    // Print "Goodbye JSomeName"
    console.log(`Goodbye J${name}`);
  } else {
    // Print "Hello SomeName"
    console.log(`Hello ${name}`);
  }
}

// Loop over the array of names and determine greeting for each name
for (let i = 0; i < namesArray.length; i++) {
  determineGreeting(namesArray[i]);
}
