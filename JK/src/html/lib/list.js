$(()=>{
    /* 发送网络请求获取页码数量 */
    $.ajax({
        type: "get",
        url: "../api/getPageCount.php",
        dataType: "json",
        success: function (response) {
            console.log(response);
            let count =response.count;
            let html="";
            for(let i=0;i<count;i++){
                html += `<li class="page-item"><a class="page-link" href="#" data-hover="1">${i+1}</a></li>`
            }
            $(".pagination").html(html);
            $(".pagination").on("click","li",function(){
                getDataWithPage($(this).index()+1);
            })
        }
    });
    /* 发送网络请求获取服务器商品数据 */
    getDataWithPage(1,0);
    function getDataWithPage(page,type){
        $.ajax({
            type: "get",
            url: "../api/getGoodData.php",
            data: `page=${page}&sortType=${type}`,
            dataType: "json",
            success: function (response) {
                renderUI(response)
            }
        });
    }
    /* 渲染页面 */
    function renderUI(_data) {
        let html = _data.map((ele, index) => {
            return `
            <li class="item" data-id=${ele.good_id}>
                    <div class="item-box">
                        <img src=${ele.img}>
                        <span class="price-y"><a href="">￥${ele.priceA}</a></span><span class="price-z"><a href="">￥${ele.priceB}</a></span>
                        <div class="dis">${ele.title}</div>
                        <div class="storeName ">${ele.shopName}</div>
                        <div class="addCart">加入购物车</div>
                    </div>
                </li>
            `
        }).join("");

        $(".box-list").html(html);
    }
    $(".box-list").on("click",".item-box img",function(){
        let oImg=$(this)[0].src;
        let price=$(this).siblings(".price-y").text();
        let dis=$(this).siblings(".dis").text();
        let querySting=`src=${oImg}&price=${price}&dis=${dis}`;
        window.location.href="http://127.0.0.1:8080/-/JK/src/html/Detail-Pages.html?" + querySting;
    })

    /* 实现点击添加商品到购物车的功能 */
    $(".box-list").on("click", ".addCart", function() {
        /* 检查是否已经登录 ，如果没有登录那就跳转到登录页面*/
        if (!localStorage.username) {
            window.location.href = "http://127.0.0.1:8080/-/JK/src/html/login.html";
        }

        /* 获取当前商品的ID */
        let good_id = $(this).parents("li").data().id;
        console.log(good_id)
        /* 发送网络请求把当前数据添加到购物车表中 */
        /* 数据库表 cart_id  good_id  num isChecked */
        /* 添加数据： */
        /* 删除数据： */
        /* 更新数据： */
        $.ajax({
            url: "http://127.0.0.1:8080/-/JK/src/api/cart.php   ",
            data: { type: "add", good_id: good_id, id: localStorage.id },
            dataType: "json",
            success: function(response) {
                if (response.status == "success") {
                    $(".cart_total").text($(".cart_total").text() * 1 + 1);
                }
            }
        });
    })
    /* 发请求获取购物车中商品的数量 */
    /* 检查登录状态，如果已经登录那么就请求获取购物车的数量 */
    if (localStorage.id) {
        $.ajax({
            url: "../api/getTotalCount.php",
            data: {
                id: localStorage.id
            },
            dataType: "json",
            success: function({ total }) {
                // console.log(total);
                $(".cart_total").text(total);
            }
        });
    }

    /* 打开购物车页面 */
    $(".cart").click(() => window.location.href = "http://127.0.0.1:8080/-/JK/src/html/cart.html");

    // 登录显示
    let showText = localStorage.username ? localStorage.username + ",欢迎你！" : "";
    $("#loginfo>.userInfo").text(showText);
    if (localStorage.username) {
        $(".status").text("注销");
    } else {
        $(".status").text("请登录");
    }

    $(".status").click(function() {
        if ($(this).text() == "注销") {
            localStorage.removeItem("username");
            localStorage.removeItem("id");
            window.location.href = "http://127.0.0.1:8080/-/JK/src/html/list.html";
        } else {
            window.location.href = "http://127.0.0.1:8080/-/JK/src/html/login.html";
        }
    })
})