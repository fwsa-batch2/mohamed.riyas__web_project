let updateHtml = "";
function updateLShapeSofa() {
    let details= JSON.parse(localStorage.getItem("LShapeSofaStorage"));
    for (let i of details) {
        updateHtml += "<div class=\"product\"><a href='./../../pages/details.html?name=" + i.itemName + "'><img src="+ i.itemImage + " class=\"productImage\"></a><br><div class=\"product_description\"><strong>"+ i.itemName + "</strong><p> by " + i.itemCompany + "</p><p>&#x20b9;" + i.itemPrice + "</p></div></div>"
    }
    return updateHtml;
}
let callingLShapeSofa = updateLShapeSofa();
document.getElementById("LShapeSofa").innerHTML = callingLShapeSofa;