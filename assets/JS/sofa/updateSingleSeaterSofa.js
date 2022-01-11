let updateHtml = "";
function getSingleSeaterSofadata() {
    let details= JSON.parse(localStorage.getItem("singleSeaterSofaStorage"));
    for (let i = 0; i < details.length; i++) {
        updateHtml += "<div class=\"product\"><a href='./../../pages/details.html?name=" + details[i].itemName + "'><img src="+ details[i].itemImage + " class=\"productImage\"></a><br><div class=\"product_description\"><strong>"+ details[i].itemName + "</strong><p> by " + details[i].itemCompany + "</p><p>&#x20b9;" + details[i].itemPrice + "</p></div></div>"
    }
    return updateHtml;
}
let callingSingleSeaterSofaData = getSingleSeaterSofadata();
document.getElementById("singleSeaterSofa").innerHTML = callingSingleSeaterSofaData;