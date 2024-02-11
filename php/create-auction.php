<?php

require_once("./db_connect.php");
$name_auction = $_GET['name_lot'];
$about_auction = $_GET['about_lot'];
$auction_active = 0;
$auction_bet = $_GET['start_bet'];
$PREV_BET = 0;
$DATE_CREATE = date("Y-m-d");
$DATE_END = $_GET['date_end'];
$USER_CREATE = $_GET['author_lot'];
$USER_BET = '-';

echo $DATE_CREATE;
echo $DATE_END;

$query_for_create = "INSERT INTO `AUCTION` (`ID`, `NameAuction`, `AboutAuction`, `PhotoAuction_1`, `PhotoAuction_2`, `PhotoAuction_3`, `AuctionActive`, `BET`, `PREV_BET`, `DATE_CREATE`, `DATE_END`, `USER_CREATE`, `USER_BET`) VALUES (NULL, '$name_auction', '$about_auction', '', '', '', '$auction_active', '$auction_bet', '$PREV_BET', '$DATE_CREATE', '$DATE_END', '$USER_CREATE', '$USER_BET');";

echo $query_for_create;

$result = mysqli_query($connection, $query_for_create);


?>