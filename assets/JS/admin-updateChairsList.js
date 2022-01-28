let barChairStorage = [];
let officeChairStorage = [];
let designerChairStorage = [];

/**
 * This function return bar chair details
 */
function getBarChairData() {
    let barChairData = JSON.parse(localStorage.getItem("bar chair_Storage")); //BAR_CHAIRS
    
    if (barChairData == null) {
        localStorage.setItem("bar chair_Storage",JSON.stringify(barChairStorage));
         //data is null ?why you want to stringify and store
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
    //Step 1:Get Form Values
    let name = document.getElementById("productName").value;
    let companyName = document.getElementById("company").value;
    let brand = document.getElementById("price").value;
    let imageInput = document.getElementById("productimage").value;
    let productType = document.getElementById("chairs").value;

    // Step 2: @TODO: Validate form values

    // Step 3: @TODO:Whether already item name is added in the same category

    // Step 4: Store the details
    let productDetails = {
        "itemName" : name,
        "itemCompany": companyName,
        "itemPrice": brand,
        "itemImage" : imageInput,
        "itemType" : productType
    }
    
    //switch
    if (productType == "Bar Chair") {
        barChairStorage.push(productDetails);
        let convertTo_string = JSON.stringify(barChairStorage);
        localStorage.setItem("bar chair_Storage",convertTo_string);
    }
    else if (productType == "office Chair") {
        officeChairStorage.push(productDetails);
        let convertTo_string = JSON.stringify(officeChairStorage);
        localStorage.setItem("Office Chair Storage",convertTo_string);
    }
    else {
        designerChairStorage.push(productDetails);
        let convertTo_string = JSON.stringify(designerChairStorage);
        localStorage.setItem("Designer Chair Storage", convertTo_string);
    }
    
}

function searchChairsByProductType(productType){
    let chairs = JSON.parse(localStorage.getItem("CHAIRS")); //BAR_CHAIRS   
    if(chairs)return [];
    const filteredChairs = chairs.filter(obj=> obj.productType == productType);
    return filteredChairs;
}