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

let names = ["Michael", "Melissa", "Andrea"];

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



let values = [true, {}, [], 2, "awesome"];
