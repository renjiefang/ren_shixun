/**
 * @author renjiefang
 * @date  2019-05-13 15:17
 */

var E = window.wangEditor
var editor2 = new E('.remark')
editor2.create()

let img = document.querySelectorAll('.head_photo > span')
  let first = 0;
  let select_img
for(let i = 0; i <img.length; i++) {
     console.log(1);
      img[i].onclick = function() {
            img[first].classList.remove('opacity')
           this.classList.add('opacity')
          first = i
          select_img = img[first].firstElementChild.getAttribute('src')
      }
 }


let oremark = document.querySelector('.remark')
let  already = document.querySelector('.already_input')
let reset_input = document.querySelector('.reset_input')
let  opp = document.querySelector('.remark p')
let value
let max = 100
    oremark.onkeyup = function() {
         value = opp.innerText
        console.log(value);
         already.innerText = value.length
         reset_input.innerText = max - value.length
    }


let submit = document.querySelector('.submit')
let list = document.querySelector('.remark_list')
let username = document.querySelector("#username")

 submit.onclick = function(e) {
      e.preventDefault()
      if(opp.innerText === '') {
          alert("内容不能为空")
          return ;
      }
     if(username.value === ''){
         alert("用户名呢")
         return ;
     }

     let html =`  <div class="remark_list_item">
                   <div class="top">
                       <div  style="overflow:hidden;">
                       <div>
                           <img src="${select_img}" alt="">
                       </div>
                        <div class="name_date">
                            <span class="name">${username.value}</span>
                            <span class="data">${new Date().toISOString().slice(0,10)}</span>
                        </div>
                       </div>
                        <p >${value}</p>
                   </div>
                
              </div>`
     opp.innerText = ''
     username.value = ''
     console.log("value"+value);

     list.innerHTML = html + list.innerHTML
 }


