/* Lesson: Introduction to the TypeScript Playground (1/1)
 *
 * Learning outcomes:
 *  - Run code using the TypeScript Playground
 *  - Clear the TypeScript Playground logs
 *  - Make output visible through the Playground logs
 *
 * Instructions:
 *  1. 👁️ Read the code
 *  2. 🤔 Predict what will happen when you run the code
 *  3. 👟 Run the code and compare your prediction
 *  4. 👩🏽‍🔬 Experiment with changes (change -> predict -> run)
 *  5. 🧠 Try to complete the challenge(s)
 *
 * Study questions:
 *  1. How do you run code using the TypeScript Playground?
 *  2. What gets shown in the TypeScript Playground logs?
 *  3. How do you clear the TypeScript Playground logs?
 */

/* 💻 Put your name below */
let learnerName = "Richard";

function greetLearner() {
  /* 👩🏽‍🔬 What happens if we de-comment the below line? */
  // console.log(`Learner name: ${learnerName}`)

  return `Welcome to the TypeScript Playground, ${learnerName}!`;
}

/* 👩🏽‍🔬 Does the below line produce any logs? */
// greet();

/* 👩🏽‍🔬 Does the below line produce any logs? */
// console.log(greet());

/* 👩🏽‍🔬 Does the below line produce any logs? */
// const greeting = greetLearner();
// console.log(greeting);

/**
 * 🧠 Challenge: console.log vs return
 *
 * Change greetLearner so that the following logs are witnessed:
 *   let capturedValue = greetLearner(); // logs: "Welcome to the TypeScript Playground!"
 *   console.log(capturedValue); // logs: undefined
 */
