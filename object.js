// refrence type
// keys by default are string only
const person = {
  name: "Nitish",
  age: 25,
};
console.log(person);
person.gender = "male";
console.log(person);

// square bracket notations

person["job"] = "software Engineer";
console.log(person);

// iterating over objects
for (let key in person) {
  console.log(key, " : ", person[key]);
}

// Object.keys
for (let key of Object.keys(person)) {
  console.log(key, person[key]);
}

const key1 = "ObjKey1";
const key2 = "ObjKey2";

const value1 = "value1";
const value2 = "value2";

// obj = {};
// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj);

const obj = [
  { user: "Nitish", age: 18, gender: "male" },
  { user: "sumit", age: 27, gender: "female" },
  { user: "vivek", age: 12, gender: "male" },
];
console.log(obj);
for (let eachObj of obj) {
  console.log(eachObj.user);
}

// object destructuring

[{ name }, { gender }] = obj;
console.log(name, gender);
