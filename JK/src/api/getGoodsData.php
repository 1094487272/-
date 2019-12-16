<?php
header("Content-Type:text/html; charset=utf-8");
$conn = new mysqli("127.0.0.1", 'root', '', 'jk');
if(!$conn){
		echo die('数据库连接失败'.mysql_error());
    }
$res = $conn->query("SELECT * FROM goods");
    $data = $res->fetch_all(MYSQLI_ASSOC);

    var_dump($data);
    print_r(count($data));
?>