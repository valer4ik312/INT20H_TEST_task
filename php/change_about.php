<?php

require_once("./db_connect.php");

$TYPE = $_GET['type'];
$CONTENT = $_GET['content'];
$ID = $_GET['id'];

if($TYPE == 'about')
{
    $query = "UPDATE `AUCTION` SET `AboutAuction` = '$CONTENT' WHERE `AUCTION`.`ID` = $ID;";
}
else{
    $query = "UPDATE `AUCTION` SET `DATE_END` = '$CONTENT' WHERE `AUCTION`.`ID` = $ID;";
}

mysqli_query($connection, $query);

?>