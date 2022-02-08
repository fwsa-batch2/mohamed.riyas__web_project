let sofaStorage =[];
function getSofa() {
    let SofaData  =  JSON.parse(localStorage.getItem("sofa"));
    if (SofaData == null) {
        localStorage.setItem("sofa",JSON.stringify(sofaStorage));
    }
    else {
        sofaStorage = SofaData;
    }
}
getSofa();
function addSofa(event) {
    event.preventDefault();
    // step1 : Get Values from Form.
    let name = document.getElementById("productName").value;
    let companyName = document.getElementById("company").value;
    let brand = document.getElementById("price").value;
    let imageInput = document.getElementById("productimage").value;
    let productType = document.getElementById("sofa").value;
    // step 2 : Store the values.
    let productDetails = {
        "itemName" : name,
        "itemCompany": companyName,
        "itemPrice": brand,
        "itemImage" : imageInput,
        "itemType" : productType
    }
    //Step 3: Whether already item is added in the same category
    let productExist = isProductAlreadyExist(productDetails);
    if (productExist == false) {
        sofaStorage.push(productDetails);
        let convertTo_string = JSON.stringify(sofaStorage);
        localStorage.setItem("sofa",convertTo_string);
    }
}
function isProductAlreadyExist(sofaDetails) {
    const sofaData = JSON.parse(localStorage.getItem("sofa"));
    let booleanValue = false;
    for (let i of sofaData) {
        if ((sofaDetails.itemName == i.itemName)&&(sofaDetails.itemCompany == i.itemCompany)&&(sofaDetails.itemPrice == i.itemPrice) && (sofaDetails.itemImage == i.itemImage) && (sofaDetails.itemType == i.itemType)) {
            booleanValue = true;
            document.getElementById("addingProcessResult").innerHTML = "The entered product is already added";
            break;
        }
    }
    return booleanValue;
}