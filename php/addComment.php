<?php

require_once("./db_connect.php");

$ID = $_GET['id'];
$AUTHOR = $_GET['author'];
$MESSAGE = $_GET['msg'];
$DATE = date("Y-m-d");

$query = "INSERT INTO `COMMENT` (`ID`, `AUCTION_ID`, `AUTHOR_COMMENT`, `MESSAGE`, `DATE`) VALUES (NULL, '$ID', '$AUTHOR', '$MESSAGE', '$DATE');";

mysqli_query($connection, $query);

?>