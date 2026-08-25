<?php
require_once"dbconnection.php";
/*
The GROUP BY clause is used to group rows having the same value in one or more columns. It is commonly used with aggregate functions such as COUNT(), SUM(), AVG(), MAX(), and MIN().
Syntax: SELECT column_name, aggregate_function(column_name) FROM table_name GROUP BY column_name;
Example 1: SELECT faculty, COUNT(*) AS total_students FROM students GROUP BY faculty;
Real life usecase: To find the total amount spent by each customer:
suppose we have customers orders table (id,customer,amount) then
sql=SELECT customer, SUM(amount) AS total_amount FROM orders GROUP BY customer;
*/
// $groupbysql="SELECT department, count(*) AS total_students FROM resulttable GROUP BY department";
$groupbysql="SELECT customer, SUM(amount) AS total_amount FROM orders GROUP BY customer";
$response= mysqli_query($connectionString,$groupbysql);
if($response){
    ?>

<table border="1">
    <thead>
        <tr>
            <th>Custome Name</th>
            <th>Total Amount</th>
        </tr>
    </thead>
    <?php
foreach($response as $datas){
    // print_r($datas);
    ?>
    <tr>
        <td><?php echo $datas['customer'];?></td>
        <td><?php echo $datas['total_amount'];?></td>
    </tr>
    <?php
}
?>
</table>
<?php
}
?>