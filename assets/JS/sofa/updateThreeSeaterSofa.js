let updateHtml = "";
function updateThreeSeaterSofa() {
    let details= JSON.parse(localStorage.getItem("sofa"));
    for (let i of details) {
        if (i.itemType == "3SeaterSofa") {
            updateHtml += "<div class=\"product\"><a href='./../../pages/details.html?name=" + i.itemName + "'><img src="+ i.itemImage + " class=\"productImage\"></a><br><div class=\"product_description\"><strong>"+ i.itemName + "</strong><p> by " + i.itemCompany + "</p><p>&#x20b9;" + i.itemPrice + "</p></div></div>";
        }
    }
    return updateHtml;
}
let callingThreeSeaterSofa = updateThreeSeaterSofa();
document.getElementById("3SeaterSofa").innerHTML = callingThreeSeaterSofa;