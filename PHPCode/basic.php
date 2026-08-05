<?php
/*
What is PHP ?
PHP (Hypertext Preprocessor) is a server-side scripting language used to develop dynamic and interactive web applications. PHP code is embedded within HTML and is executed on the web server before the page is sent to the client's browser.
A PHP script begins with the <?php opening tag and ends with the ?> closing tag.

Basic Rules of PHP Syntax:
1. Every PHP statement ends with a semicolon (;).
2. Variable names are case-sensitive.

Comments in PHP:
Comments are non-executable statements used to explain the code, improve readability, and temporarily disable code
during testing or debugging. The PHP interpreter ignores comments during execution.

Types of Comments
a) Single-Line Comment (// or #)
b) Multi-Line Comment


Variables in PHP:
A variable is a named memory location used to store data that can be accessed and modified during program execution.
In PHP, every variable begins with the $ (dollar) symbol.
syntax: $variable_name = value;


Rules for Naming Variables:
1) A variable must begin with the $ symbol.
2) The first character after $ must be a letter or an underscore (_).
3) Variable names cannot start with a number.
4) Variable names may contain letters, numbers, and underscores.
5) Variable names are case-sensitive.

PHP is loosely typed i.e. PHP automatically determines the data type of a variable based on the assigned value.

Example:
$name = "Ram"; // String
$age = 20; // Integer
$height = 5.8; // double
$isStudent = true; // Boolean
$numbers=[1,2,3,4,5];//array
$random=NULL; //NULL
datatypes in php are in the comments and we can check the datatype of any variable using gettype() function.


operators in php:
1) Arithmetic operator(+,-,*,/,%,++,--)
2) String concatination (.)
3) Assignment operator(=,+=,-=,*=,/=,%=)
4) conditional Operators(>,>=,<,<=,==,===) //$a="6" ; $b=6; echo $a==$b;*/ /* control structures(if else,switch, all /*
    #*** if else $isTrue=true; if ($isTrue) { echo "The condition is true." ; } else { echo "The condition is false." ;
    } */ /* #<!-- if else..if ................................................. -->



    $age = 30;
    if( $age >1 && $age <=13){ echo "You are Child" ; } else if($age>13 && $age <=30){ echo "You are Adult" ; } else if
            ($age>30 && $age <=60){ echo "You are Old" ; } else if ($age>60 && $age <=100){
                    echo "You are Senior Citizen" ; } else{ echo "You are not eligible" ; } */ /* #<!-- Switch case
                    ......................................................... -->


                    $day = "Mon";
                    switch ($day) {
                    case "Mon":
                    echo "Today is Monday";
                    break;
                    case "Tue":
                    echo "Today is Tuesday";
                    break;
                    case "Wed":
                    echo "Today is Wednesday";
                    break;
                    case "Thu":
                    echo "Today is Thursday";
                    break;
                    case "Fri":
                    echo "Today is Friday";
                    break;
                    case "Sat":
                    echo "Today is Saturday";
                    break;
                    case "Sun":
                    echo "Today is Sunday";
                    break;
                    default:
                    echo "Invalid day";
                    }
                    /*

                    /*


                    #
                    <!-- Loop Statements ......................................................... -->

                    <!-- for Loop ......................................................... -->



                    $string = "Love";
                    for ($i = 0; $i < 5; $i++) { echo $string . "<br>" ; } */ /* #<!-- while Loop
                        ......................................................... -->



                        $counter = 0;
                        while ($counter < 5) { echo "The number is: $counter <br>" ; $counter++; } */ /* # do...while
                            Loop $name="Sanam" ; do { echo "The name is: $name <br>" ; } while ($counter < 5); */ ?>