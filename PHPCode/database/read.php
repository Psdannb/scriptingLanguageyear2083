<?php
require_once"dbconnection.php";
$readsql="SELECT * FROM students";
$response=mysqli_query($connectionString,$readsql);
// print_r($response);
if($response->num_rows>0){
    ?>
<div class="main">
    <?php
foreach($response as $data){
    // print_r($data);
?>
    <div class="studentcard">
        <div class="imagediv">
            <img src="<?php echo $data['imagelocation']; ?>" alt="profilepic">
        </div>
        <p class="studentname"><?php echo $data['studentname']; ?></p>
        <p class="studentaddress"><?php echo $data['studentaddress']; ?></p>
        <p class="studentemail"><?php echo $data['studentEmail']; ?></p>
        <p class="studentphonenumber"><?php echo $data['studentphonenumber']; ?></p>
    </div>

    <?php
}

?>
</div>
<?php
}
else{
    echo "no data to display";
}
?>
<style>
* {
    margin: 0;
    padding: 0;
}

.main {
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

}

.studentcard {
    width: 20%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    gap: 3px;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.studentcard:hover {
    transform: scale(1.02);
}

.imagediv {

    width: 100px;
    height: 100px;
    border: 1px solid blue;
    border-radius: 100%;
    overflow: hidden;
}

.imagediv img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 100%;
}

.studentcard p {
    font-size: 10px;
}
</style>