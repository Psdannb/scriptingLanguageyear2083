<?php
require_once"dbconnection.php";
/*
A subquery in MySQL is a query nested inside another SQL query. It is also called an inner query, while the query containing it is called the outer query. The result produced by the subquery is used by the outer query to perform further operations or filtering.

Basic Syntax:
SELECT column1, column2, ...
FROM table_name
WHERE column_name operator
(
    SELECT column_name
    FROM table_name
    [WHERE condition]
);

#common operators
=
>
<
>=
<=
<>
IN
EXISTS


#Real-life situation
A company wants to find employees whose salary is higher than the company's average salary.
SQL: 
SELECT *
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);

*/
/*
// wrong approach to execute the nested query
// $normalsql="SELECT * FROM resulttable WHERE marks>50";
$averagesql="SELECT AVG(marks) AS average_marks FROM resulttable";
$response=mysqli_query($connectionString,$averagesql);
if($response){
    foreach($response as $datas){
        // print_r($datas);
        $averagemarks=$datas['average_marks'];
        // echo $averagemarks;
        $anothersql="SELECT * FROM resulttable WHERE marks>$averagemarks";
        $response2=mysqli_query($connectionString,$anothersql);
        if($response2){
            foreach($response2 as $datas2){
                print_r($datas2);
            }
        }
    }
}
    */

// example using subquery
$nestedsqlquery="SELECT * FROM resulttable WHERE marks>(SELECT AVG(marks) AS average_marks FROM resulttable)";
$nestedresponse=mysqli_query($connectionString,$nestedsqlquery);
if($nestedresponse){
    foreach($nestedresponse as $data3){
        print_r($data3);
    }
}
?>