<?php

require_once("./db_connect.php");

$NICKNAME = $_GET['username'];

$table_for_validation = "SELECT * FROM `USERS`;";

$result_valid = mysqli_query($connection, $table_for_validation);

foreach ($result_valid as $row) {
    if ($row['USERNAME'] == $NICKNAME) {
            $result = array('USERNAME' => $row['USERNAME'], 'PIB' => $row['PIB'], 'PHONE' => $row['PHONE'], 'AVATAR' => $row['PHOTO_PROFILE']);
            break;
        }
    }

echo json_encode($result);

?>