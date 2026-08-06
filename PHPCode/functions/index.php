<?php
/*
syntax:
// declare
function functionname(list of arguments){
body of a function
}
//call
functionname(parameters);
*/
function greet(){
    echo "Hello";
}
// greet();

function greet1($name){
    echo "Hello, " . $name;
}
// greet1("Sonu");
// greet1("Ravi");


function sum(){
    $a=3;
    $b=5;
    return $a+$b;
}
$result = sum();
// echo $result;


function add ($a,$b){
    return $a+$b;
}
$output=add(5,10);
// echo $output;

// echo $a;


// calling by value example
function increment($p,$q){
    $p++;
    $q++;
    echo "Inside function: p= $p, q= $q <br>";
}
$x=5;
$y=10;
// increment($x,$y);
// echo "Outside function: x= $x, y= $y <br>";


//calling by reference example
 function increment2(&$p,&$q){
    $p++;
    $q++;
    // echo "Inside function: p= $p, q= $q <br>";
}
$x=5;
$y=10;
// echo "Outside function before function call: x= $x, y= $y <br>";
// increment2($x,$y);
// echo "Outside function after function call: x= $x, y= $y <br>";


//passing arbitary number of arguments in a function

function addition (...$numbers){
    // print_r($numbers);
$sum=0;
foreach($numbers as $number){
    $sum=$sum+$number;
}
return $sum;
}

$addoutput=addition(2,3);
echo $addoutput;
echo "<br>";
$addoutput2=addition(1,2,5);
echo $addoutput2;
echo "<br>";

//how to pass array as a function parameters
$abc=[1,2,3,4,5];
echo addition(...$abc);

?>