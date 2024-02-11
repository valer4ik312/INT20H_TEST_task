<?php

require_once("./db_connect.php");

$ID = $_GET['id'];

$query = "SELECT * FROM `AUCTION` WHERE `ID` = '$ID'";

$result = mysqli_query($connection, $query);

$result_check = array('ID' => -1);

foreach($result as $row)
{
    if($row['ID'] == $ID)
    {
    $result_check = array('ID' => $row['ID'], 'NameAuction' => $row['NameAuction'], 'AboutAuction' => $row['AboutAuction'], 'BET' => $row['BET'], 'PREV_BET' => $row['PREV_BET'], 'DATA_CREATE' => $row['DATE_CREATE'], 'DATE_END'=> $row['DATE_END'], 'USER_CREATE' => $row['USER_CREATE'], 'USER_BET' => $row['USER_BET'], 'AuctionActive'=> $row['AuctionActive']);
    break;
    }
}

echo json_encode($result_check);

?>