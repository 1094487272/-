$(() => {
    $(".tab-login-item").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".loginView").eq($(this).index()).addClass("loginViewCurrent").siblings().removeClass("loginViewCurrent");
    })

    $("#loginBtn").click(function () {
        let username = $("#username-ID").val();
        let password = $("#password-ID").val();
        $.ajax({
            type: "post",
            url: ".././api/login.php",
            data: { username, password },
            dataType: "json",
            success: function (response) {
                console.log(response);
                if(response.status == "success"){
                    window.location.href="https://www.jianke.com/";
                }else{
                    alert(response.data.msg);
                }
            }
        });
    })

})