<?php

require_once("./db_connect.php");


$query_for_loading_my_auctions = "SELECT * FROM `AUCTION`";

$loading_my_auctions = mysqli_query($connection, $query_for_loading_my_auctions);

$id_auctions = array();
$name_auctions = array();
$BET_auctions = array();
$autor_auctions = array();
$auctions_status = array();



foreach($loading_my_auctions as $row)
{
        $id_auctions[] = $row['ID'];
        $name_auctions[] = $row['NameAuction'];
        $BET_auctions[] = $row['BET'];
        $autor_auctions[] = $row['USER_CREATE'];
        $auctions_status[] = $row['AuctionActive'];
}

$data = array(
    'auctions_ids' => $id_auctions,
    'auctions_name' => $name_auctions,
    'auctions_bets' => $BET_auctions,
    'auctions_authors' => $autor_auctions,
    'auctions_status' => $auctions_status
);

echo json_encode($data);

?>