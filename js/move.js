/**
 * @author renjiefang
 * @date  2019-06-01 08:39
 */

// 轮播图

function byId(id){
    return document.getElementById(id);

}


let  current=0,
    next = 0,
    flag = true,
    pics=byId("swipe").getElementsByClassName("swipe_item"),
    len=pics.length,
    width = pics[0].offsetWidth,
    round=byId("spot").getElementsByTagName("li");



function slideImg() {
    var  swipe = byId("swipe");
    swipe.onmouseover = function () {
        clearInterval(timer);
    }
    swipe.onmouseout = function () {
        timer = setInterval(function () {
            next++;
            if (next >= len) {
                next = 0;
            }
            pics[next].style.left = width +'px';
            round[current].classList.remove('spot_focus')
            round[next].classList.add('spot_focus')
            animate(pics[current],{left: -width},500)
            animate(pics[next],{left: 0},500,function() {
                flag = true
            })
            current = next;

        }, 1500);
    }

    //给小圆点绑定事件
    for (let d = 0; d < len; d++) {

        round[d].onclick = function () {

            next = d ;
            if(next > current) {
                console.log("111");
                animate(pics[current],{left: -width},500)
                animate(pics[next],{left: 0}, 500)
            }

            if(next < current) {

                animate(pics[current],{left: width},500)
                animate(pics[next],{left: 0}, 500)
            }
            round[current].classList.remove('spot_focus')
            round[next].classList.add('spot_focus')

            current = next
        }
    }

    //给左右绑定事件
    let  left = byId("left");
    left.onclick = function () {
        if(!flag) {
            return ;
        }
        flag = false
        next--;
        if (next < 0 ) {
            next = len-1;
            console.log("come");
            // pics[next].style.left = width +'px'
        }
        pics[next].style.left = -width +'px'

        round[current].classList.remove('spot_focus')
        round[next].classList.add('spot_focus')
        animate(pics[current],{left: width},500)
        animate(pics[next],{left: 0}, 500,function() {
            flag = true
        })
        current = next;
    }

    let  right = byId("right");
    right.onclick = function () {
        if(!flag) {
            return ;
        }
        flag = false
        console.log(1);
        next++;
        if (next ==pics.length ) {
            next = 0;
            console.log("come");

        }

          pics[next].style.left = width +'px';
         console.log(pics[next].offsetLeft);
         round[current].classList.remove('spot_focus')
         round[next].classList.add('spot_focus')
          animate(pics[current],{left: -width})
          animate(pics[next],{left: 0},function() {
              flag = true
          })
          current = next;

    }



}

slideImg();
 swipe.onmouseout();






