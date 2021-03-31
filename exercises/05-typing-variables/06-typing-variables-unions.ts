/* Lesson: Typing variables: union types (1/1)
 *
 * Learning outcomes:
 *  - Use a union type when declaring a variable
 *
 * Instructions:
 *  1. 👁️ Read the code
 *  2. 🤔 Predict what will happen when you run the code
 *  3. 👟 Run the code and compare your prediction
 *  4. 👩🏽‍🔬 Experiment with changes (change -> predict -> run)
 *  5. 🧠 Try to complete the challenge(s)
 *
 * Study questions:
 *  1. How might you interpret the pipe (|) operator as an
 *      ordinary English word that makes sense of the typing
 *      boolean | string and its behaviour?
 *
 *  2. What do you see when you hover over a variable that is typed
 *      to be a union type?
 *
 *  3. What happens to the union type in the compiled .JS produced
 *      (viewable in the Playground tab)?
 */

let boolOrString: boolean | string;

/* 🧠 Which of these gives a TypeScript error, and why? */
boolOrString = false;
boolOrString = "false";
boolOrString = 0;

/* 🧠 Make the type a union type to remove the error */
let testOne: boolean = 44;

/* 🧠 Add a union type to remove the TypeScript error */
let testTwo = 3;
testTwo = "3";

/* 🧠 Make the type a union of three to remove the TypeScript error */
let testThree: string | boolean;
testThree = "hi";
testThree = true;
testThree = -10;

export {}; // ignore this line
