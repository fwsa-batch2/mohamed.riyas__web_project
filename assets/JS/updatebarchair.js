let str = "";
function getBarChairData() {
    let details = JSON.parse(localStorage.getItem("bar chair_Storage"));
    for (i = 0; i < details.length; i++) {
        str += "<div class=\"product\"><a href='./../../pages/details.html?name=" + details[i].itemName + "'><img src='"+ details[i].itemImage + "' class=\"productImage\" height='500px'></a></a><br><div class=\"product_description\"><strong>"+ details[i].itemName + "</strong><p> by " + details[i].itemCompany + "</p><p>&#x20b9;" + details[i].itemPrice + "</p></div></div>";
    }
    return str;
}
let callingBarChairData = getBarChairData();
document.getElementById("products").innerHTML = callingBarChairData;