<?php
$data=file_get_contents("meum.json");
echo json_encode($data,true);

?>