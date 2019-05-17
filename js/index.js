/**
 * @author renjiefang
 * @date  2019-05-08 14:54
 */
//搜索动画
let oSearch = document.querySelector('.search');
let oInput = document.querySelector('.input')
var timer = null

oSearch.onmouseenter = function () {
    timer = setTimeout(function () {
        oInput.style.display = 'block'
        oInput.focus();
    }, 500)


}
oSearch.onmouseleave = function () {

    clearTimeout(timer)
    oInput.style.display = 'none'
}
//
// //头部选择
//
// let  onav = document.querySelector(".nav_item")
// let  onav_Li = onav.getElementsByTagName('li')
//
//     onav.onmouseover = function() {
//         for (var i = 0; i < onav_Li.length; i++) {
//             console.log(i);
//             onav_Li[i].className = ''
//             onav_Li[i].onclick = function () {
//                 console.log("click");
//                 this.className = 'nav_item_focus'
//             }
//         }
//
//     }