<?php

require_once("./db_connect.php");

$ID_AUCTION = $_GET['id'];

$query = "UPDATE `AUCTION` SET `AuctionActive` = '1' WHERE `AUCTION`.`ID` = $ID_AUCTION;";

mysqli_query($connection, $query);


?>