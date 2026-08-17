<?php
//create cookie
 setcookie("Auction_Item", "Luxury Car", time() + 2 * 24 * 60 * 60);
 setcookie("username", "PremRaj", time() + 1 * 24 * 60 * 60);
//  $result=isset($_COOKIE['Auctin']);
//  var_dump($result);


//updatecookie
 setcookie("username", "Rijan", time() + 1 * 24 * 60 * 60);

//delete cookie
 setcookie("Auction_Item", "Luxury Car", time() - 2 * 24 * 60 * 60);

//check cookie
if(isset($_COOKIE['username'])){
    //read cookie
    echo $_COOKIE['username'];
}
else{
    echo "cookie name not found";
}
?>