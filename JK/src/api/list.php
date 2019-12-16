<meta charset="UTF-8">
<?php
#INSERT INTO `jk`.`goods` (`id`, `img`, `priceA`, `priceB`, `title`, `shoppingCart`) VALUES ('1', 'https://img.jianke.com/mall/product/201910/b1bec9c4ad5f40f4a0eefef75536f9b7.jpg', '¥48.00', '￥60.95', '杜蕾斯超薄装避孕套 超薄超滑更敏感正确使用下，有助于降低受孕风险及减少某些性传播疾病感染的风险。', '加入购物车');
#连接数据库
$db=mysqli_connect("127.0.0.1","root","","jk");
#加载JSON数据
$jsonData=file_get_contents("list.json");
#把json数据转换成php数组
$data=json_decode($jsonData,true);
// print_r(count($data));
# 通过for循环遍历数组
for($i=0;$i<count($data);$i++){
    // print_r($data[$i]);
    $id=$data[$i]["good_id"];
    $src=$data[$i]["img"];
    $priceA=$data[$i]["priceA"];
    $priceA=$data[$i]["priceB"];
    $title=$data[$i]["title"];
    $shoppingCart=$data[$i]["shoppingCart"];
    
    #插入数据
    $sql="INSERT INTO `jk`.`goods` (`good_id`, `img`, `priceA`, `priceB`, `title`, `shoppingCart`) VALUES 
    ($id, '$src', '$priceA', '$priceA', '$title', '$shoppingCart')";

    #执行数据库
    $result=mysqli_query($db,$sql);
}
?>