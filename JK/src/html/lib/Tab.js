

class Tab {
    constructor(data) {
        this.data = data;
        this.silderBox=null;

    }
    init() {
        this.renderUI();
    }
    renderUI() {
        // <div class="mc">
        //     <div class="item">
        //         <dl class="jnk_a_dl  jk_first ">
        //             <dt style="margin-left: 0px;"><a href="//www.jianke.com/list-0111.html" target="_blank" title="男科用药">男科用药</a>
        //             </dt>
        //             <dd><a href="https://www.jianke.com/Category/5411.html" target="_blank" title="阳痿早泄">阳痿早泄</a>
        //             </dd>
        //         </dl>
        //         <div class="item_mc fore1">
        //             <div class="category">
        //                 <dl class="jk_detailed">
        //                     <dt><a href="//www.jianke.com/list-0111.html" target="_blank" title="男科用药">男科用药</a>
        //                     </dt>
        //                     <dd><a href="https://www.jianke.com/Category/3767.html" target="_blank" title="阳痿早泄">阳痿早泄</a>
        //                     </dd>
        //                 </dl>
        //                 <dl class="recommended">
        //                     <dt>推荐产品</dt>
        //                     <dd><a href="//www.jianke.com/product/220793.html" target="_blank" title="盐酸达泊西汀片(必利劲)">盐酸达泊西汀片(必利劲)</a>
        //                     </dd>
        //                 </dl>
        //             </div>
        //             <dl class="r_brand">
        //                 <dt>推荐品牌</dt>
        //             </dl>
        //             <a href="https://www.jianke.com/product/514235.html" target="_blank" title=""><img class="larger_version" src="//static.jianke.com/home/images/20180627/20180627144241_341.jpg" alt="" original="//static.jianke.com/home/images/20180627/20180627144241_341.jpg"></a>
        //         </div>

        //     </div>
        // </div>
        this.silderBox=$('<div class="mc"></div>');
        $(".jnk_allsort").append(this.silderBox);
        let html=this.data.map((item,index)=>{
            /* let right=item.rightContent.map((ele)=>{
                let top=ele.titleLi.map((ele)=>{
                    let dd=`
                    <dd><a href="">${ele.listA}</a></dd>
                    `
                    return`
                    <dl class="jk_detailed">
                        <dt><a href="">${ele.fTitle}</a></dt>
                        ${dd}
                    </dl>
                    `
                }).join("");
                console.log(top)
                let middle=ele.titleLiB.map((ele)=>{
                    return`
                    <dl class="recommended">
                        <dt>推荐产品</dt>
                        <dd><a href="">盐酸达泊西汀片(必利劲)</a>
                        </dd>
                    </dl>
                    `
                }).join("");
                let bottom=ele.titleLiC.map((ele)=>{
                    return`
                    <dl class="r_brand">
                        <dt>推荐品牌</dt>
                    </dl>
                    <a href=""><img class="larger_version" src=""></a>
                    `
                }).join("");
                return`
                <div class="item_mc fore1">
                    <div class="category">
                    ${top}
                    ${middle}
                    ${bottom}
                    </div>
                </div>
                `
            }).join(""); */
            return`
            <div class="item">
            <dl class="jnk_a_dl  jk_first ">
                <dt><a href="">${item.titleA}</a></dt>
                <dd><a href="">${item.titleB}</a>
                </dd>
            </dl>
            
            `
            
        }).join("");
        /* let right=this.data.rightContent.map((ele)=>{
                let top=ele.titleLi.map((ele)=>{
                    let dd=`
                    <dd><a href="">${ele.listA}</a></dd>
                    `
                    return`
                    <dl class="jk_detailed">
                        <dt><a href="">${ele.fTitle}</a></dt>
                        ${dd}
                    </dl>
                    `
                }).join("");
                console.log(top)
                let middle=ele.titleLiB.map((ele)=>{
                    return`
                    <dl class="recommended">
                        <dt>推荐产品</dt>
                        <dd><a href="">盐酸达泊西汀片(必利劲)</a>
                        </dd>
                    </dl>
                    `
                }).join("");
                let bottom=ele.titleLiC.map((ele)=>{
                    return`
                    <dl class="r_brand">
                        <dt>推荐品牌</dt>
                    </dl>
                    <a href=""><img class="larger_version" src=""></a>
                    `
                }).join("");
                return`
                <div class="item_mc fore1">
                    <div class="category">
                    ${top}
                    ${middle}
                    ${bottom}
                    </div>
                </div>
                `
            }).join(""); */
        // console.log(this.data[0].rightContent)
        // ${right}
        // console.log(html)
        
    }
}