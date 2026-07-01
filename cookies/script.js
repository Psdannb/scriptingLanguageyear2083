/* Creating a Cookie
document.cookie = "username=Ram";
*/
/* Creating a Cookie with Expiry Date
document.cookie = "username=Ram; expires=Fri, 31 Dec 2027 12:00:00 GMT";
*/
/*Creating a Cookie with Path
document.cookie = "username=Ram; path=/";
*/
/*Reading Cookies
console.log(document.cookie);
*/
/*Updating a Cookie:To update a cookie, create it again with the same name.
document.cookie = "username=Hari";

*/
/*Deleting a Cookie:A cookie can be deleted by setting an expiry date in the past.
document.cookie = "username=Ram; expires=Thu, 01 Jan 1970 00:00:00 GMT";
*/
/*js code to work on html to demonstrate cookie example 
function setCookie() {
let date = new Date();
date.setDate(date.getDate() + 7);
document.cookie = "username=Ram;" + "expires=" + date.toUTCString() + ";path=/"; 
} 
function getCookie(){
 alert(document.cookie);
  } 
*/
