/* Lesson: How TypeScript helps us to avoid strange behaviour (1/1)
 *
 * Learning outcomes:
 *  - Give an example of how reassigning a number to a non-number
 *     can cause unexpected or odd behaviour in JavaScript
 *  - Explain how TypeScript can help us to find the source of
 *     unexpected or odd behaviour before it happens
 *  - Explain the role of the Errors tab in the TypeScript Playground
 *
 * Instructions:
 *  1. 👁️ Read the code
 *  2. 🤔 Predict what will happen when you run the code
 *  3. 👟 Run the code and compare your prediction
 *  4. 👩🏽‍🔬 Experiment with changes (change -> predict -> run)
 *  5. 🧠 Try to complete the challenge(s)
 *
 * Study questions:
 *  1. The variable, myFavouriteNumberPlusOne, seems to sometimes have a sensible
 *      value, and sometimes to have a strange value, depending on what we have
 *      assigned to it. When does it seem sensible, and when does it seem strange?
 *
 *  2. Sometimes we see a red squiggly line when reassigning myFavouriteNumber.
 *      What might the use of that red squiggly line be?
 *
 *  3. How does the Errors tab in the TypeScript playground relate to the red squiggles
 *      in the code that is written? (Hint: try hovering over the red squiggles.)
 *
 *  4. What happens if we try reassigning myFavouriteNumber to the following?
 *      "hello world"
 *      7.8
 *      1
 *      true
 *      3 + 3
 *      [3, 3]
 */

let myFavouriteNumber = 4; /* initial assignment to a number */
myFavouriteNumber = 5; /* reassignment, also to a number */

/* 👩🏽‍🔬 Experiment: what happens if we comment out the below? */
/* 🧠 Challenge: once de-commented, fix the code so that the problem disappears. */
// myFavouriteNumber = '11' /* If you see a red squiggle, what happens when you hover over  */

let myFavouriteNumberPlusOne = myFavouriteNumber + 1;

console.log(`What's ${myFavouriteNumber} + 1?`, myFavouriteNumberPlusOne);
