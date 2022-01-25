let updateHtml = "";
function updatePopularProducts() {
    let details= JSON.parse(localStorage.getItem("popularProducts"));
    for (let i of details) {
        updateHtml += "<div class='div_popularProducts'><a href='./pages/details.html?name="+i.name+"'><img src = "+i.image+" class='productImage'><div class='productDescription'><strong>"+i.name+"</strong></div></a></div>";
    }
    return updateHtml;
}
let callingPopularProducts = updatePopularProducts();
document.getElementById("popularProducts").innerHTML = callingPopularProducts;