const combine = (input1, input2, resultConversion) => {
    // const result = input1 + input2;
    // Note that Typescript throws errors in the above despite numbers and strings working with '+' operator. This is because it sees the inputs only as a union type, not specifically as number or string.
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        // could either use 'else if' to check inputs are strings, or use the below, knowing that with your earlier type assignments if the input is not a number it will be a string, and using toString below. Typescript won't assume that the "else" by itself means string.
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === "as-number") {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
};
const combinedAges = combine(30, 26, "as-number");
console.log("Combined Ages: ", combinedAges);
const combinedStringAges = combine("20", "22", "as-number");
console.log("Combined Ages as string: ", combinedStringAges);
const combinedNames = combine("Max", "Anna", "as-string");
console.log("Combined Names: ", combinedNames);
export {};
