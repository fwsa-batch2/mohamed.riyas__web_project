let threeSeaterSofa = [];
let twoSeaterSofa = [];
let singleSeaterSofa = [];
let lShapeSofa = [];
function getthreeSeaterSofaData() {
    let threeSeaterSofaData  =  JSON.parse(localStorage.getItem("threeSeaterSofaStorage"));
    if (threeSeaterSofaData == null) {
        localStorage.setItem("threeSeaterSofaStorage",JSON.stringify(threeSeaterSofa));
    }
    else {
        threeSeaterSofa = threeSeaterSofaData;
    }
}
getthreeSeaterSofaData();
function gettwoSeaterSofaData() {
    let twoSeaterSofaData  =  JSON.parse(localStorage.getItem("twoSeaterSofaStorage"));
    if (twoSeaterSofaData == null) {
        localStorage.setItem("twoSeaterSofaStorage",JSON.stringify(twoSeaterSofa));
    }
    else {
        twoSeaterSofa = twoSeaterSofaData;
    }
}
gettwoSeaterSofaData();
function getSingleSeaterSofa() {
    let singleSeaterSofaData = JSON.parse(localStorage.getItem("singleSeaterSofaStorage"));
    if (singleSeaterSofaData == null) {
        localStorage.setItem("singleSeaterSofaStorage",JSON.stringify(singleSeaterSofa));
    }
    else {
        singleSeaterSofa = singleSeaterSofaData;
    }
}
getSingleSeaterSofa();
function getLShapeSofaData() {
    let lShapeSofaData = JSON.parse(localStorage.getItem("LShapeSofaStorage"));
    if (lShapeSofaData == null) {
        localStorage.setItem("LShapeSofaStorage",JSON.stringify(lShapeSofa));
    }
    else {
        lShapeSofa = lShapeSofaData;
    }
}
getLShapeSofaData();
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