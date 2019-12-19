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
                getDataWithPageCount($(this).index()+1);
            })
        }
    });
    /* 发送网络请求获取服务器商品数据 */
    getDataWithPageCount(1);
    function getDataWithPageCount(index){
        $.ajax({
            type: "get",
            url: "../api/getGoodData.php",
            data: "page=" + index,
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
                        <button>${ele.shoppingCart}</button>
                    </div>
                </li>
            `
        }).join("");

        $(".box-list").html(html);
    }
    $(".box-list").on("click",".item",function(){
        let oImg=$(this).children(".item-box")[0].querySelector("img").src;
        let price=$(this).children().children(".price-y").text();
        let dis=$(this).children(".item-box").children(".dis").text();
        let querySting=`src=${oImg}&price=${price}&dis=${dis}`;
        window.location.href="http://127.0.0.1:8080/-/JK/src/html/Detail-Pages.html?" + querySting;
    })
})