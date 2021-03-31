/* Lesson: Typing variables: array types (1/1)
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
 *  1. Which type allows more values: the string type, or a union of
 *      string literal types?
 *
 *  2. What type would string | "test" become? Why? (Test it out!)
 *
 *  3. What happens to literal types in the compiled .JS code?
 */

/* 🧠 Can you explain why some of these pass type-check and some fail? */
let arrayOfNums: number[];
arrayOfNums = [1, 2, 3];
arrayOfNums = 123;
arrayOfNums = ["1", "2", "3"];
arrayOfNums = [1, "1"];

/* 🧠 What types does TypeScript infer here? */
let inferredArrayOfNums = [1, 2, 3];
/* 👩🏽‍🔬 Should this line pass type-check or not? */
// inferredArrayOfNums = ['1', '2', '3'];
let inferredNum = inferredArrayOfNums[0];
inferredNum = "4";

/* 🧠 Can you explain why some of these pass type-check and some fail? */
let arrayOfNumsOrStrings: (number | string)[];
arrayOfNumsOrStrings = [1, 2, 3];
arrayOfNumsOrStrings = 123;
arrayOfNumsOrStrings = ["1", "2", "3"];
arrayOfNumsOrStrings = [1, "1"];

export {}; // ignore this line
