<?php
require_once "dbconnection.php";
$readsql="SELECT * FROM students";
$response=mysqli_query($connectionString,$readsql);
$returndata=array();
if($response){
    foreach($response as $data){
       $returndata[] = array(
            'name'    => $data['studentname'], // Fixed: changed from email to name
            'address' => $data['studentaddress'],
            'number'  => $data['studentphonenumber'],
            'email'   => $data['studentEmail']
        ); 
}
}
echo json_encode(array(  'status' => true,
        'data'   => $returndata));
?>