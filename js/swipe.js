/**
 * @author renjiefang
 * @date  2019-05-11 19:27
 */
// 轮播图

function byId(id){
    return document.getElementById(id);

}


var index=0,
    timer=null,
    pics=byId("swipe").getElementsByClassName("swipe_item"),
    len=pics.length,
    round=byId("spot").getElementsByTagName("li");



function slideImg() {
    var  swipe = byId("swipe");
    swipe.onmouseover = function () {
        clearInterval(timer);
    }
    swipe.onmouseout = function () {
        timer = setInterval(function () {
            index++;
            if (index >= len) {
                index = 0;
            }
            //切换图片
            changeImg();

        }, 1500);
    }

    //给小圆点绑定事件
    for (var d = 0; d < len; d++) {
        round[d].id = d;

        round[d].onclick = function () {
            index = this.id;

            changeImg();
        }
    }

    //给左右绑定事件
    var left = byId("left");
    left.onclick = function () {
        index--;
        if (index < 0) {
            index = len - 1;
        }
        changeImg();
    }

    var right = byId("right");
    right.onclick = function () {
        index++;
        if (index >= len) {
            index = 0;
        }
        changeImg();

    }



}

slideImg();
swipe.onmouseout();


function changeImg(){
    for(var i=0;i<len;i++){
        pics[i].style.display='none';
        round[i].className="";
    }
    pics[index].style.display='block';
    round[index].className="spot_focus";
}



