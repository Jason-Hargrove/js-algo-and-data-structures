// console.log everyting.
const log = console.log;


// ===== Logs and Section Recap =====
// ↓↓↓↓↓ Bad ↓↓↓↓↓
// O(n ** 2)
// O(nlog n)
// O(n)
// O(log n)
// O(1)
// ↑↑↑↑↑ Good ↑↑↑↑↑

// log(2 ** 2);
// log(Math.pow(2, 2));


// ===== Analyzing Performance of Arrays and Objects =====

// === Objects ===
// Insertion = O(1)
// Removal = O(1)
// Searching = O(n)
// Access = O(1)
// let instructor = {
//   firstName: "Arthur",
//   isInstructor: true,
//   favoriteNumbers: [1,2,3,4]
// }
//      ▄            ▄                ▄
//  firstName   isInstructor   favoriteNumbers

// Object.keys = O(n)
// log(Object.keys(instructor));
// Object.values = O(n)
// log(Object.values(instructor));
// Object.entries = O(n)
// log(Object.entries(instructor));
// hasOwnProperty = O()
// log(instructor.hasOwnProperty("firstName"));
// log(instructor.hasOwnProperty("dog"));

// === Arrays ===
// Insertion = It depends...
    // .push() ...at the end of the array, no problem. O(1). Constant time.
    // .unshift() ...at the beginning, problem. The entire array will be reindexed.  O(n) roughly.
// Removal = It depends...
    // .pop() ...at the end of the array, no problem.
    // .shift() ...at the beginning, problem. The entire array will be reindexed.
// Searching = O(n)
// Access = O(1)

// let names = ["Michael", "Melissa", "Andrea"];

//    Michael"     "Melissa"      "Andrea"
//       0             1              2

// push = O(1)
// pop = O(1)
// shift = O(n)
// unshift = O(n)
// concat = O(n)
// slice = O(n)
// splice = O(n)
// sort = O(n * log n)
// forEach / map / filter / reduce / etc. = O(n)

// let values = [true, {}, [], 2, "awesome"];


// ===== Algorithms and Problem Solving Patterns =====

// What is an algorithm? A process or set of steps to accomplish a certain task.

// How do you improve?
// 1. Devise a plan for solving problems.
// 2. Master common problem solving patterns.

// Problem solving
// * Understand the problem.
// * Explore concrete examples.
// * Break it down.
// * Solve / simplify.
// * Look back and refactor.

// == Understan the problem ==
//  1. Can I restate the problem in my own words?
//  2. What are the inputs that go into the problem?
//  3. What are the outputs that should come from the solution to the problem?
//  4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
//  5. How should I lable the important pieces of data that are a part of the problem?

// ===============================================================
// Write a function which takes two numbers and returns their sum.
// ===============================================================

//  1. Can I restate the problem in my own words?
// implement additon
//  2. What are the inputs that go into the problem?
// - ints?
// - floats?
// - what about string for large numbers?
//  3. What are the outputs that should come from the solution to the problem?
// - int? float? string?
//  4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
// _____
//  5. How should I lable the important pieces of data that are a part of the problem?
// _____

// == Explore concrete examples ==
//  1. Start with simple examples.
//  2. Progress to more complex examples.
//  3. Explore examples with empty inputs.
//  4. Explore examples with invalid inputs.

// ===============================================================
// Write a function which takes in a string and returns counts of each character in the string.
// ===============================================================
//  1. Start with simple examples.
// charCount("aaaa"); // {a:4}
// charCount("hello"); // {h:1, e:1, l:2, o:1}
//  2. Progress to more complex examples.
// "my phone number is 182763"
// "Hello hi"
//  3. Explore examples with empty inputs.
// charCount("")
//  4. Explore examples with invalid inputs.
// charCount(null)

// ===============================================================
// Write a function which takes in a string and returns counts of each character in the string.
// ===============================================================
// function charCount(str) {
//     // do something
//     // return an object with keys that are lowercase alphanumeric characters in a the string;
// }

const someStr = "Your PIN number is 1234";

function charCount(str) {
    // make object to return at end.
    // loop over string, for each character...
        // if the char is a number/letter AND is a key in object, add one to count.
        // if the char is a number/letter AND not in object, add it to the object and set value to 1.
    // if character is something else (space, period, ect.) don't do anything.
    // return object at end.
}
