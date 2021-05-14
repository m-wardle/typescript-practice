// Note that assigning 'const person: object = ...' does not work as one might expect

// Typescript only looks for an object and does not recognize the contents. Need to either explicitly assign the types to key/value pairs or let type inference do its work.

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Matt",
//   age: 28,
//   hobbies: ["Fishing", "Grilling"],
//   role: [0, "ADMIN"],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Matt",
  age: 28,
  hobbies: ["Fishing", "Grilling"],
  role: Role.ADMIN,
};

// person.role.push('this works for tuples');
// person.role[1] = 2;
// person.role = [0, "these don't", 3]

// const arrayTest: (string | number)[] = ["test", 2];

console.log(person.role);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   Can get autocompletes for type-specific functions!
// }
