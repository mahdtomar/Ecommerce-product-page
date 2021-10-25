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
// console.log("hello from main.js");
var a = document.getElementById("amount");
// var a = 2

console.log(+a.innerHTML + 1);
let gallery = [
  `<img onclick="lightbox(0)" src="images/image-product-1.jpg" alt="">
`,
  `<img onclick="lightbox(1)" src="images/image-product-2.jpg" alt="">`,
  `<img onclick="lightbox(2)" src="images/image-product-3.jpg" alt="">`,
  `<img onclick="lightbox(3)" src="images/image-product-4.jpg" alt="">`,
];

let scroll = [
  `<img onclick="next(0)" src="images/image-product-1.jpg" alt="">
`,
  `<img onclick="next(1)" src="images/image-product-2.jpg" alt="">`,
  `<img onclick="next(2)" src="images/image-product-3.jpg" alt="">`,
  `<img onclick="next(3)" src="images/image-product-4.jpg" alt="">`,
];

var Bscreen = document.getElementById("blackscreen");
function tothumb(num) {
  document.getElementById("screen").innerHTML = gallery[num];
}
function lightbox(num) {
  document.getElementById("pic").innerHTML = gallery[num];
  document.getElementById("lightbox").classList.add("visible");
  document.getElementById(
    "blackscreen"
  ).innerHTML = `<div onclick="close()" class="black-filter"></div>`;
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("body").style.zIndex = "-1";
}
function heavybox() {
  document.getElementById("blackscreen").innerHTML = ``;
  document.getElementById("lightbox").style.display = "none";
}
function next() {
  let current = document.getElementById("pic");
  for (i = 0; i < gallery.length; i++) {
    if (current.innerHTML == gallery[i]) {
      console.log(i);
      var next = i + 1;
      if (next === gallery.length) {
        document.getElementById("pic").innerHTML = gallery[0];
      } else {
        document.getElementById("pic").innerHTML = gallery[next];
        break;
      }
    }
  }
}
function pre() {
  let current = document.getElementById("pic");
  for (i = 0; i < gallery.length; i++) {
    if (current.innerHTML == gallery[i]) {
      console.log(i);
      var pre = i - 1;
      if (pre === -1) {
        document.getElementById("pic").innerHTML = gallery[gallery.length - 1];
        break;
      } else {
        document.getElementById("pic").innerHTML = gallery[pre];
        break;
      }
    }
  }
}
function adding() {
  a.innerHTML = +a.innerHTML + 1;
}
function ereasing() {
  a.innerHTML = +a.innerHTML - 1;
  if (a.innerHTML < 0) {
    a.innerHTML = 0;
  }
}
var bag = document.getElementById("bag");
function cartitems() {
  if (bag.innerHTML === "nothing" || a == 0) {
    bag.innerHTML = `<p class="nothing">Your cart is empty.</p>`;
  } else {
  }
}
cartitems();

function addtocart() {
  if (a.innerHTML == 0) {
    bag.innerHTML = `<p class="nothing">Your cart is empty.</p>`;
    document.getElementById("cart-btn").style.display = "none";
  } else {
    var currentimg = document.getElementById("screen");
    bag.innerHTML = `<div class="product">
        ${currentimg.innerHTML}
        <div>
        <p>fall limited edition sneakers</p>
        <span>$125.00 x ${a.innerHTML}</span>
        <span><strong>$${a.innerHTML * 125}</strong></span>
        </div>
        <div class="recyclebin"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="109.484px" height="122.88px" viewBox="0 0 109.484 122.88" enable-background="new 0 0 109.484 122.88" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z"/></g></svg></div>
        </div>`;
    document.getElementById("cart-btn").style.display = "block";
  }
}

function opencart() {
  // if (document.getElementById("cart").style.display == "block"){
  //     document.getElementById("cart").style.display = "none"
  // }else{
  //     document.getElementById("cart").style.display = "block"
  //     document.getElementById("closecart").classList.add = "tapAW"
  // }
  document.getElementById("cart").style.display = "block";
  document.getElementById("closecart").style.display = "block";
}
function closecart() {
  document.getElementById("cart").style.display = "none";
  document.getElementById("closecart").style.display = "none";
}
