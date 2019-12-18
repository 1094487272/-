<?php
$db=mysqli_connect("127.0.0.1","root","","jk");
$sql="SELECT * FROM goods";
$result=mysqli_query($db,$sql);
$total =mysqli_num_rows($result);

#计算页码的数据
$count =ceil($total / 20);

$data =array("count" => $count);
echo json_encode($data,true);
?>