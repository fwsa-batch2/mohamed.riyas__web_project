let str = "";
function addBarChairs() {
    let details = JSON.parse(localStorage.getItem("Chairs"));
    console.log(details);
    for (let i of details) {
        if (i.itemType == "BC") {
            str += "<div class=\"product\"><a href='./../../pages/details.html?name=" + i.itemName + "'><img src='"+ i.itemImage + "' class=\"productImage\" height='500px'></a></a><br><div class=\"product_description\"><strong>"+ i.itemName + "</strong><p> by " + i.itemCompany + "</p><p>&#x20b9;" + i.itemPrice + "</p></div></div>";
        }
    }
    return str;
}
document.getElementById("products").innerHTML = addBarChairs();