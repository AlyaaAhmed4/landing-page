/*let buttonClockMe=document.getElementById("blog").innerHTML="blog";
buttonClockMe.addEventListener("onclick",buttonClick);


function buttonClick(){
    document.getElementById("blog").innerHTML="blog";
    
}*/

let addToCart=document.getElementById(product)
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity++;
    } else {
      
      cart.push({product, quantity: 1 });
    }

    
    localStorage.setItem('cart', JSON.stringify(cart));

    
    console.log();
}
