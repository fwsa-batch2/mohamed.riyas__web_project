let threeSeaterSofa = [];
let twoSeaterSofa = [];
let singleSeaterSofa = [];
let lShapeSofa = [];
let sofaBed = [];
function whilepageLoad() {
    let threeSeaterSofaData  =  JSON.parse(localStorage.getItem("threeSeaterSofaStorage"));
    let twoSeaterSofaData = JSON.parse(localStorage.getItem("twoSeaterSofaStorage"));
    let singleSeaterSofaData = JSON.parse(localStorage.getItem("singleSeaterSofaStorage"));
    let lShapeSofaData = JSON.parse(localStorage.getItem("LShapeSofaStorage"));
    let sofaBedData = JSON.parse(localStorage.getItem("SofaBedStorage"));
    if ((threeSeaterSofaData != null)||(twoSeaterSofaData != null)||(singleSeaterSofaData != null)||(lShapeSofaData != null)||(sofaBedData != null)) {
        threeSeaterSofa = threeSeaterSofaData;
        twoSeaterSofa = twoSeaterSofaData;
        singleSeaterSofa = singleSeaterSofaData;
        lShapeSofa = lShapeSofaData;
        sofaBed = sofaBedData;
    }
}
whilepageLoad();
function getdetails(event) {
    event.preventDefault()
    let name = document.getElementById("productName").value;
    let companyName = document.getElementById("company").value;
    let brand = document.getElementById("price").value;
    let imageInput = document.getElementById("productimage").value;
    let productType = document.getElementById("sofa").value;
    let productDetails = {
        "itemName" : name,
        "itemCompany": companyName,
        "itemPrice": brand,
        "itemImage" : imageInput,
        "itemType" : productType
    }
    switch(productType) {
        case "2seaterSofa":
            twoSeaterSofa.push(productDetails);
            let convertingString = JSON.stringify(twoSeaterSofa);
            localStorage.setItem("twoSeaterSofaStorage",convertingString);
            break;
        case "singleSeaterSofa": 
            singleSeaterSofa.push(productDetails);
            let convertFromObject = JSON.stringify(singleSeaterSofa);
            localStorage.setItem("singleSeaterSofaStorage",convertFromObject);
            break;
        case "LShapeSofa": 
            lShapeSofa.push(productDetails);
            let convertString = JSON.stringify(lShapeSofa);
            localStorage.setItem("LShapeSofaStorage",convertString);
            break;
        case "3SeaterSofa":
            threeSeaterSofa.push(productDetails);
            let convertToString = JSON.stringify(threeSeaterSofa);
            localStorage.setItem("threeSeaterSofaStorage",convertToString);
    }
}