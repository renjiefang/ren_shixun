/**
 * @author renjiefang
 * @date  2019-05-08 14:54
 */
//搜索动画
let oSearch = document.querySelector('.search');
let oInput = document.querySelector('.input')
let oToTop = document.querySelector('.toTop')
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

//回到顶部
document.onscroll = function() {

        let height = document.body.scrollTop ||document.documentElement.scrollTop;

         if(height > 400) {
              oToTop.style.display = 'block'
         }else {
             oToTop.style.display = 'none'
         }
}
oToTop.onclick = function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

//tab
 let  ojs = document.querySelector('.js_test')
let   oli = ojs.getElementsByTagName('li')
let oti = document.querySelector('.tab_title')
let tab_content = document.querySelectorAll('.tab_content')
let  tab_left = document.querySelector('.tab_left')


  ojs.onmouseenter = function(e) {
           console.log(e);
      for (let i = 0; i < oli.length; i++) {
            oli[0].className = ''
          oli[i].onmouseover = function () {
              this.className = 'tab_focus'
              for(let i = 0; i < tab_content.length; i++) {
                   tab_content[i].style.display = 'none'
              }
                tab_content[i].style.display = 'block'

          }
          oli[i].onmouseleave = function() {
              this.className = ''
               tab_content[i].onmouseover = function() {
                      oli[i].className = 'tab_focus'
               }
              tab_content[i].onmouseleave = function() {
                  for (let i = 0; i < oli.length; i++) {
                      oli[i].className = ''
                  }
              }
          }
      }
  }
  tab_left.onmouseleave = function() {
    for(let i = 0; i <oli.length; i++) {
        oli[i].className = ''
    }
      for(let i = 0; i < tab_content.length; i++) {
          tab_content[i].style.display = 'none'
      }
      tab_content[0].style.display = 'block'
      oli[0].className = 'tab_focus'
  }
