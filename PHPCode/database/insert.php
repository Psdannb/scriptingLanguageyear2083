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
/* 
//insert data into the database using mysqli_query

$insertsql="INSERT INTO students(studentname,studentaddress,studentphonenumber,studentEmail,	imagelocation)VALUES('$studentname','$studentaddress','$studentphonenumer','$studentemail','$imagestorage')";
$response=mysqli_query($connectionString,$insertsql);
if($response){
    echo "Data inserted sucessfully";
}
else{
    echo "Failed to insert data";
}
*/
//insert data in the database using a secure way(Prepared Statements)
$insertsql="INSERT INTO students(studentname,studentaddress,studentphonenumber,studentEmail,	imagelocation)VALUES(?,?,?,?,?)";
$stmt=$connectionString->prepare($insertsql);
$stmt->bind_param('sssss',$studentname,$studentaddress,$studentphonenumer,$studentemail,$imagestorage);
if($stmt->Execute()){
    echo "Data added sucessfully";
}
else{
     echo "Failed to insert data";
}
$stmt->close();
$connectionString->close();
}
else{
    echo "error while uploading images so try again";
}








?>