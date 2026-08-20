<?php
require_once"dbconnection.php";
$newaddress="Biratnagar-3,Buddha chowlk";
$newphonenumber="9848665676";
$newemailaddress="hencyktomoh@gmail.com";
// $updatesql="UPDATE students SET studentaddress='$newaddress' WHERE id='4'";
$updatesql="UPDATE students SET studentphonenumber='$newphonenumber',studentEmail='$newemailaddress' WHERE id='4'";
$response=mysqli_query($connectionString,$updatesql);
if($response){
    echo "Data Updated sucessfully";
}
else{
    echo "failed to update ";
}
?>