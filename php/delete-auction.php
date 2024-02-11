<?php

require_once("./db_connect.php");

$ID_AUCTION = $_GET['id'];

$query = "DELETE FROM `AUCTION` WHERE `AUCTION`.`ID` = $ID_AUCTION";

mysqli_query($connection, $query);


?>