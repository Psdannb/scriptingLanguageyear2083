<?php
require_once "dbconnection.php";
$readsql="SELECT * FROM students";
$response=mysqli_query($connectionString,$readsql);
if($response){
    foreach($response as $data){
       $returndata[] = array(
            'name'    => $data['studentname'], 
            'address' => $data['studentaddress'],
            'number'  => $data['studentphonenumber'],
            'email'   => $data['studentEmail']
        ); 
}
echo json_encode(array(  'status' => true,
        'data'   => $returndata));
}
else{
    echo json_encode(array(  'status' => false));  
}

?>