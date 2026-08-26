<?php
/*
A JOIN in SQL is used to combine rows from two or more tables based on a related column between them. Joins are useful when related information is stored in different tables and we need to retrieve it together.
For example, suppose we have two tables:
customers(cid,fullname,city) and orders (oid,cid,product).Here, cid is the common/related column between the two tables.

1. INNER JOIN
An INNER JOIN returns only the rows that have a matching value in both tables.
Syntax:
SELECT columns
FROM table1
INNER JOIN table2
ON table1.column = table2.column;

Example:
SELECT customers.fullname, orders.product
FROM customers
INNER JOIN orders
ON customers.cid = orders.cid;

USECASE:
Use INNER JOIN when you need only records that have a relationship in both tables.
For example:
Customers who have placed orders
Students who have submitted assignments
Employees who belong to departments

2. LEFT JOIN
A LEFT JOIN returns all rows from the left table and the matching rows from the right table. If there is no match, the columns from the right table contain NULL.

Syntax:
SELECT columns
FROM table1
LEFT JOIN table2
ON table1.column = table2.column;

Example:
SELECT customers.fullname, orders.product
FROM customers
LEFT JOIN orders
ON customers.cid = orders.cid;

USE CASE:
Use LEFT JOIN when you want all records from the main/left table, regardless of whether matching records exist in the right table.
FOR EXAMPLE: Show all customers, including customers who have never placed an order.

3. RIGHT JOIN
A RIGHT JOIN returns all rows from the right table and the matching rows from the left table.If there is no match, the columns from the left table contain NULL.

Syntax:
SELECT columns
FROM table1
RIGHT JOIN table2
ON table1.column = table2.column;

Example: 
SELECT customers.fullname, orders.product
FROM customers
RIGHT JOIN orders
ON customers.cid = orders.cid;

#This returns all orders, even if an order has no matching customer record.

USE CASE:
Use RIGHT JOIN when you want all records from the right table, regardless of whether matching records exist in the left table.
For example: Show all orders, including orders whose customer information is unavailable.
*/
?>