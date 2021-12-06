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
// * Break it Down
// ===============================================================

/* <--- Start Break it Down Comment.

Example of what it should return.
charCount("Your PIN number is 1234!")
    {
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        b: 1,
        e: 1,
        i: 1,
        m: 1,
        n: 1,
        o: 1,
        p: 1,
        r: 2,
        s: 1,
        u: 2,
        y: 1
    }

// function charCount(str) {
//     // do something
//     // return an object with keys that are lowercase alphanumeric characters in a the string;
// }

function charCount(str) {
    // make object to return at end.
    // loop over string, for each character...
        // if the char is a number/letter AND is a key in object, add one to count.
        // if the char is a number/letter AND not in object, add it to the object and set value to 1.
    // if character is something else (space, period, ect.) don't do anything.
    // return object at end.
}
---> end Break it Down Comment */

// ===============================================================
// * Simplify
// Solve The Problem - if you can't Solve a Simpler Problem!
// ===============================================================

// function charCount(str) {
//     // make object to return at end.
//     let result = {};
//     // loop over string, for each character...
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         // if the char is a number/letter AND is a key in object, add one to count.
//         if (result[char] > 0) {
//             result[char]++;
//         // if the char is a number/letter AND not in object, add it to the object and set value to 1.
//         } else {
//             result[char] = 1;
//         };
//     }
//     // if character is something else (space, period, ect.) don't do anything.
//     // return object at end.
//     return result;
// }
// log(charCount('Hi There!'))

// ===============================================================
// * Look Back & Refactor
// Try to improve your code.
// ===============================================================

// Can you check the result?
// Can you derive the result differently?
// Can you understand it at a glance?
// Can you use the result or method fo some other problem?
// Can you improve the performance of you solution?
// Can you think of other ways to refactor?
// How have other people solved this problem?

// function charCount(str) {
//     // make object to return at end.
//     let obj = {};
//     // loop over string, for each character...
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         // if the char is a number/letter AND is a key in object, add one to count.
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++;
//                 // if the char is a number/letter AND not in object, add it to the object and set value to 1.
//             } else {
//                 obj[char] = 1;
//             };
//         }
//     }
//     // if character is something else (space, period, ect.) don't do anything.
//     // return object at end.
//     return obj;
// }

// ===== Can Refactor =====
// function charCount(str) {
//     let obj = {};
//     // Refactor with a For Of loop.
//     for (let char of str) {
//         char = char.toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//         // Refactor if else with...
//             obj[char] = ++obj[char] || 1;
//         }
//     }
//     return obj;
// }

// ===== Are Regular Expressions Efficient? =====
// Other ways to handle the situation?
// log("hi".charCodeAt(0));
// log("hi".charCodeAt(1));
// log("j".charCodeAt(0));
//
// function charCount(str) {
//     let obj = {};
//     for (let char of str) {
//         if (isAlphaNumeric(char)) {
//             char = char.toLowerCase();
//             obj[char] = ++obj[char] || 1;
//         }
//     }
//     return obj;
// }
//
// // Replace Regular Expression with mathematical comparison with character code.
// function isAlphaNumeric(char) {
//     let code = char.charCodeAt(0);
//     if (!(code > 47 && code < 58) && // numeric (0-9)
//         !(code > 64 && code < 91) && // upper alpha (A-Z)
//         !(code > 96 && code < 123)) { // lower alpha (a-z)
//        return false;
//     }
//     return true;
// }
//
// log(charCount('Hello hi!'));

// ===============================================================
// RECAP
// * Understand the Problem
// * Explore Concrete Examples
// * Break It Down
// * Solve/Simplify
// * Look Back and Refactor
// ===============================================================

// ===============================================================
// HOW DO YOU IMPROVE?
// 1. Devise a plan for solving problems
// 2. Master common problem solving patterns
// ===============================================================

// ===============================================================
// PROBLEM SOLVING Patterns
// ===============================================================

// SOME PATTERNS...
// Frequency Counter
// Multiple Pointers
// Sliding Window
// Divide and Conquer
// Dynamic Programming
// Greedy Algorithms
// Backtracking
// Many more!

// ===============================================================
// FREQUENCY COUNTERS
// ===============================================================

// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

// === My attempt ===
// function same(arr1, arr2) {
//  // initialize an empty array.
//     const newArr = [];
//     const compareArr = [];
//  // arr1 length must equal arr2 length.
//     if (arr1.length === arr2.length) {
//         for (let i = 0; i < arr1.length; i++) {
//             if (Math.pow(arr1[1]) === )
//             return arr1[i];
//             // for (let j = 0; j < arr2.length; i++) {
//             //
//             // }
//         }
//     }
//  // Take an index and loop through the second arr looking for a match.
//  // If match with i^2, push to array.
//  // If arr.length = original arr1.length, return true.
// }
// === End My Attempt ===

// === Naive Solution ===
// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] **2)
//         if(correctIndex === -1) {
//             return false;
//         }
//         log(arr2);
//         arr2.splice(correctIndex,1)
//     }
//     return true;
// }
// === End Naive Solution ===

// === Same Refactored Solution ===
// Time Complexity - O(n)
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    };
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    };
    log(frequencyCounter1);
    log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    log(frequencyCounter1);
    log(frequencyCounter2);
    return true;
}

// === End Same Refactored Solution ===

// log(same([1,2,3,2], [9,1,4,4])); // true
log(same([1,2,3,2,5], [9,1,4,4,11])); // false

// log(same([1,2,3], [4,1,9])) // true
// log(same([1,2,3], [1,9])) // false
// log(same([1,2,1], [4,4,1])) // false (must be same frequency)