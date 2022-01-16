let barChairStorage = [];
let officeChairStorage = [];
let designerChairStorage = [];
function getBarChairData() {
    let barChairData = JSON.parse(localStorage.getItem("bar chair_Storage"));
    
    if (barChairData == null) {
        localStorage.setItem("bar chair_Storage",JSON.stringify(barChairStorage));
    }
    else {
        barChairStorage = barChairData;
    }
}
getBarChairData();
function getOfficeChairData() {
    let officeChairData = JSON.parse(localStorage.getItem("Office Chair Storage"));
    if (officeChairData == null) {
        localStorage.setItem("Office Chair Storage",JSON.stringify(officeChairStorage));
    }
    else {
        officeChairStorage = officeChairData;
    }
}
getOfficeChairData();
function getDesignerChairData() {
    let designerChairData = JSON.parse(localStorage.getItem("Designer Chair Storage"));
    if (designerChairData == null) {
        localStorage.setItem("Designer Chair Storage",JSON.stringify(designerChairStorage));
    }
    else {
        designerChairStorage = designerChairData;
    }
}
getDesignerChairData();
function getdetails(event) {
    event.preventDefault();
    let name = document.getElementById("productName").value;
    let companyName = document.getElementById("company").value;
    let brand = document.getElementById("price").value;
    let imageInput = document.getElementById("productimage").value;
    let productType = document.getElementById("chairs").value;
    if (productType == "Bar Chair") {
        let productDetails = {
            "itemName" : name,
            "itemCompany": companyName,
            "itemPrice": brand,
            "itemImage" : imageInput,
            "itemType" : productType
        }
        barChairStorage.push(productDetails);
        let convertTo_string = JSON.stringify(barChairStorage);
        localStorage.setItem("bar chair_Storage",convertTo_string);
    }
    else if (productType == "office Chair") {
        let productDetails = {
            "itemName" : name,
            "itemCompany": companyName,
            "itemPrice": brand,
            "itemImage" : imageInput,
            "itemType" : productType
        }
        officeChairStorage.push(productDetails);
        let convertTo_string = JSON.stringify(officeChairStorage);
        localStorage.setItem("Office Chair Storage",convertTo_string);
    }
    else {
        let productDetails = {
            "itemName" : name,
            "itemCompany": companyName,
            "itemPrice": brand,
            "itemImage" : imageInput,
            "itemType" : productType
        }
        designerChairStorage.push(productDetails);
        let convertTo_string = JSON.stringify(designerChairStorage);
        localStorage.setItem("Designer Chair Storage", convertTo_string);
    }
}