/**
 * @author renjiefang
 * @date  2019-05-11 20:31
 */
var oTab = document.querySelector('.tab_content_list')

 var oLi = oTab.getElementsByTagName('li');
 var wrapper = document.querySelector('.tab_content_list')

     wrapper.onmouseover = function() {
         for (var i = 0; i < oLi.length; i++) {

              oLi[i].className = '';
              oLi[i].onmouseenter = oLi[i].onmousemove= function () {
                 this.className = 'li_focus'
             }

         }

     }


