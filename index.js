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

// ===== Analyzing Performance of Array and Objects =====
// Insertion = O(1)
// Removal = O(1)
// Searching = O(n)
// Access = O(1)
let instructor = {
  firstName: "Arthur",
  isInstructor: true,
  favoriteNumbers: [1,2,3,4]
}
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
