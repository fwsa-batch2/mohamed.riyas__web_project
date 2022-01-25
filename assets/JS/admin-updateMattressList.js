let kingMattress = [];
let queenMattress = [];
let singleMatress = [];
let superSingleMatress = [];
let beddingAccessories = [];
function getKingMattressData() {
    let kingMattressData  =  JSON.parse(localStorage.getItem("KingMattressStorage"));
    if (kingMattressData == null) {
        localStorage.setItem("KingMattressStorage",JSON.stringify(kingMattress));
    }
    else {
        kingMattress = kingMattressData;
    }
}
getKingMattressData();
function getQueenMattressData() {
    let queenMattressData = JSON.parse(localStorage.getItem("QueenMattressStorage"));
    if (queenMattressData == null) {
        localStorage.setItem("QueenMattressStorage",JSON.stringify(queenMattress));
    }
    else {
        queenMattress = queenMattressData;
    }
}
getQueenMattressData();
function getSingleMattressData() {
    let singleMatressData = JSON.parse(localStorage.getItem("singlemattressStorage"));
    if (singleMatressData == null) {
        localStorage.setItem("singlemattressStorage",JSON.stringify(singleMatress));
    }
    else {
        singleMatress = singleMatressData;
    }
}
getSingleMattressData();
function getSuperSingleMattressData() {
    let superSingleMatressData = JSON.parse(localStorage.getItem("superSingleMattressStorage"));
    if (superSingleMatressData == null) {
        localStorage.setItem("superSingleMattressStorage",JSON.stringify(superSingleMatress));
    }
    else {
        superSingleMatress = superSingleMatressData;
    }
}
getSuperSingleMattressData();
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
            window.location.href = "./../mattresspages/kingMattress.html";
            break;
        case "QueenMattress": 
            queenMattress.push(productDetails);
            let convertFromObject = JSON.stringify(queenMattress);
            localStorage.setItem("QueenMattressStorage",convertFromObject);
            window.location.href = "./../mattresspages/queenMattress.html";
            break;
        case "singlemattress": 
            singleMatress.push(productDetails);
            let convertString = JSON.stringify(singleMatress);
            localStorage.setItem("singlemattressStorage",convertString);
            window.location.href = "./../mattresspages/singleMattress.html";
            break;
        case "superSingleMattress":
            superSingleMatress.push(productDetails);
            let convertToString = JSON.stringify(superSingleMatress);
            localStorage.setItem("superSingleMattressStorage",convertToString);
            window.location.href = "./../mattresspages/superSingleMattress.html";
            break;
        case "beddingAccessories":
            beddingAccessories.push(productDetails);
            let stringConvertion = JSON.stringify(beddingAccessories);
            localStorage.setItem("beddingAccessoriesStorage",stringConvertion);
            window.location.href = "./../mattresspages/beddingAccessories.html";
            break;
    }
}