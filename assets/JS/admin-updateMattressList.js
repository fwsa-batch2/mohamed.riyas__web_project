let kingMattress = [];
let queenMattress = [];
let singleMatress = [];
let superSingleMatress = [];
let beddingAccessories = [];
function whilepageLoad() {
    let kingMattressData  =  JSON.parse(localStorage.getItem("KingMattressStorage"));
    let queenMattressData = JSON.parse(localStorage.getItem("QueenMattressStorage"));
    let singleMatressData = JSON.parse(localStorage.getItem("singlemattressStorage"));
    let superSingleMatressData = JSON.parse(localStorage.getItem("superSingleMattressStorage"));
    let beddingAccessoriesData = JSON.parse(localStorage.getItem("beddingAccessoriesStorage"));
    if ((kingMattressData != null)||(queenMattressData != null)||(singleMatressData != null)||(superSingleMatressData != null)||(beddingAccessoriesData != null)) {
        kingMattress = kingMattressData;
        queenMattress = queenMattressData;
        singleMatress = singleMatressData;
        superSingleMatress = superSingleMatressData;
        beddingAccessories = beddingAccessoriesData;
    }
}
whilepageLoad();
function getdetails(event) {
    event.preventDefault();
    let name = document.getElementById("productName").value;
    let companyName = document.getElementById("company").value;
    let brand = document.getElementById("price").value;
    let imageInput = document.getElementById("productimage").value;
    let productType = document.getElementById("mattress").value;
    let productDetails = {
        "itemName" : name,
        "itemCompany": companyName,
        "itemPrice": brand,
        "itemImage" : imageInput,
        "itemType" : productType
    }
    switch(productType) {
        case "KingMattress":
            kingMattress.push(productDetails);
            let convertingString = JSON.stringify(kingMattress);
            localStorage.setItem("KingMattressStorage",convertingString);
            break;
        case "QueenMattress": 
            queenMattress.push(productDetails);
            let convertFromObject = JSON.stringify(queenMattress);
            localStorage.setItem("QueenMattressStorage",convertFromObject);
            break;
        case "singlemattress": 
            singleMatress.push(productDetails);
            let convertString = JSON.stringify(singleMatress);
            localStorage.setItem("singlemattressStorage",convertString);
            break;
        case "superSingleMattress":
            superSingleMatress.push(productDetails);
            let convertToString = JSON.stringify(superSingleMatress);
            localStorage.setItem("superSingleMattressStorage",convertToString);
            break;
        case "beddingAccessories":
            beddingAccessories.push(productDetails);
            let stringConvertion = JSON.stringify(beddingAccessories);
            localStorage.setItem("beddingAccessoriesStorage",stringConvertion);
            break;
    }
}