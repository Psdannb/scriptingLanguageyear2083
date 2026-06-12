// alert("today we are learning about arrays in js");
// let students = ["Nihareeka", "Satyarth", "Shivam", "Rohit", 1];
// console.log(students);
// let numberOfElemInArray = students.length;
// console.log(numberOfElemInArray);
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);

// accessing array elements using  for loop
// for (let i = 0; i < numberOfElemInArray; i++) {
//   console.log(students[i]);
// }

let students = ["Nihareeka", "Satyarth", "Shivam", "Rohit", 1];
// array.forEach((element) => {
//   console.log(element);
// }
// students.forEach((element) => {
//   console.log(element);
// });

// let json = [
//   {
//     name: "Nihareeka",
//     age: 20,
//     city: "Bangalore",
//   },
//   {
//     name: "Nihareeka",
//     age: 20,
//     city: "Bangalore",
//   },
//   {
//     name: "Nihareeka",
//     age: 20,
//     city: "Bangalore",
//   },
//   {
//     name: "Nihareeka",
//     age: 20,
//     city: "Bangalore",
//   },
// ];
// console.log(json);
// json.forEach((element) => {
//   // console.log(element);
//   console.log(element.name);
//   console.log(element.age);
//   console.log(element.city);
// });

// how to add elem in an array
let bca = [];
// bca.push("sanam");
// bca.push("Arjun");
// bca.unshift("Rijan");
// console.log(bca);

// how to remove elem from an array
// let college = ["BCA", "BBA", "BCom", "BSc"];
// let poppedElem = college.pop();
// console.log(poppedElem);
// console.log(college);

// let shiftedElem = college.shift();
// console.log(shiftedElem);
// console.log(college);

// let slicedArray = college.slice(1, 4);
// console.log(slicedArray);
// console.log(college);

// let splicedArray = college.splice(1, 2, "BTech", "MCA", "MBA");
// console.log(splicedArray);
// console.log(college);

// how to find the index of an element in an array
let college = ["BCA", "BBA", "BCom", "BSc", "BCom", "BbCom"];
// let indexOfBCom = college.indexOf("BCom");
// console.log(indexOfBCom);

// let indexOfBCom = college.lastIndexOf("BCom");
// let indexOfBCom = college.lastIndexOf("BCCA");
// console.log(indexOfBCom);

// include() method
// let isBCAIncluded = college.includes("BnCA");
// console.log(isBCAIncluded);

// find() method
let studentsData = [
  { name: "Nihareeka", age: 20, city: "Bangalore" },
  { name: "Satyarth", age: 21, city: "Delhi" },
  { name: "Shivam", age: 22, city: "Mumbai" },
  { name: "Rohit", age: 23, city: "Chennai" },
];
// let student = studentsData.find((student) => student.name === "Shivam");
// console.log(student);
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumber = numbers.find((number) => number % 2 === 0);
// console.log(evenNumber);
// let evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);

// let sumofarray = numbers.reduce((sum, currentValue) => {
//   return sum + currentValue;
// });
// console.log(sumofarray);
// array concatination
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let concatenatedArray = array1.concat(array2, array1, [`a`, `b`, `c`]);
// console.log(concatenatedArray);
// console.log(array1);
// console.log(array2);

//map method()
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let doubledNumbers = numbers.map((number) => number * 2);
// console.log(numbers);
// console.log(doubledNumbers);

// array reverse
// numbers.reverse();
// console.log(numbers);

// conversion to string
// console.log(numbers);
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbersAsString = numbers.toString();
// console.log(numbersAsString);
// join method
// let numbersJoined = numbers.join("a");
// console.log(numbersJoined);
//spilt method
let string = "Hello my name is sanam Majhi";
// let stringAsArray = string.split("a");
// let stringAsArray = string.split(" ");
// let stringAsArray = string.split("");
// console.log(stringAsArray);

// suppose you have a string of words and you want to reverse the order of the words in the string, how would you do that using array methods?
let sentence = "Hello my name is sanam Majhi";
let sentencearray = sentence.split("");
// console.log(sentencearray);
let reversedSentenceArray = sentencearray.reverse();
// console.log(reversedSentenceArray);
let reversedSentence = reversedSentenceArray.join("");
// console.log(reversedSentence);

// one line solution
let reversedSentenceOneLine = sentence.split("").reverse().join("");
// console.log(reversedSentenceOneLine);

//sorting an array
let random = [4, 2, 1, 5, 7, 9, 109, 10823790, 2849283, 2748847625642];
// random.sort((a, b) => a - b);
// random.sort((a, b) => b - a);
// console.log(random);

// let randomword = ["zebra", "apple", "mango", "banana", "grapes"];
// randomword.sort();
// randomword.reverse();
// console.log(randomword);

let multidimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
];
// console.log(multidimensionalArray);
// console.log(multidimensionalArray[0][1]);
// console.log(multidimensionalArray[1][2]);

let flattenedArray = multidimensionalArray.flat();
// console.log(flattenedArray);

// task:Student Grade Manager
const scores = [45, 72, 88, 31, 95, 60, 74, 55, 89, 42];
let passedStudents = scores.filter((score) => score >= 60);
// console.log(passedStudents);
let bonuspoint = passedStudents.map((score) => score + 5);
// console.log(bonuspoint);
let isHundred = scores.includes(100);
// console.log(isHundred);
let firstFailedStudent = scores.find((score) => score < 60);
// console.log(firstFailedStudent);
let totalScore = scores.reduce((total, score) => total + score, 0);
// console.log(totalScore);
let sortedScores = scores.sort((a, b) => b - a);
console.log(sortedScores);
