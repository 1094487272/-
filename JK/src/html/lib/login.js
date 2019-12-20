$(() => {
    $(".tab-login-item").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".loginView").eq($(this).index()).addClass("loginViewCurrent").siblings().removeClass("loginViewCurrent");
    })

    $("#loginBtn").click(function () {
        let username = $("#username-ID").val();
        let password = $("#password-ID").val();
        $("#loginBtn").text("登陆中...")
        $.ajax({
            type: "post",
            url: "../api/login.php",
            data: { username, password },
            dataType: "json",
            success: function (response) {
                console.log(response);
                if(response.status == "success"){
                    localStorage.username=username;
                    localStorage.id=response.data.userId;
                    console.log(response)
                    window.location.href="http://127.0.0.1:8080/-/JK/src/shouye.html";
                }else{
                    alert(response.data.msg);
                }
            }
        });
    })

})