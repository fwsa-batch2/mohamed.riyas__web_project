let updateHtml = "";
function getKingMattressData() {
    let details= JSON.parse(localStorage.getItem("KingMattressStorage"));
    for (let i of details) {
        updateHtml += "<div class=\"product\"><a href='./../../pages/details.html?name=" + i.itemName + "'><img src="+ i.itemImage + " class=\"productImage\"></a><br><div class=\"product_description\"><strong>"+ i.itemName + "</strong><p> by " + i.itemCompany + "</p><p>&#x20b9;" + i.itemPrice + "</p></div></div>"
    }
    return updateHtml;
}
let callingKingMattressData = getKingMattressData();
document.getElementById("kingMattress-menu").innerHTML = callingKingMattressData;