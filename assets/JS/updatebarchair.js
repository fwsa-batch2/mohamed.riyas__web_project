let str = "";
function updateBarChairs() {
    let details = JSON.parse(localStorage.getItem("bar chair_Storage"));
    for (let i of details) {
        str += "<div class=\"product\"><a href='./../../pages/details.html?name=" + i.itemName + "'><img src='"+ i.itemImage + "' class=\"productImage\" height='500px'></a></a><br><div class=\"product_description\"><strong>"+ i.itemName + "</strong><p> by " + i.itemCompany + "</p><p>&#x20b9;" + i.itemPrice + "</p></div></div>";
    }
    return str;
}
let callingBarChairs = updateBarChairs();
document.getElementById("products").innerHTML = callingBarChairs;