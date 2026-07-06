/* 
2025 Qn : 2
Write a javascript program to accept n integer into an array calculate and display the sum and average of the numbers also find the largest number among them. 


let numbersArray = [10, 20, 5, 3, 4, 2, 1, 6, 50];
// what is spread operator? how to pass an array as an argument.
let largestNumber = Math.max(...numbersArray);
console.log("The largest number is: " + largestNumber);

let sum = numbersArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log("The sum of the numbers is: " + sum);
let average = sum / numbersArray.length;
console.log("The average of the numbers is: " + average);
*/

/*   2021 batch : Qn 2
Write a js program to highlight all of the words over eight characters long  in the paragraph text (with red background).
*/

let paragraph = document.getElementById("text");
let paragraphText = paragraph.innerText;
// console.log(paragraph);

let pArray = paragraphText.split(" ");
// console.log(pArray);
let newParagraph = "";

pArray.forEach((word) => {
  if (word.length >= 8) {
    newParagraph += `<span style="background-color: red; color:white">${word}</span> `;
  } else {
    newParagraph += `${word} `;
  }
});
paragraph.innerHTML = newParagraph;
