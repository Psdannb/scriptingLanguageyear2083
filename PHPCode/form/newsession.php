<?php
session_start();
// print_r($_SESSION);
$role=$_SESSION['role'];

if($role=='admin'){
    echo "You can add,delete,update user or other info in this page";
}
else{
    echo "You are normal user";
}

?>