<?php
$host="localhost";
$dbusername="root";
$dbpassword="";
$dbname="scriptinglanguage";
$connectionString=mysqli_connect($host,$dbusername,$dbpassword,$dbname);
if(!$connectionString){
  die("cannot connect to the database");
}

?>