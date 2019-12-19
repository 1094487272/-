function extend(obj1, obj2) {
    for (var key in obj1) {
        obj2[key] = obj1[key];
    }
}

function fangdajing(opt) {
    //默认参数
    var defaultopt = {
        scal: 2,
        speed: 1,
    }


    extend(opt, defaultopt)
    //外层最大框的节点
    var box = document.getElementById(defaultopt.ele);
    //大图节点
    var bigimg = box.getElementsByClassName('bigimg')[0];
    //原图节点
    var imgs = box.getElementsByClassName('imgs')[0];
    //小图节点
    var samllimg = box.getElementsByClassName('samllimg')[0];
    //函数对象里的img数组
    var img = defaultopt.imglist;

    //拼接大图
    var bigpic = `<img src="${img[0]}" alt="">`;
    //拼接原图和遮罩
    var smallpic = bigpic + `<div class="zhuai"></div>`;
    //渲染大图
    bigimg.innerHTML = bigpic;
    //渲染原图
    imgs.innerHTML = smallpic;
    //大图的宽 = 原图的宽 * 放大倍数
    bigimg.children[0].style.width = imgs.children[0].offsetWidth * defaultopt.scal + 'px';
    //大图的高 = 原图的高 * 放大倍数
    bigimg.children[0].style.height = imgs.children[0].offsetHeight * defaultopt.scal + 'px';
    //遍历img数组拼接字符串
    var html = img.map(function (item) {
        return `<li><img src="${item}" alt=""></li>`;
    }).join('');
    //渲染小图
    samllimg.innerHTML = html;
    //ul的宽 = 小图的下标长度 * 函数对象里的宽度
    samllimg.style.width = img.length * defaultopt.Width + 'px';
    //找到遮罩的节点
    var zhuai = box.getElementsByClassName('zhuai')[0];
    //鼠标滑动到原图的时候出现大图和遮罩
    imgs.onmouseover = function () {
        zhuai.style.display = 'block';
        bigimg.style.display = 'block';
    }
    //鼠标滑出原图的时候遮罩跟大图隐藏
    imgs.onmouseout = function () {
        zhuai.style.display = 'none';
        bigimg.style.display = 'none';
    }
    //找到大图下面的img
    var move = bigimg.getElementsByTagName('img')[0];
    //原图添加鼠标抚摸事件
    imgs.onmousemove = function (ev) {
        //left值 = 鼠标到文档的水平距离 - box的left值 - 遮罩的宽度 / 2
        var left = ev.pageX - box.offsetLeft - zhuai.offsetWidth / 2;
        //top值 = 鼠标到文档的垂直距离 - box的top值 - 遮罩的高度 / 2
        var top = ev.pageY - box.offsetTop - zhuai.offsetHeight / 2;
        //判断left到没到临界值
        if (left <= 0) {
            //假设left已经小于或等于0了那么left就等于0不在运动
            left = 0;
            //假设left大于或等于原图宽度跟遮罩宽度的时候
        } else if (left >= imgs.offsetWidth - zhuai.offsetWidth) {
            //left就 = 原图的宽度 - 遮罩的宽度
            left = imgs.offsetWidth - zhuai.offsetWidth;
        }
        //判断top到没到临界值
        if (top <= 0) {
            //假设top已经小于或等于0了那么top就等于0不在运动
            top = 0;
            //假设left大于或等于原图高度跟遮罩高度的时候
        } else if (top >= imgs.offsetHeight - zhuai.offsetHeight) {
             //left就 = 原图的高度 - 遮罩的高度
            top = imgs.offsetHeight - zhuai.offsetHeight;
        }
        //大图运动：最大运动距离 * 水平或垂直的比例系数(适用于矩形) 
        var scalx = left / (imgs.offsetWidth - zhuai.offsetWidth);
        var scaly = top / (imgs.offsetHeight - zhuai.offsetHeight);
        move.style.left = (bigimg.offsetWidth - move.offsetWidth) * scalx + 'px';
        move.style.top = (bigimg.offsetHeight - move.offsetHeight) * scaly + 'px';

        //遮罩运动 = 光标到文档的距离 - 盒子到图片的距离 - 遮罩的宽高 / 2
        zhuai.style.left = left + 'px';
        zhuai.style.top = top + 'px';
        
    }
    //利用事件委托 点击ul的时候获取img的src 切换原图的src跟大图的src
    samllimg.onclick = function (ev) {
        //通过ev.target找到下面的img
        if (ev.target.tagName.toLowerCase() == 'img') {
            //把src抽出来
            var src = ev.target.src;
            //原图的src跟大图的src都替换
            imgs.children[0].src = bigimg.children[0].src = src;

        }
    }
    var box3 = box.getElementsByClassName('box3')[0];
    //找到lefts添加点击事件
    var lefts = box.getElementsByClassName('lefts')[0];
    //找到top节点添加点击事件
    var rights = box.getElementsByClassName('rights')[0];
    //iW = 小图img的宽度 + 边框和内边距的和 X 移动图片的个数
    var iW = (samllimg.children[0].offsetWidth + defaultopt.BoPa) * defaultopt.speed;
    lefts.onclick = function () {
        moveimg(iW);
    }
    rights.onclick = function () {
     moveimg(-iW);   
    }
    function moveimg(speed) {
        //left = ul跟box3的距离 + 实参的参数
        var left = samllimg.offsetLeft + speed;
        //判断临界值
        if (left <= box3.offsetWidth - samllimg.offsetWidth) {
            //left = box3的宽度 - ul的宽度
            left = box3.offsetWidth - samllimg.offsetWidth;
        } else if (left >= 0) {
            left = 0;
        }
        samllimg.style.left = left + 'px';
    }
}

