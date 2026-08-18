<?php
require_once"dbconnection.php";
$createSql = "CREATE TABLE IF NOT EXISTS students (
    id INT PRIMARY KEY, 
    studentname VARCHAR(50), 
    studentaddress VARCHAR(100), 
    studentphonenumber VARCHAR(15), 
    studentEmail VARCHAR(50)
)";

$response=mysqli_query($connectionString,$createSql);
if($response){
    echo "Table has been created";
}
else{
    echo "failed to create a table";
}
?>