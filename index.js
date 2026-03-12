//Variables & Data Types -
// Declare variables for a user profile with different data types, practice type checking with typeof,
// explore type coercion, and create template literals

// var userName = "Dominion Samuel"; //string
// var employee = true; //boolean
// var userAge = 70; //number

// console.log(typeof userName)
// console.log(typeof employee)
// console.log(typeof userAge)

// Operators & Conditionals -
// Build a grade calculator that accepts scores and returns letter grades,
// handling invalid inputs using both if/else and switch statements

let testScore = 77;
let grade;

if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 60) {
  grade = "C";
} else if (testScore >= 50) {
  grade = "D";
} else if (testScore >= 40) {
  grade = "E";
} else {
  grade = "Invalid";
}

console.log(grade);

//String Manipulation Challenge - Build functions to convert strings
// to title case, count vowels, and reverse strings

let name = "DOMINION";
const Converter = (name) => {
  return name.toUpperCase(name);
};

console.log(Converter(name));

let vowels = ["A", "E", "I", "O", "U"];
const checkVowels = (name) => {
  let vowelCount = 0;
  for (let char of name) {
    if (vowels.includes(char.toUpperCase())) {
      vowelCount++;
    }
  }
  return vowelCount;
};

console.log(checkVowels(name));

let revString;
const reverse = (name) => {
  return name.split("").reverse().join("");
};

console.log(reverse(name));
