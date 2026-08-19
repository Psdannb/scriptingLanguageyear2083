<?php
require_once"dbconnection.php";
// print_r($_FILES);

$studentimagename=$_FILES['studentimage']['name'];
$tempstoragelocation=$_FILES['studentimage']['tmp_name'];
$folder ="studentImages";
if(!is_dir($folder)){
    mkdir($folder);
}
$imagestorage=$folder."/".$studentimagename;
if(move_uploaded_file($tempstoragelocation,$imagestorage)){
$studentname=$_POST['username'];
$studentaddress=$_POST['address'];
$studentphonenumer=$_POST['phonenumber'];
$studentemail=$_POST['email'];

$insertsql="INSERT INTO students(studentname,studentaddress,studentphonenumber,studentEmail,	imagelocation)VALUES('$studentname','$studentaddress','$studentphonenumer','$studentemail','$imagestorage')";
$response=mysqli_query($connectionString,$insertsql);
if($response){
    echo "Data inserted sucessfully";
}
else{
    echo "Failed to insert data";
}

}
else{
    echo "error while uploading images so try again";
}








?>