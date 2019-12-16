 class Meum {
        constructor(data) {
            //  this.data=JSON.parse(data);
            this.data=data;
             this.silderBox=null;
            // console.log(data);
        }
        init() {
            this.renderUI();
        }
        renderUI() {
            this.silderBox= $('<div class="site_navbox clearfix"></div>');
            $(".site_nav").append(this.silderBox);
            let tpl=this.data.map((ele) => {
                let dd = ele.minTitle.map((ele) => `<dd>${ele}</dd>`).join("");
                return `
                <dl class="clearfix">
                <dt>${ele.maxTitle}</dt>
                ${dd}
                </dl>
                `               
            }).join("");
            // console.log(tpl);
            // this.silderBox[0].innerHTML=tpl;
            this.silderBox.html(tpl);
            
        }
    }