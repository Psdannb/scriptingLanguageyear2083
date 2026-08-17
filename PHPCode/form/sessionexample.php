<?php
session_start(); //start the session
//create session
$_SESSION['userloginname']="Suprab";
$_SESSION['password']="nepal@123";
$_SESSION['role']="admin";

//modify/update
$_SESSION['userloginname']="ALson";

//access the session data
// print_r($_SESSION);
if(isset($_SESSION['userloginname'])){
// echo $_SESSION['userloginname'];
}
else{
    echo "session data is not available";
}
// delete individual session data
unset($_SESSION['password']);
// print_r($_SESSION);



?>