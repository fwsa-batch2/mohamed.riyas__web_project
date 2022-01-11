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
    for (let i=0; i<getData.length; i++) {
        let indexNumber = getData[i].itemName;
        if (indexNumber == nameUrl) {
            let name = getData[i].itemName;
            let price = getData[i].itemPrice;
            let usage = getData[i].itemApplications;
            let color = getData[i].itemColor;
            let appearance = getData[i].itemappearance;
            let image = getData[i].image;
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