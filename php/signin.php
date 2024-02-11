<?php

require_once("./db_connect.php");

$NICKNAME = $_GET['nickname'];
$PASSWORD = md5($_GET['password']);

$table_for_validation = "SELECT * FROM `USERS`;";

$result_valid = mysqli_query($connection, $table_for_validation);

foreach ($result_valid as $row) {
    if ($row['USERNAME'] == $NICKNAME) {
        if($row['PASSWORD'] == $PASSWORD)
        {
            $result = array('USERNAME' => $row['USERNAME'], 'PIB' => $row['PIB'], 'PHONE' => $row['PHONE'], 'AVATAR' => $row['PHOTO_PROFILE']);
            break;
        }
        else{
            $result = array('result' => "false");
        }
    }
}

echo json_encode($result);

?>