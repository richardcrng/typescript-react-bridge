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
arrayOfNumsOrStrings = [1, "2", 3];
arrayOfNumsOrStrings = ["1", "2", "3"];
arrayOfNumsOrStrings = [true, false];
arrayOfNumsOrStrings = ["true", "false"];

/* 🧠 Can you explain the inferred type of this element? */
let inferredElement = arrayOfNumsOrStrings[0];

/* 🧠 Can you explain why some of these pass type-check and some fail? */
arrayOfNums.push(1);
arrayOfNums.push("1");
arrayOfNums.push(true);
arrayOfNumsOrStrings.push(1);
arrayOfNumsOrStrings.push("1");
arrayOfNumsOrStrings.push(true);

/* 🧠 Can you explain why some of these pass type-check and some fail? */
arrayOfNums.concat([4, 5, 6]);
arrayOfNums.concat([4, "5", 6]);
arrayOfNumsOrStrings.concat([4, "5", 6]);
arrayOfNumsOrStrings.concat([4, "5", 6]);

/* 🧠 Challenge: type an array of booleans */
let boolArray;
// write your own code to test the type-checking

/* 🧠 Challenge: type an array of booleans and numbers */
let boolAndNumArray;
// write your own code to test the type-checking

/* 🧠 Challenge: type the below array as per specifications */
let simonSays: string[] = []; // fix me
simonSays.push("red"); // pass type-check
simonSays.push("blue"); // pass type-check
simonSays.push("orange"); // fail type-check
simonSays.push("green"); // pass type-check
simonSays.push("GREEN"); // fail type-check
simonSays.push("yellow"); // pass type-check

/* 🧠 Challenge: type a 2D array of numbers */
let twoDimensionalMatrix: number[]; // fix me
twoDimensionalMatrix = [1, 2]; // fail type-check
twoDimensionalMatrix = [[1, 2]]; // pass type-check
twoDimensionalMatrix = [[1, 2], 3]; // fail type-check
twoDimensionalMatrix = [[1, 2], [3]]; // pass type-check

export {}; // delete this line from the Playground
