/* Lesson: Typing variables: primitives (1/1)
 * 
 * Learning outcomes:
 *  - Add explicit types to a variable declaration
 *  - Explain how explicit typing restricts what can be assigned to a variable
 *  - Articulate how explicit typing is different to inferred typing
 *  - Explain a trade-off between explicit typing and inferred typing
 * 
 * Instructions:
 *  1. 👁️ Read the code
 *  2. 🤔 Predict what will happen when you run the code
 *  3. 👟 Run the code and compare your prediction
 *  4. 👩🏽‍🔬 Experiment with changes (change -> predict -> run)
 *  5. 🧠 Try to complete the challenge(s)
 * 
 * Study questions:
 *  1. TypeScript is a language which adds some extra bits to JavaScript.
 *      What are the extra parts that you can see here?
 * 
 *  2. TypeScript 'compiles' to JavaScript - this means that, in order to
 *      run TypeScript code, we need to process it into JavaScript code first
 *      and then run that resultant JavaScript code. We can see this processed
 *      JavaScript code in the Playground's .JS tab.
 * 
 *     What are the differences between the TypeScript code and the JavaScript
 *      code? How does this relate to your answer to #1?
 *  

 *  3. This lesson has some examples of:
 * 
 *      - inferred typing: e.g. TypeScript gives a type to a variable based on
 *          a value assigned to it (with no manual type declaration)
 *      - explicit typing: e.g. TypeScript gives a type to a variable based on
 *          a manual type declaration for it
 * 
 *      What is the difference between these two syntaxes?
 *      How do they interact? Can they be used together?
 *      Which seems easier to use? Which seems to be more helpful/safe to use?
 */

let untypedNumber = "4"; // accidental 'whoops' - easy to miss!

/* 🧠 Let TypeScript guide you to fix the assignment */

let typedNumber: number = "4"; // vocal 'whoops' - stops a mistake!

console.log(
  `untypedNumber has been set to a ${typeof untypedNumber} value`,

  `typedNumber has been set to a ${typeof typedNumber} value`
);

let untypedString;

untypedString = false; // accidental 'whoops'

/* 🧠 Let TypeScript guide you to fix the assignment */

let typedString: string;

typedString = false; // vocal 'whoops'

console.log(
  `untypedString has been set to a ${typeof untypedString} value`,

  `typedString has been set to a ${typeof typedString} value`
);

/* 🧠 Challenge: using the primitive types
 *
 * JavaScript has three primitive types: string, number and boolean.
 *
 * See if you can use your knowledge of these types to predict which of the below
 *  assignments should be flagged as a TypeScript error, and which should not.
 *
 * (Try them individually: comment them out one at a time and see whether or not
 *  they cause a TypeScript error.)
 */

let myString: string;

let myBoolean: boolean;

let myNumber: number;

// myString = 'hello';
// myString = 'hello world';
// myString = ['hello', 'world'];
// myString = ['hello', 'world'][0];
// myString = 'hello world'.toUpperCase();
// myString = 'hello world'.split('');
// myString = 'hello world'.length;

// myBoolean = true;
// myBoolean = 'true';
// myBoolean = 1;
// myBoolean = false;
// myBoolean = null;
// myBoolean = undefined;
// myBoolean = !false;

// myNumber = 5;
// myNumber = 5.55;
// myNumber = 5 + 0.55;
// myNumber = '5.55';
// myNumber = '5.55'.length;
// myNumber = parseInt('5');
