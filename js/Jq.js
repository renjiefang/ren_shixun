/**
 * @author renjiefang
 * @date  2019-06-14 09:36
 */


// 轮播图
$(function() {


let  current=0,
    next = 0,
    flag = true,
    swipe = $("#swipe");
    pics=$(".swipe_item "),
    len=pics.length,
    width = pics[0].offsetWidth,
    round=$("#spot li");



function slideImg() {

    swipe.on('mouseover', function() {
        clearInterval(timer);

    })

    swipe.on('mouseout' ,function () {
        timer = setInterval(function () {
            next++;
            if (next >= len) {
                next = 0;
            }
            pics.eq(next).css({left: width});
            round.eq(current).removeClass('spot_focus').end().eq(next).addClass('spot_focus')
            pics.eq(current).animate({left: -width+'px'}).end().eq(next).animate({left: 0},function() {
                     flag = true
             })

            current = next;

        }, 1500);
    })

    //给小圆点绑定事件
    for (let d = 0; d < len; d++) {

        round.eq(d).on('click', function () {

            next = d ;
            if(next > current) {
                console.log("111");
                pics.eq(current).animate({left: -width+'px'}).end().eq(next).animate({left: 0})
            }

            if(next < current) {

                animate(pics[current],{left: width},500)
                animate(pics[next],{left: 0}, 500)
            }
            round.eq(current).removeClass('spot_focus').end().eq(next).addClass('spot_focus')

            current = next
        })
    }

    //给左右绑定事件
    let  left = $("#left");
    left.on('click', function () {
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
         pics.eq(next).css({left: -width+'px'})
        round.eq(current).removeClass('spot_focus').end().eq(next).addClass('spot_focus')
        pics.eq(current).animate({left: width+'px'}).end().eq(next).animate({left: 0},function() {
            flag = true
        })
        current = next;
    })

    let  right = $("#right");
    right.on('click',  function () {
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

        pics.eq(next).css({left: width+'px'})
        round.eq(current).removeClass('spot_focus').end().eq(next).addClass('spot_focus')
        pics.eq(current).animate({left: -width+'px'}).end().eq(next).animate({left: 0},function() {
            flag = true
        })
        current = next;

    })



}

slideImg();
swipe.trigger("mouseout");
})




