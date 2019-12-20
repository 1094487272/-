$(() => {
    // $.ajax({
    //     type: "get",
    //     url: "./api/meum.php",
    //     data: "data",
    //     dataType: "json",
    //     success: function (data) {
    //         console.log(response);
    //         let meum = new Meum(data);
    //         meum.init();
    //     }
    // });
    $.getJSON("./api/meum.json", function (data, textStatus, jqXHR) {
        let meum = new Meum(data);
        meum.init();
    });
    $.getJSON("./api/Tab.json",function (data, textStatus, jqXHR) {
        let tab = new Tab(data);
        tab.init();
    });
    $.getJSON("./api/slideshow.json",function (data, textStatus, jqXHR) {
        let manager=new Manager(data);
        manager.init();
    });
    new Promise(function(resolve,reject){
        $.getJSON("./api/content.json",function (data, textStatus, jqXHR) {
            let content=new Content(data);
            content.init();
            resolve(); 
         });
    }).then(function(){
        $.getJSON("./api/Floor.json",function (data, textStatus, jqXHR) {
            let floor=new Floor(data);
            floor.init();
        });
    })
    

    // 显示登录
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
            window.location.href = "http://127.0.0.1:8080/-/JK/src/shouye.html";
        } else {
            window.location.href = "http://127.0.0.1:8080/-/JK/src/html/login.html";
        }
    })
    
})