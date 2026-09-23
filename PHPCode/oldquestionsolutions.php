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
Solution:


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

 */
/*
Question:
Implement an interface in PHP with specific properties (radius for a circle class, side for a square class, and base and height for a triangle class) to ensure that multiple classes define their own implementation of a method (calculate Area) utilizing these properties in their calculations. [10 marks]
Solution:
*/
interface masterinfo{
    public function calculateArea();
}
class circle implements masterinfo{
public $radius;
public function __construct($r){
    $this->radius=$r;
}
public function calculateArea(){
    $area= 3.14*$this->radius*$this->radius;
    echo "The area of a circle = $area";
    echo "<br>";
}

}
class square implements masterinfo{
    public $side;
    public function __construct($s){
        $this->side=$s;
    }
  public function calculateArea(){
      $area= $this->side*$this->side;
    echo "The area of a square= $area";
       echo "<br>";
  }
}
class triangle implements masterinfo{
    public $base;
    public $height;
    public function __construct($b,$h){
        $this->base=$b;
        $this->height=$h;
    }
    public function calculateArea(){
        $area= (1/2)*$this->base*$this->height;
        echo "The area of a triangle= $area";
           echo "<br>";
    }
}
$circle= new circle(4);
$circle->calculateArea();
$square= new square(5);
$square->calculateArea();
$triangle= new triangle(2,4);
$triangle->calculateArea();