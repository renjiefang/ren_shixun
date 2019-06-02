/**
 * @author renjiefang
 * @date  2019-05-11 20:31
 */
//方法一
// var oTab = document.querySelector('.tab_content_list')
//
//  var oLi = oTab.getElementsByTagName('li');
//  var wrapper = document.querySelector('.tab_content_list')
//
//      wrapper.onmouseover = function() {
//          for (var i = 0; i < oLi.length; i++) {
//
//               oLi[i].className = '';
//               oLi[i].onmouseenter = oLi[i].onmousemove= function () {
//                  this.className = 'li_focus'
//              }
//
//          }
//
//      }
//      wrapper.onmouseleave = function() {
//            for(var i = 0; i <oLi.length; i++) {
//                console.log(i);
//                  oLi[i].className = '';
//
//            }
//            oLi[0].className = 'li_focus'
//      }

 //方法二
    let otab = document.querySelector('.tab_content_list')
let   oLi = document.querySelectorAll('.tab_content_list  li')
   console.log(oLi);
 oLi.forEach(function(ele) {
        ele.onmouseover = function() {
               for(let i = 0; i <oLi.length; i++) {
                   oLi[i].classList.remove('li_focus')
               }
                this.classList.add('li_focus')

        }
 })

    otab.onmouseout = function() {
        oLi.forEach(function(ele) {

            for (let i = 0; i < oLi.length; i++) {
                oLi[i].classList.remove('li_focus')
            }
            oLi[0].classList.add('li_focus')
        })
    }


