/* Lesson: Typing variables: literal types (1/1)
 *
 * Learning outcomes:
 *  - Use a union of literal types when declaring a variable
 *
 * Instructions:
 *  1. 👁️ Read the code
 *  2. 🤔 Predict what will happen when you run the code
 *  3. 👟 Run the code and compare your prediction
 *  4. 👩🏽‍🔬 Experiment with changes (change -> predict -> run)
 *  5. 🧠 Try to complete the challenge(s)
 *
 * Study questions:
 *  1. Which type allows more values: the string type, or a union
 *      of string literal types?
 *
 *  2. What type would string | "test" become? Why? (Test it out!)
 *
 *  3. What happens to literal types in the compiled .JS code?
 */

/* 🧠 Change the union type to get the desired type-checking results */
let eggsType: "poached" | "scrambled";
eggsType = "poached";
eggsType = "scrambled";
eggsType = "fried"; // should pass type-check
eggsType = "Eggs? Who needs them?"; // should FAIL type-check

/* 🧠 Change the union type to get the desired type-checking results */
let binarySwitch: 1 | "true";
binarySwitch = 1; // should pass type-check
binarySwitch = 0; // should pass type-check
binarySwitch = true; // should FAIL type-check
binarySwitch = false; // should FAIL type-check
binarySwitch = "true"; // should pass type-check
binarySwitch = "True"; // should FAIL type-check
binarySwitch = "T"; // should pass type-check
binarySwitch = "false"; // should pass type-check
binarySwitch = "False"; // should FAIL type-check
binarySwitch = "F"; // should pass type-check

/* 🧠 Change the union type to get the desired type-checking results */
let count;
count = 1; // should pass type-check
count = 2; // should pass type-check
count = "many"; // should pass type-check
count = 3; // should fail type-check
count = 1.5; // should fail type-check
count = "more"; // should fail type-check

export {}; // delete this line from the Playground
