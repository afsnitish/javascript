const array = ["value1", "value2", "value3", "value4"];
let [myvar1, myvar2, ...mynewArray] = array;
console.log(myvar1, "", myvar2);
console.log(mynewArray);
