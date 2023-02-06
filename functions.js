// function declaration
function isEven(x) {
  if (x % 2 == 0) {
    console.log("even no. found");
  } else {
    console.log("odd number encountered");
  }
}

isEven(4);

// function expression
const checkEven = function (x) {
  if (x % 2 == 0) {
    console.log("Even no encounterd");
  } else {
    console.log("Odd number encountered");
  }
};

checkEven(5);

// arrow function

const confirmEven = (x) => {
  if (x % 2 == 0) {
    console.log("Even no is encounterd");
  } else {
    console.log("odd number is encountered");
  }
};

confirmEven(3);

// shortening arrow function

const parity = (number) => number % 2 == 0;

if (parity(4)) {
  console.log("number is even");
} else {
  console.log("number is odd");
}
