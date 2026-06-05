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
let college = ["BCA", "BBA", "BCom", "BSc"];
// let poppedElem = college.pop();
// console.log(poppedElem);
// console.log(college);

// let shiftedElem = college.shift();
// console.log(shiftedElem);
// console.log(college);
let slicedArray = college.slice(1, 4);
console.log(slicedArray);
console.log(college);
