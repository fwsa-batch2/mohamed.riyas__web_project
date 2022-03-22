let chair_Storage = [];
/**
 * This function return bar chair details
 */
function getChairsData() {
    let chairsData = JSON.parse(localStorage.getItem("Chairs"));
    if (chairsData == null) {
        localStorage.setItem("Chairs",JSON.stringify(chair_Storage));
    }
    else {
        chair_Storage = chairsData;
    }
}
getChairsData();
function addChairDetail(event) {
    event.preventDefault();
    //Step 1:Get Form Values.
    let name = document.getElementById("productName").value;
    let companyName = document.getElementById("company").value;
    let price = document.getElementById("price").value;
    let imageInput = document.getElementById("productimage").value;
    let productType = document.getElementById("chairs").value;
    
    // Step 2: Store the details
    let productDetails = {
        "itemName" : name,
        "itemCompany": companyName,
        "itemPrice": price,
        "itemImage" : imageInput,
        "itemType" : productType
    }
    // Step 3: Whether already item name is added in the same category
    let productExist = isProductAlreadyExist(productDetails);
    // storing in local storage
    if (productExist == false) {
        chair_Storage.push(productDetails);
        let convertTo_string = JSON.stringify(chair_Storage);
        localStorage.setItem("Chairs",convertTo_string);
    }
}
function isProductAlreadyExist(chairsDetails) {
    const chairsData = JSON.parse(localStorage.getItem("Chairs"));
    let booleanValue = false;
    for (let i of chairsData) {
        if ((chairsDetails.itemName == i.itemName)&&(chairsDetails.itemCompany == i.itemCompany)&&(chairsDetails.itemPrice == i.itemPrice) && (chairsDetails.itemImage == i.itemImage) && (chairsDetails.itemType == i.itemType)) {
            booleanValue = true;
            document.getElementById("addingProcessResult").innerHTML = "The entered product is already added";
            break;
        }
    }
    return booleanValue;
}