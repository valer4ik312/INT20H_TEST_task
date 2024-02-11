<?php

require_once("./db_connect.php");

$ID = $_GET["id"];

$query_for_loading_my_auctions = "SELECT * FROM `COMMENT` WHERE `AUCTION_ID` = $ID";

$loading_my_auctions = mysqli_query($connection, $query_for_loading_my_auctions);

$ID_COMMENT = array();
$AUCTION_ID = array();
$AUTHOR_COMMENT = array();
$MESSAGE = array();
$DATE = array();



foreach($loading_my_auctions as $row)
{
        $ID_COMMENT[] = $row['ID'];
        $AUTHOR_COMMENT[] = $row['AUTHOR_COMMENT'];
        $MESSAGE[] = $row['MESSAGE'];
        $DATE[] = $row['DATE'];
}

$data = array(
    'ID_COMMENT' => $ID_COMMENT,
    'AUTHOR_COMMENT' => $AUTHOR_COMMENT,
    'MESSAGE' => $MESSAGE,
    'DATE' => $DATE
);

echo json_encode($data);

?>