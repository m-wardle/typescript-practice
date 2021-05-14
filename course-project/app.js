// Note that assigning 'const person: object = ...' does not work as one might expect
// Typescript only looks for an object and does not recognize the contents. Need to either explicitly assign the types to key/value pairs or let type inference do its work.
// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
    name: "Matt",
    age: 28,
    hobbies: ["Fishing", "Grilling"],
};
const arrayTest = ["test", 2];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    //Can get autocompletes for type-specific functions!
}
