/*

    if (num === 1){
        document.getElementById('screen').innerHTML = `<img id="current" onclick="lightbox(1)" src="images/image-product-1.jpg" alt="">`
    } else if (num === 2) {
        document.getElementById('screen').innerHTML = `<img id="current" onclick="lightbox(2)" src="images/image-product-2.jpg" alt="">`
        
    } else if (num === 3) {
        document.getElementById('screen').innerHTML = `<img id="current" onclick="lightbox(3)" src="images/image-product-3.jpg" alt="">`
    } else {
        document.getElementById('screen').innerHTML = `<img id="current"  onclick="lightbox(4)"src="images/image-product-4.jpg" alt="">`
    }

*/
/*

    if (num === 1){
        document.getElementById('pic').innerHTML = `<img id="current" src="images/image-product-1.jpg" alt="">`
    } else if (num === 2) {
        document.getElementById('pic').innerHTML = `<img id="current" src="images/image-product-2.jpg" alt="">`
        
    } else if (num === 3) {
        document.getElementById('pic').innerHTML = `<img id="current" src="images/image-product-3.jpg" alt="">`
    } else {
        document.getElementById('pic').innerHTML = `<img class="visible" src="images/image-product-4.jpg" alt="">`
    }


*/
console.log("hello from main.js");
var a = document.getElementById("amount")
// var a = 2

console.log(+a.innerHTML +1)
let gallery = [ `<img onclick="lightbox(0)" src="images/image-product-1.jpg" alt="">
`,`<img onclick="lightbox(1)" src="images/image-product-2.jpg" alt="">` ,`<img onclick="lightbox(2)" src="images/image-product-3.jpg" alt="">` ,`<img onclick="lightbox(3)" src="images/image-product-4.jpg" alt="">` ];

let scroll = [ `<img onclick="next(0)" src="images/image-product-1.jpg" alt="">
`,`<img onclick="next(1)" src="images/image-product-2.jpg" alt="">` ,`<img onclick="next(2)" src="images/image-product-3.jpg" alt="">` ,`<img onclick="next(3)" src="images/image-product-4.jpg" alt="">` ];

var Bscreen = document.getElementById("blackscreen")
function tothumb(num) {
    document.getElementById('screen').innerHTML = gallery[num]
}
function lightbox(num) {
    document.getElementById('pic').innerHTML = gallery[num]
    document.getElementById('lightbox').classList.add("visible");
    document.getElementById("blackscreen").innerHTML = `<div onclick="close()" class="black-filter"></div>`
    document.getElementById("lightbox").style.display = "block"
    document.getElementById("body").style.zIndex = "-1"

}
function heavybox() {
    document.getElementById("blackscreen").innerHTML = ``
    document.getElementById("lightbox").style.display = "none"
}
function next() {
    let current = document.getElementById('pic');
    for(i = 0 ; i <gallery.length ; i++ ){
        if (current.innerHTML == gallery[i]){
            console.log(i)
            var  next = i +1;
            if (next === gallery.length){
                document.getElementById('pic').innerHTML = gallery[0]
            }else{
                document.getElementById('pic').innerHTML = gallery[next]
                break
            }
        }
    }
}
function pre() {
    let current = document.getElementById('pic');
    for(i = 0 ; i <gallery.length ; i++ ){
        if (current.innerHTML == gallery[i]){
            console.log(i)
            var  pre = i -1;
            if (pre === -1){
                document.getElementById('pic').innerHTML = gallery[gallery.length -1]
                break
            }else{
                document.getElementById('pic').innerHTML = gallery[pre]
                break
            }
        }
    }
}
function adding(){
    a.innerHTML     = +a.innerHTML +1
}
function ereasing(){
    a.innerHTML = +a.innerHTML -1
    if (a.innerHTML < 0){
        a.innerHTML = 0
    }
}
var bag = document.getElementById("bag")
function cartitems() {
    if (bag.innerHTML === "nothing") {
        bag.innerHTML = `<p class="nothing">Your cart is empty.</p>`
    }else{
        
    }
}
cartitems();

function addtocart() {
    var currentimg  = document.getElementById("screen")
    bag.innerHTML =`<div class="product">
        ${currentimg.innerHTML}
        <div>
        <p>fall limited edition sneakers</p>
        <span>$125.00 x ${a.innerHTML}</span>
        <span><strong>$${a.innerHTML * 125}</strong></span>
        </div>
        <div><svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg></div>
        </div>`
}