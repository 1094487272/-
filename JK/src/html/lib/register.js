$(()=>{    

    $("#usernameID").blur(function(){
        let reg=/^[a-zA-Z]{2,6}$/;
        if(!reg.test($.trim($(this).val()))){
            $(this).parents(".username").addClass("form-group-error");
            $(this).siblings(".form-group__message").text("你输入的用户名不正确");
        }else{
            $(this).parents(".username").removeClass("form-group-error");
            $(this).siblings(".form-group__message").text("");
        }
    });
    
    $("#phoneID").blur(function(){
        let reg=/^1[3-9]\d{9}$/;
        if(!reg.test($.trim($(this).val()))){
            $(this).parents(".phone").addClass("form-group-error");
            $(this).siblings(".form-group__message").text("你输入的手机号不正确");
        }else{
            $(this).parents(".phone").removeClass("form-group-error");
            $(this).siblings(".form-group__message").text("");
        }
    });

    $("#passwordA").blur(function(){
        let reg=/^[0-9a-zA-z]{3,6}$/;
        if(!reg.test($.trim($(this).val()))){
            $(this).parents(".passwordA").addClass("form-group-error");
            $(this).siblings(".form-group__message").text("你输入的密码不合规范");
        }else{
            $(this).parents(".passwordA").removeClass("form-group-error");
            $(this).siblings(".form-group__message").text("");
        }
    });
    $("#passwordB").blur(function(){
        let fir=$.trim($("#passwordA").val());
        if($.trim($(this).val()) != fir){
            $(this).parents(".passwordB").addClass("form-group-error");
            $(this).siblings(".form-group__message").text("两次输入的密码不一致");
        }else{
            $(this).parents(".passwordB").removeClass("form-group-error");
            $(this).siblings(".form-group__message").text("");
        }
    });

    let captcha = new Captcha({
        lineNum:10,   //线条数量
        fontSize:30,  //字体大小
        // content:"我喜欢你",
        dotNum: 25, //点的数量
        length: 4 //验证码长度

    });
    captcha.draw(document.querySelector('#captcha'), r => {
        console.log(r, '验证码1');
        code=r.toUpperCase();  //toUpperCase() 不区分大小写
    });
    $("#imageCode").blur(function(){
        if($.trim($(this).val()).toUpperCase() != code){
            $(this).parents(".image-code").addClass("form-group-error");
            $(this).next(".form-group__message").text("请输入正确的图形验证码");
        }else{
            $(this).parents(".image-code").removeClass("form-group-error");
            $(this).next(".form-group__message").text("");
        }
    });

    $("#registerBtn").click(function(){
        $("#usernameID,#phoneID,#passwordA,#passwordB,#imageCode").trigger("blur");
        if($(".form-group-error").length != 0){
            alert("请输入正确的信息!!!");
            return;
        }
        if($("#protocol").is(":checked") ==false){
            alert("请阅读并同意协议！！！")
            return;
        }
        $.ajax({
            type: "post",
            url: ".././api/register.php",
            data: `username=${$("#usernameID").val()}&password=${$("#passwordA").val()}&phone=${$("#phoneID").val()}`,
            dataType: "json",
            success: function (data) {
                // console.log(data);
                if(data.status == "success"){
                    window.location.href="https://www.jianke.com/";
                }else{
                    alert(data.data.msg);
                }
            }
        });
    })
})