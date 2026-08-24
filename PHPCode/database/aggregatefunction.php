<?php
require_once"dbconnection.php";
/*
MySQL aggregate functions are used to perform calculations on multiple rows and produce a summarized result. The most commonly used aggregate functions are SUM(), AVG(), COUNT(), MAX(), and MIN().
SUM(): SELECT SUM(marks) AS total_marks FROM resulttable;
AVG(): SELECT AVG(marks) AS average_marks FROM resulttable;
COUNT(): SELECT COUNT(*) AS total_students FROM resulttable;
MAX(): SELECT MAX(marks) AS highest_marks FROM resulttable;
MIN(): SELECT MIN(marks) AS lowest_marks FROM resulttable;

*/
/*
//SUM() example
$totalmarkssql="SELECT SUM(marks) AS total_marks FROM resulttable";
$totalsumresponse=mysqli_query($connectionString,$totalmarkssql);
if($totalsumresponse){
    foreach($totalsumresponse as $sumdatas){
        // print_r($sumdatas);
        echo $sumdatas['total_marks'];
    }
}
    */

/*
//AVG() example

$averagemarkssql="SELECT AVG(marks) AS average_marks FROM resulttable";
$averageresponse=mysqli_query($connectionString,$averagemarkssql);
if($averageresponse){
    foreach($averageresponse as $avgdatas){
        // print_r($avgdatas);
        echo $avgdatas['average_marks'];
    }
}
   */ 


/*
//COUNT() example
 
$countsql="SELECT COUNT(*) AS total_students FROM resulttable";
$countresponse=mysqli_query($connectionString,$countsql);
if($countresponse){
    foreach($countresponse as $countdata){
        // print_r($countdata);
        echo "Total number of students in the result table = ". $countdata['total_students'];
        
    }
}
   */

/*
//MAX() example

$maxsql="SELECT MAX(marks) AS highest_marks FROM resulttable";
$maxresponse=mysqli_query($connectionString,$maxsql);
if($maxresponse){
    foreach($maxresponse as $maxdata){
        // print_r($maxdata);
        echo "highest marks in the result table = ". $maxdata['highest_marks'];
        
    }
}
    */

/*
//MIN() example
  */
$minsql="SELECT MIN(marks) AS lowest_marks FROM resulttable";
$minresponse=mysqli_query($connectionString,$minsql);
if($minresponse){
    foreach($minresponse as $mindata){
        // print_r($mindata);
        echo "lowesr marks in the result table = ". $mindata['lowest_marks'];
        
    }
}
?>