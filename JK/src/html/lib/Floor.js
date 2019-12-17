class Floor{
    constructor(data){
        this.data=data;
        this.silderBox=null;
        // console.log(this.data)
    }
    init(){
        this.renderUI();
    }
    renderUI(){
        let html=this.data.map((ele)=>{
            let floorLeft=ele.floorLeft.map((ele)=>{
                let tplLis=ele.title.map((ele)=>`<li><a href="" target="_blank">${ele}</a></li>`).join("");
                let tplImgs=ele.smallImg.map((ele)=>`<li><a href="" target="_blank" style="position:relative;"><img src=${ele} height="62" width="89" alt=""></a></li>`).join("");
                return`
                <div class="floor_left" style="position:relative;">
                 <a href="" target="_blank"><img src=${ele.img} height="450" width="200"></a>
                 <div class="floor_left_box">
                     <ul class="left_box_top clearfix">
                     ${tplLis}    
                     </ul>
                     <ul class="left_box_bot clearfix">
                     ${tplImgs}    
                     </ul>
                 </div>
             </div>
                `
            }).join("");
            // console.log(floorLeft)
            let floorRight=ele.floorRight.map((ele)=>{
                return`
                <div class="floor_right_l">
                    <a href="" target="_blank">
                        <img src=${ele.bigImg} height="430" width="340">
                        <div class="floor_r_t">
                            <h3>${ele.h3}</h3>
                            <p>${ele.p}</p>
                        </div>
                    </a>
                </div>
                `
            }).join("");
            // console.log(floorRight)
            let rightBox=ele.rightBox.map((ele)=>{
                return`
                    <li>
                        <a href="" target="_blank">
                            <div>
                                <p>${ele.title}</p>
                            </div>
                            <img src=${ele.img} height="160" width="160" class="box_img">
                        </a>
                    </li>
                `
            }).join("");
            let tplA=`<ul class="right_box_l clearfix">${rightBox}</ul>`
            // console.log(rightBox)
            let rightLast=ele.rightLast.map((ele)=>{
                return`
                    <li>
                        <a href="" target="_blank">
                            <div>
                                <p>${ele.title}</p>
                            </div>
                            <img src=${ele.img} height="110" width="110" class="r_box_img">
                        </a>
                    </li>     
                    `
            }).join("");
            let tplB=`<ul class="right_box_r">${rightLast}</ul>`
            // console.log(rightLast)
            return`
            <dl class="jk_mode">
            <dt style="border-bottom-color:#ff5f5f">${ele.Title}</dt>
            <dd class="clearfix">
            ${floorLeft}
            <div class="floor_right">
            ${floorRight}
            <div class="floor_right_r">
            ${tplA}
            ${tplB}
            </div>
            </div>
            </dd>
            </dl>
            `
        }).join("");
        this.silderBox=$('<div class="wrap_middle"></div>').html(html);
        $(".wrap").append(this.silderBox);
        // console.log(html)
    }
}