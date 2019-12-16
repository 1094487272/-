<?php
# 插入一行数据到数据库中的SQL语句
#INSERT INTO `jk`.`user` (`id` ,`username` ,`password` ,`phone`)VALUES (NULL , 'lz', '123', '13642966557');
# 获取客户端提交的参数
$username=$_REQUEST["username"];
$password=$_REQUEST["password"];
$phone=$_REQUEST["phone"];
#连接数据库
$db=mysqli_connect("127.0.0.1","root","","jk");
$sql="SELECT * FROM user WHERE username='$username'";
#执行SQL语句
$result=mysqli_query($db,$sql);

$obj=array("status"=>"","data"=>array("msg"=>""));
if(mysqli_num_rows($result)==1){
    $obj["status"]="error";
    $obj["data"]["msg"]="注册失败,该用户名已被注册！！！";
}else{
    # 插入一行数据到数据库中的SQL语句
    $sql1="INSERT INTO `user` (`id` ,`username` ,`password` ,`phone`) VALUES (NULL , '$username', '$password', '$phone')";
    #执行SQL语句
    mysqli_query($db,$sql1);
    $obj["status"]="success";
    $obj["data"]["msg"]="注册成功";
}

echo json_encode($obj,true);
?>