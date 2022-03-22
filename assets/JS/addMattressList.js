let mattressStorage = [];   // [{}, {}]
function getMattressData() {
    let mattressData  =  JSON.parse(localStorage.getItem("mattress"));
    if (mattressData == null) {
        localStorage.setItem("mattress",JSON.stringify(mattressStorage));
    }
    else {
        mattressStorage = mattressData; 
    }

    // if(mattressData === null){
    //     mattressData = [];
    // }

    // return mattressData;
}
getMattressData();
function addMattress(event) {
    event.preventDefault();
    // Get Values from form.
    let name = document.getElementById("productName").value;
    let companyName = document.getElementById("company").value;
    let brand = document.getElementById("price").value;
    let imageInput = document.getElementById("productimage").value;
    let productType = document.getElementById("mattress").value;
        // Step 2: Store the details
    let productDetails = {
        "itemName" : name,
        "itemCompany": companyName,
        "itemPrice": brand,
        "itemImage" : imageInput,
        "itemType" : productType
    }
    // Step 3: Whether already item is added in the same category
    let productExist = isProductAlreadyExist(productDetails);
    // Step 4: storing in local storage.
// let mattressStorage = getMattressData();  // []  or [{}, {}, {}]

    if (productExist == false) {
        mattressStorage.push(productDetails);
        let convertTo_string = JSON.stringify(mattressStorage);
        localStorage.setItem("mattress",convertTo_string);
    }
}
function isProductAlreadyExist(mattressDetails) {
    const mattressData = JSON.parse(localStorage.getItem("mattress"));
    let booleanValue = false;
    for (let i of mattressData) {
        if ((mattressDetails.itemName == i.itemName)&&(mattressDetails.itemCompany == i.itemCompany)&&(mattressDetails.itemPrice == i.itemPrice) && (mattressDetails.itemImage == i.itemImage) && (mattressDetails.itemType == i.itemType)) {
            booleanValue = true;
            document.getElementById("addingProcessResult").innerHTML = "The entered product is already added";
            break;
        }
    }
    return booleanValue;
}