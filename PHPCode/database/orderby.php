<?php
require_once"dbconnection.php";
/*
The ORDER BY clause is used to sort the result of a SQL query in ascending or descending order.
syntax: SELECT column1, column2 FROM table_name ORDER BY column_name;

OR 
SELECT * FROM table_name ORDER BY column_name;

By default, ORDER BY sorts data in ascending (ASC) order.
#Use DESC to sort from highest to lowest or Z to A.
Example:
*/
// $orderbysql="SELECT * FROM resulttable  ORDER BY marks DESC";
// $orderbysql="SELECT studentname, marks FROM resulttable WHERE department='BCA' ORDER BY marks DESC";
// $orderbysql="SELECT studentname, marks FROM resulttable  ORDER BY marks DESC";
$orderbysql="SELECT studentname, marks FROM resulttable  ORDER BY studentname DESC";
$response= mysqli_query($connectionString,$orderbysql);
if($response){
    foreach($response as $data){
        // print_r($data);
        echo $data['studentname']." has scored: ".$data['marks'];
        echo "<br>";
    }
}
?>