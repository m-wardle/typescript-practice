const add = (n1, n2) => {
    return n1 + n2;
};
const printResult = (num) => {
    console.log("Result: " + num);
    // note void return type due to no return statement.
};
const addAndHandle = (n1, n2, cb) => {
    const result = n1 + n2;
    cb(result);
    // The following throws an error below as we're trying to do something with the callback result, which should be void. Won't throw an error if we don't do anything.
    // const test = cb(result);
    // test.toString();
};
printResult(add(5, 12));
// Note that "undefined" is a valid type as well. Void should be used when a function has no return, since if you assign "undefined" as a return type typescript will actually looks for a return of undefined, not no return.
// If you initialize a variable with type 'any', and assign to a function, the implicit type will not change. Can change variable later and potentially break things without typescript throwing an error.
// let combineValues;
// combineValues = add;
// combineValues = 3;
// console.log(combineValues(8, 8));
// "Uncaught TypeError: combineValues is not a function"
// You can use the 'Function' type, but then maybe you reassign to a new function, causing a similar error.
// let combineValues: Function;
// combineValues = add;
// combineValues = printResult;
// console.log(combineValues(8, 8));
// Returns undefined.
// Solution: Function Types! Declare with arrow notation.
let combineValues;
combineValues = add;
// combineValues = printResult; // now throws an error!
// Some callback stuff:
let test2 = addAndHandle(10, 20, (result) => {
    console.log("callback: ", result);
    return result;
    // Doesn't throw an error despite declaring above that the callback should return "void", as we're not really doing anything witht he return value. Still, unnecessary return.
});
export {};
