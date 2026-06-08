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
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumber = numbers.find((number) => number % 2 === 0);
// console.log(evenNumber);
// let evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);

let sumofarray = numbers.reduce((sum, currentValue) => {
  return sum + currentValue;
});
// console.log(sumofarray);
// array concatination
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let concatenatedArray = array1.concat(array2, array1, [`a`, `b`, `c`]);
// console.log(concatenatedArray);
// console.log(array1);
// console.log(array2);
