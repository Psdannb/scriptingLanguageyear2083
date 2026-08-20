<?php
require_once"dbconnection.php";
$deletesql="DELETE FROM students WHERE id='3'";
$response=mysqli_query($connectionString,$deletesql);
if($response){
    echo "Data deleted sucessfully";
}
else{
    echo "failed to delete ";
}
?>