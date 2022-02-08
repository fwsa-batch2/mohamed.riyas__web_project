let updateHtml = "";
function addOfficeChairs() {
    let details= JSON.parse(localStorage.getItem("Chairs"));
    for (let i of details) {
        if (i.itemType == "OC") {
            updateHtml += "<div class=\"product\"><a href='./../../pages/details.html?name=" + i.itemName + "'><img src="+ i.itemImage + " class=\"productImage\"></a><br><div class=\"product_description\"><strong>"+ i.itemName + "</strong><p> by " + i.itemCompany + "</p><p>&#x20b9;" + i.itemPrice + "</p></div></div>";
        }
    }
    return updateHtml;
}
document.getElementById("officechair_products").innerHTML = addOfficeChairs();