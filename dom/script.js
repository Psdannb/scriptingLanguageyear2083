/* here we are going to discuss about the dom related methods and properties in details 
i have provided the example to understand the dom related methods and properties below with short description. 
For the better understanding attend the college lecture - Dan Bahadur Adhikari */

/*for of all lets discuss about how can we select the dom (html elements )in js using DOM methods,
There are several methods to target and select the particular as well as group of dom elements such as
1. getElementById: This is used to select an individual DOm element with the help of its id attribute.
for example : lets select the heading  and look it in the console */
let title = document.getElementById("mainHeading");
// console.log(title);

/* 2. getElementsByClassName(): This is used to select the multiple elements with the same class attributes. */
let subtitle = document.getElementsByClassName("subHeading");
// console.log(subtitle);
let htmlcollectionLength = subtitle.length;
// console.log(htmlcollectionLength);
for (let i = 0; i < htmlcollectionLength; i++) {
  //   console.log(subtitle[i]);
}

/* 3. getElementsByName(): This is used to select the multiple elements with the same name attributes. */
let paragraphs = document.getElementsByName("paragraph");
// console.log(paragraphs);
paragraphs.forEach((elem) => {
  //   console.log(elem);
});

/* 4. getElementsByTagName(): This is used to select the multiple elements having a same Tag. */
let pTag = document.getElementsByTagName("p");
// console.log(pTag);
/* 5. querySelector(): This is a master selector used to select a single element */
let mainHeading = document.querySelector("#mainHeading");
// console.log(mainHeading);

/* 6. querySelectorAll(): This is a master selector used to select multiple elements */
let subheadings = document.querySelectorAll(".subHeading");
// console.log(subheadings);

/* Now that we know how to select elements, let's look at how we can read, change, 
and manipulate them. This is where DOM properties come into play.
Think of selectors as finding the element, and properties as interacting with it.
*/

/* 1. innerHTML: This property allows you to get or set the HTML markup contained within an element.
Unlike plain text, if you pass HTML tags here, the browser will render them.
Example:
 */
// let divelem = document.getElementById("output");
// console.log(divelem.innerHTML);
// divelem.innerHTML = "<h1>I am the text from the js</h1>";
// console.log(divelem.innerText);

/* 2. textContent: This is used to get or set the text content of an element and all its descendants. 
Important Note: It ignores HTML tags and treats everything as pure text. It also retrieves text 
that is hidden via CSS (e.g., display: none), which makes it slightly different from innerText.
Example:*/
let divelem = document.getElementById("output");
// console.log(divelem.textContent);

/* 3. style: This property is used to get or set the inline styling of an element.
Note: In JavaScript, CSS properties with hyphens are written in camelCase (e.g., background-color becomes backgroundColor).
Example: 
*/
let btn = document.getElementById("btn");
// console.log(btn);
// btn.style.color = "red";
let isPermission = false;
if (isPermission) {
  btn.style.color = "green";
} else {
  btn.style.color = "red";
}

/* 4. classList: This is a powerful property that returns a collection of the class attributes of an element.
Instead of overwriting all classes, we can use its built-in methods like .add(), .remove(), and .toggle().
Example: Let's dynamically add an 'active' class to a navigation link. 
*/
let navlink = document.getElementsByClassName("navlink");
// console.log(navlink);
let linklength = navlink.length;
for (let i = 0; i < linklength; i++) {
  // console.log(navlink[i]);
  if (i == 0) {
    // navlink[i].classList.add("active");
    // navlink[i].classList.remove("random");
    // navlink[i].classList.toggle("random");
  }
}

/* Extra=> className : Gets or sets class names.,value:Gets or sets the value of form elements.*/
// let listItem = document.getElementsByTagName("li");
// console.log(listItem[0].className);
// listItem[0].className = "Ram";
// console.log(listItem[0].innerText);

let userInput = document.getElementById("username");
// console.log(userInput.innerText);
// console.log(userInput.value);

/* 5. getAttribute() & setAttribute(): These are used to read  change  and remove any attribute of an HTML element (like src, href, alt, id, etc.).
Example: Let's change the image source dynamically. 
*/
let imgTag = document.getElementById("image");
// console.log(imgTag.getAttribute("alt"));
// imgTag.setAttribute("alt", "jsphoto");
// imgTag.setAttribute("class", "RijanIsABadBoy");

/* 6. parentElement & children: These properties are used for "DOM Traversing"—moving up and down the DOM tree.
parentElement gets the immediate parent node, while children gets a live collection of HTML child elements.
Example: Let's find a list item's parent or look at the children of a list. 
*/
const listItem = document.querySelector("li");
// console.log(listItem.parentElement); // Logs the <ul> or <ol>

const mainList = document.querySelector("#menu-list");
// console.log(mainList.children); // Logs all the <li> elements inside it

/* 7. createElement():Creates a new element.
 */
let par = document.createElement("p");
par.innerText = "I am created by js";
// console.log(par);

let div = document.createElement("div");

div.classList.add("jsdiv");

/* 8. appendChild() and append():Adds an element.
parent.appendChild(child);
 */
div.append(par);
// console.log(div);

let body = document.querySelector("body");
// console.log(body);
body.appendChild(div);
/* 9. prepend():Adds content at the beginning..
element.prepend("Hello");
 */

// body.prepend(div);
/* 10 removeChild():Removes a child element.
parent.removeChild(child);
 */
mainList.removeChild(listItem);
