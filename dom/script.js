/* here we are going to discuss about the dom related methods and properties in details 
i have provided the example to understand the dom related methods and properties below with short description. 
For the better understanding attend the college lecture - Dan Bahadur Adhikari */

/*for of all lets discuss about how can we select the dom (html elements )in js using DOM methods,
There are several methods to target and select the particular as well as group of dom elements such as
1. getElementById: This is used to select an individual DOm element with the help of its id attribute.
for example : lets select the heading  and look it in the console */

/* 2. getElementsByClassName(): This is used to select the multiple elements with the same class attributes. */

/* 3. getElementsByName(): This is used to select the multiple elements with the same name attributes. */

/* 4. getElementsByTagName(): This is used to select the multiple elements having a same Tag. */

/* 5. querySelector(): This is a master selector used to select a single element */

/* 5. querySelectorAll(): This is a master selector used to select multiple elements */

/* Now that we know how to select elements, let's look at how we can read, change, 
and manipulate them. This is where DOM properties come into play.
Think of selectors as finding the element, and properties as interacting with it.
*/

/* 1. innerHTML: This property allows you to get or set the HTML markup contained within an element.
Unlike plain text, if you pass HTML tags here, the browser will render them.
Example: Let's change the content of a div and add a styled span inside it.
const container = document.getElementById('main-container');
container.innerHTML = "Hello World! <span style='color: blue;'>This is dynamic.</span>";
 */

/* 2. textContent: This is used to get or set the text content of an element and all its descendants. 
Important Note: It ignores HTML tags and treats everything as pure text. It also retrieves text 
that is hidden via CSS (e.g., display: none), which makes it slightly different from innerText.
Example: Let's update the text of our main heading.
const heading = document.querySelector(".main-heading");
heading.textContent = "Welcome to our DOM Lecture!";
 */

/* 3. style: This property is used to get or set the inline styling of an element.
Note: In JavaScript, CSS properties with hyphens are written in camelCase (e.g., background-color becomes backgroundColor).
Example: Let's change the background color and padding of a card element. 
const card = document.querySelector(".card");
card.style.backgroundColor = "#f4f4f4";
card.style.padding = "20px";
card.style.borderRadius = "8px";
*/

/* 4. classList: This is a powerful property that returns a collection of the class attributes of an element.
Instead of overwriting all classes, we can use its built-in methods like .add(), .remove(), and .toggle().
Example: Let's dynamically add an 'active' class to a navigation link. 
const navLink = document.querySelector(".nav-link");
navLink.classList.add("active");
// navLink.classList.remove('active'); // To remove it
// navLink.classList.toggle('highlight'); // Adds if missing, removes if present
*/

/* 5. getAttribute() & setAttribute(): These are used to read and change any attribute of an HTML element (like src, href, alt, id, etc.).
Example: Let's change the image source dynamically. 
const profileImage = document.querySelector("#profile-pic");
// Reading an attribute
console.log(profileImage.getAttribute("src"));
// Changing an attribute
profileImage.setAttribute("src", "images/new-profile.jpg");
*/

/* 6. parentElement & children: These properties are used for "DOM Traversing"—moving up and down the DOM tree.
parentElement gets the immediate parent node, while children gets a live collection of HTML child elements.
Example: Let's find a list item's parent or look at the children of a list. 
const listItem = document.querySelector("li");
console.log(listItem.parentElement); // Logs the <ul> or <ol>

const mainList = document.querySelector("#menu-list");
console.log(mainList.children); // Logs all the <li> elements inside it
*/
