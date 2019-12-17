

class Tab {
    constructor(data) {
        this.data = data;
        this.silderBox=null;

    }
    init() {
        this.renderUI();
        this.addMouseEvent();
    }
    renderUI() {
        this.silderBox=$('<div class="mc"></div>');
        $(".jnk_allsort").append(this.silderBox);
        let html=this.data.map((item,index)=>{
            let right=item.rightContent.map((ele)=>{
                let top=ele.titleLi.map((ele)=>{
                    let dd=ele.listA.map((ele)=>{
                        return`
                        <dd><a href="">${ele}</a></dd>
                        `
                    }).join("");
                    return`
                    <dl class="jk_detailed">
                        <dt><a href="">${ele.fTitle}</a></dt>
                        ${dd}
                    </dl>
                    `
                }).join("");
                // console.log(top)
                let middle=ele.titleLiB.map((ele)=>{
                    let dd=ele.listB.map((ele)=>{
                        return`
                        <dd><a href="">${ele}</a></dd>
                        `
                    }).join("");
                    return`
                    <dl class="recommended">
                        <dt>${ele.sTitle}</dt>
                        ${dd}
                    </dl>
                    `
                }).join("");
                let bottom=ele.titleLiC.map((ele)=>{
                    return`
                    <dl class="r_brand">
                        <dt>${ele.tTitle}</dt>
                    </dl>
                    
                    `
                }).join("");
                return`
                <div class="item_mc fore1">
                    <div class="category">
                    ${top}
                    ${middle}
                    ${bottom}
                    <a href=""><img class="larger_version" src="${ele.img ==""?"":ele.img}"></a>
                    </div>
                </div>
                `
            }).join("");
            
            return`
            <div class="item">
            <dl class="jnk_a_dl  jk_first ">
                <dt><a href="http://127.0.0.1:8080/-/JK/src/html/list.html#">${item.titleA}</a></dt>
                <dd><a href="http://127.0.0.1:8080/-/JK/src/html/list.html#">${item.titleB}</a>
                </dd>
            </dl>
            ${right}
            </div>
            `
        }).join("");
        this.silderBox.html(html);
        // console.log(html)
        
    }
    addMouseEvent(){ 
        $(".mc").on("mouseenter",".item",function(){
            // console.log($(this).index())
            $(this).addClass("hover").siblings().removeClass("hover");
            
        });
        $(".mc").on("mouseleave",".item",function(){
            // console.log($(this).index())
            $(this).removeClass("hover");
            
        })  
    }
}