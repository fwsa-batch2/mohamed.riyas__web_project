let itemDetails = [];
function onPageLoad() {
    let gettingDetails = JSON.parse(localStorage.getItem("productDetails"));
    if (gettingDetails != null) {
        itemDetails = gettingDetails;
    }
}
onPageLoad();
function addDetailsHandler(event) {
    event.preventDefault();
    const name = document.getElementById("productName").value;
    const price = document.getElementById("productPrice").value;
    const applications = document.getElementById("productApplication").value;
    const company = document.getElementById("productcompany").value;
    const color = document.getElementById("productColor").value;
    const appearance = document.getElementById("productAppearance").value;
    const productNumber = document.getElementById("number").value;
    const footrest = document.getElementById("footrest").value;
    const armrest = document.getElementById("armrest").value;
    const wheels = document.getElementById("wheels").value;
    const instructions = document.getElementById("careInstructions").value;
    const warranty = document.getElementById("warranty").value;
    const highlights = document.getElementById("highlights").value;
    const image = document.getElementById("productImage").value;

    let details = {
        "itemName" : name,
        "itemPrice" : price,
        "itemApplications" : applications,
        "itemCompany" : company,
        "itemColor" : color,
        "itemappearance" : appearance,
        "productNumber" : productNumber,
        "footrestIncluded" : footrest,
        "armrestIncluded" : armrest,
        "wheelsIncluded" : wheels,
        "careInstructions" : instructions,
        "itemWarranty" : warranty,
        "highlights" : highlights,
        "image" : image
    }
    itemDetails.push(details);
    let convertToString = JSON.stringify(itemDetails);
    localStorage.setItem("productDetails", convertToString); 
}