class Manager{
    constructor(data){
        this.data=data;
        this.sliderBox=null;
        // console.log(this.data)
    }
    init(){
        this.renderUI();
        this.addClickEventHandler();
    }
    renderUI(){
    this.sliderBox=$('<div class="banner" style="background: none;"><div class="banner-pic"></div></div>');
    $(".slide_box").prepend(this.sliderBox);
    let html=this.data.map((item,inedx)=>{
        let tpls=item.Imgs.map((ele,index)=>{
            return`
            <li style="background: rgb(30, 2, 14);">
                <a href=${ele.Url} title="" target="_blank" style="position:relative;">
                     <img height="510" width="810" alt=" " src=${ele.img}>
                </a>
             </li>
            `
        }).join("");
        let lis=item.list.map((ele)=>{
            return`
            <li class="current">
                <span class="bg"></span>
                <a href=${ele.Url} target="_blank"><h4>${ele.title}</h4></a>
             </li>
            `
        }).join("");
        return`
        <ul id="show">
        ${tpls}
        </ul>
        <ul class="banner-ctrl" style="width: 426px; margin-left: -211.2px;" id="btn">
        ${lis}
        </ul>
        `
    }).join("");
    // console.log(html);
    this.sliderBox.html(html);
    this.sliderBox.append($('<div id="pre" class="prenext"></div>')).append($('<div id="next" class="prenext"></div>'));
    }
    addClickEventHandler(){
    let num=$("#show>li").length;
	let index=0;
    let speed=2000;
    let getPic=$("#show li");
	
	function showImg(index){
        for(let i=0;i<getPic.length;i++){
            getPic[i].style.display="none";
        }
        getPic[index].style.display="block";
		$("#btn li").removeClass("mouse-hover").eq(index).addClass("mouse-hover");
		}
        
		$("#btn li").mouseover(function(){
			index=$("#btn li").index(this);
			showImg(index);
			}).eq(0).mouseover();
			
			function autoPlay(){
				if(index>=num-1) index=0;
				else index++;
				showImg(index);
				}
				let timer=setInterval(autoPlay,speed);
				$(".banner").hover(function(){
				clearInterval(timer);
				},function(){
				timer=setInterval(autoPlay,speed);
				});
				$(".banner .prenext").hover(function(){
					$(this).stop(true,false).animate({opacity:"0.6"},300);
				},function(){
					
					$(this).stop(true,false).animate({opacity:"0.3"},300);
				});
				$(".banner #next").click(function(){
					if(index>=num-1) index=0;
					else index++;
					showImg(index);
				});
				$(".banner #pre").click(function(){
					if(index==0) index=num-1;
					else index--;
					showImg(index);
                });
    }
}