<?php

require_once("./db_connect.php");

$ID = $_GET['id'];
$USERNAME = $_GET['username'];
$NEW_BET = $_GET['new_bet'];

$query = "UPDATE `AUCTION` SET `BET` = '$NEW_BET', `USER_BET` = '$USERNAME' WHERE `AUCTION`.`ID` = $ID;";

mysqli_query($connection, $query);

?>