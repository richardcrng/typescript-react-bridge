/* Lesson: How TypeScript helps us to avoid runtime errors (1/1)
 *
 * Learning outcomes:
 *  - Define what a runtime error is
 *  - Give an example of how reassigning a string to a non-string
 *     can cause runtime errors in JavaScript
 *  - Explain how TypeScript can help us to find the source of
 *      runtime errors before it happens
 *  - Distinguish between TypeScript compiler errors and JavaScript
 *      runtime errors
 *  - Distinguish between how the TypeScript Playground shows runtime
 *     errors and compilation errors
 *
 * Instructions:
 *  1. 👁️ Read the code
 *  2. 🤔 Predict what will happen when you run the code
 *  3. 👟 Run the code and compare your prediction
 *  4. 👩🏽‍🔬 Experiment with changes (change -> predict -> run)
 *  5. 🧠 Try to complete the challenge(s)
 *
 * Study questions:
 *  1. What JavaScript error do we run into when we run our code
 *      (before we've made any changes)? Where does this show in the
 *      TypeScript Playground? Why might this be called a runtime error?
 *
 *  2. Sometimes we see a TypeScript error when reassigning mySentence.
 *      How does this error manifest, in the editor and the Playground
 *      tabs? Why might this be called a compilation error?
 *
 *  3. What's the difference between reassigning mySentence to:
 *      (a) an array of strings; and
 *      (b) an array of strings which we've called .join(' ') on?
 *
 *  4. What differences can you see between a TypeScript compilation
 *      error and a JavaScript runtime error?
 */

let mySentence = "hello world";

let shoutedSentence = mySentence.toUpperCase();

console.log("first log:", mySentence.toUpperCase());

/* 🧠 Can you reassign this to make the error disappear? */

mySentence = ["this", "should", "be", "a", "sentence"];

/* 👩🏽‍🔬 I wonder if this works if I de-comment it... */
// mySentence = ['roses', 'are', 'red'].join(' ');

console.log("second log:", mySentence.toUpperCase());

export {}; // delete this line from the Playground
