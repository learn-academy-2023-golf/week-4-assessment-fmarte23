// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffleColors", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    it("returns an array that removes first index and shuffles the rest", () => {
      expect(shuffleColors(colors1)).not.toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]))
      expect(shuffleColors(colors2)).not.toEqual(expect.arrayContaining(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]))
    })
  })

const shuffleColors = (array) => {
    const newArray = array.shift()
    for(let i = newArray.length; i < 0; i--){
        var j = math.floor(Math.random() * (i + 1))
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
}

// function shuffleColors(arr) {
//      arr.sort(() => Math.random() - 0.5);
// }
// // function shuffleArray(arr) { // DID NOT WORK FOR ME
//     arr.sort(() => Math.random() - 0.5);
//   }
//   let arr = ["purple", "blue", "green", "yellow", "pink"];
//   shuffleColors(arr);
//   console.log(arr)
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]


// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

// Pseudo code:
// Define a function

// The function takes in an array parameter

// Remove the first item from the array

// Shuffle the remaining items in the array

// End the function.



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("calculateTally", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
    it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
      expect(calculateTally(votes1)).toEqual(11)
      expect(calculateTally(votes2)).toEqual(-31)
    })
  })

  const calculateTally = (obj) => {
    const tally = obj.upVotes - obj.downVotes
    return tally
  }

  
//   // Example usage:
//   const votesObject = { up: 10, down: 3 };
//   const tally = calculateTally(votesObject);
//   console.log('Tally:', tally); // Output: Tally: 7
  

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// Pseudo code:
// Define the function calculateTally that takes in object

// Accept an object as input

// Access the "upvotes" property of the object

// Access the "downvotes" property of the object

// Subtract or add the value of "upvotes" and "downvotes"

// Return the total tally