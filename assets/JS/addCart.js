let str = "";
function getCartData() {
    let getCartStorage = JSON.parse(localStorage.getItem("cartStorage"));
    for (let i of getCartStorage) {
        str += "<div class='cartProduct'><div class='div_img'><img src='"+ i.itemImage +"' class='cart-img'></div><div class='cartProductDetails'><h1 style='text-align: center'>"+i.itemName+"</h1><table class='cartTable'><tr><th scope='col'>Usage/Applications</th><td>"+ i.itemusage+"</td></tr><tr><th scope='col'>Color</th><td>"+ i.itemColor+"</td></tr><tr><th scope='col'>Appearance</th><td>"+ i.itemappearance+"</td></tr><tr><th scope='col'>Price</th><td>&#x20b9;"+i.itemPrice+"</td></tr></table><button class='order-btn'>Place Order</button><button class='remove-btn'>Remove</button></div></div>";
    }
    return str;
}
let callingCartData = getCartData();
document.getElementById("addedProduct").innerHTML = callingCartData;