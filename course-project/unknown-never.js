// Unknown type
let userInput;
let userName;
// no errors reassigning initially
userInput = 5;
userInput = "Test";
// Error trying to assign to a variable that is type restricted. userInput could be anything, even if at the moment it is a string. Would work with "any" assignment as it is less restrictive.
// userName = userInput
// Will work with typeof check.
if (typeof userInput === "string") {
    userName = userInput;
}
// Never type
const generateError = (message, code) => {
    throw { message: message, errorCode: code };
};
// Note implicit assumption of 'never' - not done in older versions and would have to explicitly assign.
generateError("An error occurred!", 500);
// Note difference from 'void'. Throwing an error cancels the script, so even if you were to assign a variable as below, it's not even undefined - it actually never returns.
const neverTest = generateError("An error occured!", 500);
console.log(neverTest); // No log appears
// Infinite loops would also be a "never".
