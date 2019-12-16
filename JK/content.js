var item=document.querySelector(".jk_tszl");
var dd=item.querySelectorAll("dd");
var data=[];
for(let i=0;i<dd.length;i++){
    let o={};
    o.bigImg=dd[i].querySelectorAll(".tszl_img img")[0].src;
    o.maxTitle=dd[i].querySelectorAll(".img_box h3")[0].innerText;
    o.minTitle=dd[i].querySelectorAll(".img_box p")[0].innerText;

    o.bottomBox=[];
    let lis=dd[i].querySelectorAll(".tszl_ul li");
    for(let k=0;k<lis.length;k++){
        let obj={};
        obj.smallImg=lis[k].querySelectorAll("img")[0].src;
        obj.titleA=lis[k].querySelectorAll(".tszl_ul_box h4")[0].innerText;
        obj.titleB=lis[k].querySelectorAll(".tszl_ul_box h5")[0].innerText;
        o.bottomBox.push(obj);
    }
    data.push(o)
}