<?php
/* QN.  write a program to create chess board in php using loop.
Solution:
for($i=8;$i>=1;$i--){
 if($i%2==0){
       for($j=1;$j<=8;$j++){
       if($j%2==0){
        echo "<Span id='black'>B</span>";
       }
       else{
        echo "<Span id='white'>W</span>";
       }
    }
     echo "<br>";
 }
 else{
  for($j=1;$j<=8;$j++){
       if($j%2==0){
        echo "<Span id='white'>W</span>";
       }
       else{
        echo "<Span id='black'>B</span>";
       }
    }
     echo "<br>";
 }
   
}

<style>
#black {
    height: 10px;
    width: 10px;
    color: black;
    background-color: black;
    border: 1px solid black;
}

#white {
    height: 10px;
    width: 10px;
    color: white;
    background-color: white;
    border: 1px solid black;
}
</style>
*/


/*

QN: write a PHP function that accepts username and password as arguments and check with student table, if credential match, redirect to dashboard page otherwise display 'invalid username/password'.
*/

function validateuser($submittedusername,$Submittedpassword){
$connectionstring=mysqli_connect("localhost","root","","scriptinglanguage");
if(!$connectionstring){
  die("Unable to connect with database");  
}
$sql="SELECT * FROM student WHERE username = '$submittedusername' ";
$response=mysqli_query($connectionstring,$sql);
if($response->num_rows>0){

$row=$response->fetch_assoc();
// print_r($row);
$databasepassword=$row['password'];
if($Submittedpassword==$databasepassword){
    // echo "Valid username and password";
    header("Location:dashboard.php");
}
else{
    echo "Invalid password";
}

}
else{
    echo "Invalid username";
}
}
 validateuser("ram","jksfgkasd");