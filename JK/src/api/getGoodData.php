<?php
$db=mysqli_connect("127.0.0.1","root","","jk");
#查询获取数据库中的数据

$start = ($_REQUEST["page"] -1) *20;
$sql="SELECT * FROM goods LIMIT $start,20";
$result=mysqli_query($db,$sql);
$data=mysqli_fetch_all($result,MYSQLI_ASSOC);
// print_r($data)
#把数据转换成JSON返回
echo json_encode($data,true);
?>