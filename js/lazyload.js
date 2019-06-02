/**
 * @author renjiefang
 * @date  2019-06-01 15:28
 */

 let olazy = document.querySelectorAll('.lazyload')
console.log(olazy[0].src);

   let arr = []
    let bheight = window.innerHeight

    olazy.forEach( ele => {
            let parent = ele.offsetParent
            let preparent = parent.offsetParent
            let top =(preparent.offsetTop+ ele.offsetTop)
            arr.push(top)
    })

    window.onscroll = function () {
            let   dotop = document.documentElement.scrollTop|| document.body.scrollTop

           for(let i = 0; i <olazy.length; i++) {
                 if( dotop+bheight >= arr[i]+500) {
                           if(!olazy[i].src){
                               console.log("ren");
                              olazy[i].src = olazy[i].getAttribute('lazy')

                           }


                 }
           }
    }