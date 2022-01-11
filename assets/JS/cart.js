let cartStorage =[];
function whilepageLoad() {
    let getCartStorage = JSON.parse(localStorage.getItem("cartStorage"));
    if (getCartStorage != null) {
        cartStorage = getCartStorage;
    }
}
whilepageLoad();
const pageURL = window.location.search;
const urlParameter = new URLSearchParams(currentURL);
const nameUrl = urlParams.get("name");
let getData = JSON.parse(localStorage.getItem("productDetails"));
function addCart(event) {
    event.preventDefault();
    for (let i of getData) {
        let indexNumber = i.itemName;
        if (indexNumber == nameUrl) {
            let name = i.itemName;
            let price = i.itemPrice;
            let usage = i.itemApplications;
            let color = i.itemColor;
            let appearance = i.itemappearance;
            let image = i.image;
            let cartProduct = {
                "itemName" : name,
                "itemPrice" : price,
                "itemusage" : usage,
                "itemColor" : color,
                "itemappearance" : appearance,
                "itemImage" : image
            }
            cartStorage.push(cartProduct);
            let ToString = JSON.stringify(cartStorage);
            localStorage.setItem("cartStorage",ToString);
        }
    }
}