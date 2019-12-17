class Content {
    constructor(data) {
        this.data = data;
        this.silderBox = null;
        // console.log(this.data)
    }
    init() {
        this.renderUI();
    }
    renderUI() {
        let htmlB=`<dt>${this.data[0].Title}</dt>`;
        // console.log(htmlB)
        let html="";
        // console.log(html)
        this.data.forEach((ele) => {
            let tpl = ele.Content.map((ele) => {
                let ul = ele.bottomBox.map((ele) => {
                    return `
                <ul class="tszl_ul">
                <li class="clearfix">
                <a href="" target="_blank" style="position:relative;">
                <img src=${ele.smallImg} height="83" width="83" class="fl">
                <div class="tszl_ul_box">
                <h4>${ele.titleA}</h4>
                <h5>${ele.titleB}</h5>
                </div>
                </a>
                </li>
                </ul>                
                `
                }).join("");
                // console.log(ul)
                return `
            <dd>
            <div class="tszl_img">
            <a href="" target="_blank" style="position:relative;">
            <img src=${ele.bigImg} height="360" width="295">
            <div class="img_box">
            <h3>${ele.maxTitle}</h3>
            <p>${ele.minTitle}</p>
            </div>
            </a>
            </div>
            ${ul}
            </dd>
            `
            }).join("");
            // console.log(tpl)
            html += tpl;
            });
            this.silderBox = $('<dl class="jk_tszl clearfix jk_mode"></dl>').html(htmlB+html);
            $(".wrap").append(this.silderBox);
        }
}