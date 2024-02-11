<?php

require_once("./db_connect.php");

$result = array('result' => "false");

$PIB = $_GET['pib'];
$NICKNAME = $_GET['nickname'];
$PASSWORD = md5($_GET['password']);
$PHONE = $_GET['phone'];

$create_user = "INSERT INTO `USERS` (`ID`, `PIB`, `USERNAME`, `PASSWORD`, `PHONE`, `PHOTO_PROFILE`) VALUES (NULL, '$PIB', '$NICKNAME', '$PASSWORD', '$PHONE', 'https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png');";

$table_for_validation = "SELECT * FROM `USERS`;";

$result_valid = mysqli_query($connection, $table_for_validation);

$resulat_validation = true;

foreach ($result_valid as $row) {
    if ($row['USERNAME'] == $NICKNAME) {
        $resulat_validation = false;
    }
}

if ($resulat_validation == true) {
    mysqli_query($connection, $create_user);
    $result = array('result' => "true");
}

echo json_encode($result);

?>