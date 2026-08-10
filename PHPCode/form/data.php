<?php
// $username = $_GET['username'];
// echo $username;


// $username = $_POST['username'];
// echo $username;


if($_SERVER['REQUEST_METHOD'] == 'POST'){
    print_r($_POST);
    die();
    $username = $_POST['username'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $gender = $_POST['gender'];
    $country = $_POST['country'];
    $admin = $_POST['admin'] ?? 'No'; // Null coalescing operator to handle the case when 'admin' is not set
    $ternary=$_POST['ternary']?$_POST['ternary']:'No'; // Ternary operator to handle the case when 'ternary' is not set
}
else{
    echo "Please submit the form using POST method.";
}

?>