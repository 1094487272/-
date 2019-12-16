var items = document.querySelector(".wrap_middle").children;
var data = [];
for (let i = 0; i < items.length; i++) {
    let o = {};
    // o.floor=items[i].querySelector("dt").innerText;
    o.floorLeft=[];
    let dd=items[i].querySelectorAll("dd");
    for(let j=0;j<dd.length;j++){
        let obj={};
        obj.img=dd[j].querySelectorAll("a img")[0].src;
        o.floorLeft.push(obj);

        obj.title=[];
        let cont=dd[j].querySelectorAll(".left_box_top li");
        for(let k=0;k<cont.length;k++){
            obj.title.push(cont[k].querySelectorAll("a")[0].innerText);
        }
        obj.smallImg=[];
        let cc=dd[j].querySelectorAll(".left_box_bot li");
        for(let l=0;l<cc.length;l++){
            obj.smallImg.push(cc[l].querySelectorAll("a img")[0].src);
        }
    }
    o.floorRight={};
    o.floorRight.bigImg=items[i].querySelectorAll(".floor_right_l img")[0].src;
    o.floorRight.h3=items[i].querySelectorAll(".floor_r_t h3")[0].innerText;
    o.floorRight.p=items[i].querySelectorAll(".floor_r_t p")[0].innerText;

    o.rightBox=[];
    let boxx=items[i].querySelectorAll(".right_box_l li");
    for(let b=0;b<boxx.length;b++){
        let obje={};
        obje.title=boxx[b].querySelectorAll("a p")[0].innerText;
        obje.img=boxx[b].querySelectorAll("a img")[0].src;
        o.rightBox.push(obje);
    }

    o.rightLast=[];
    let box=items[i].querySelectorAll(".right_box_r li");
    for(let b=0;b<box.length;b++){
        let obje={};
        obje.title=box[b].querySelectorAll("a p")[0].innerText;
        obje.img=box[b].querySelectorAll("a img")[0].src;
        o.rightLast.push(obje);
    }
    data.push(o)
}



var data = [{
    floor: "xxx",
    floorLeft: [{
        img: "xxx",

    }],
    floorRight: [{

    }]
}, {
    floor: "xxx",
    floorLeft: [{
        img: "xxx",

    }],
    floorRight: [{

    }]
}]
