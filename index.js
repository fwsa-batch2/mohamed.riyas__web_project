(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WM8QNC9Z');

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
