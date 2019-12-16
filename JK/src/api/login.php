<?php
#连接数据库
$db=mysqli_connect("127.0.0.1","root","","jk");

$username=$_REQUEST["username"];
$password=$_REQUEST["password"];
#去数据库中查询看指定的用户名是否存在
$sql="SELECT * FROM user WHERE username = '$username'";

$result=mysqli_query($db,$sql);

$data=array("status"=>"","data"=>array("msg"=>""));
if(mysqli_num_rows($result) == 0){
    #如果不存在，那么就返回数据(登录失败，用户名不存在)
    $data["status"]="error";
    $data["data"]["msg"]="登录失败,该用户名不存在！！！";
}else{
    #如果用户名存在，接着检查密码
    $sql2="SELECT * FROM user WHERE username = '$username'";
    $res=mysqli_query($db,$sql2);
    $res=mysqli_fetch_all($res,MYSQLI_ASSOC);
    $res = $res[0]["password"];
    if($password != $res){
        $data["status"]="error";
        $data["data"]["msg"]="登录失败,密码不正确！！！";
    }else{
        $data["status"]="success";
        $data["data"]["msg"]="登陆成功";
    }
}
echo json_encode($data,true);
?>