let popularProductArray = [];
function onPageLoad() {
    let popularProductData = JSON.parse(localStorage.getItem("popularProducts"));
    if (popularProductData == null) {
        localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
    }
    else {
        popularProductArray = popularProductData;
    }
}
onPageLoad();
function submithandler(event) {
    event.preventDefault();
    const getProductName = document.getElementById("popularProductName").value;
    const getProductcategory = document.getElementById("productCategory").value;
    switch (getProductcategory) {
        case "Bar Chair":
            barChair(getProductName);
            break;
        case "Designer Chair":
            designerChair(getProductName);
            break;
        case "Office Chair": 
            officeChair(getProductName);
            break;
        case "3 Seater Sofa":
            threeSeaterSofa(getProductName);
            break;
        case "2 Seater Sofa":
            twoSeaterSofa(getProductName);
            break;
        case "1 Seater Sofa":
            singleSeaterSofa(getProductName);
            break;
        case "L Shape Sofa": 
            lShapeSofa(getProductName);
            break;
        case "King Mattress" :
            kingMattress(getProductName);
            break;
        case "Queen Mattress":
            queenMattress(getProductName);
            break;
        case "Single Mattress":
            singleMattress(getProductName);
            break;
        case "Super Single Mattress":
            superSingleMattress(getProductName);
            break;
        case "Bedding Accessories":
            beddingAccessories(getProductName);
        
    } 
}
function barChair(param1) {
    const getBarChairData = JSON.parse(localStorage.getItem("bar chair_Storage"));
    for (let i of getBarChairData) {
        if (param1 == i.itemName) {
            const popularItems = {
                "name" : i.itemName,
                "image" : i.itemImage
            }
            popularProductArray.push(popularItems);
            localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
        }
    }
}
function designerChair(param1) {
    const getDesignerChairData = JSON.parse(localStorage.getItem("Designer Chair Storage"));
    for (let i of getDesignerChairData) {
        if (param1 == i.itemName) {
            const popularItems = {
                "name" : i.itemName,
                "image" : i.itemImage
            }
            popularProductArray.push(popularItems);
            localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
        }
    }
}
function officeChair(param1) {
    const getOfficeChairData = JSON.parse(localStorage.getItem("Office Chair Storage"));
    for (let i of getOfficeChairData) {
        if (param1 == i.itemName) {
            const popularItems = {
                "name" : i.itemName,
                "image" : i.itemImage
            }
            popularProductArray.push(popularItems);
            localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
        }
    }
}
function threeSeaterSofa(param1) {
    const threeSeaterSofaData = JSON.parse(localStorage.getItem("threeSeaterSofaStorage"));
    for (let i of threeSeaterSofaData) {
        if (param1 == i.itemName) {
            const popularItems = {
                "name" : i.itemName,
                "image" : i.itemImage
            }
            popularProductArray.push(popularItems);
            localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
        }
    }
}
function twoSeaterSofa(param1) {
    const twoSeaterSofaData = JSON.parse(localStorage.getItem("twoSeaterSofaStorage"));
    for (let i of twoSeaterSofaData) {
        if (getProductName == i.itemName) {
            const popularItems = {
                "name" : i.itemName,
                "image" : i.itemImage
            }
            popularProductArray.push(popularItems);
            localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
        }
    }
}
function singleSeaterSofa(param1) {
    const singleSeaterSofaData = JSON.parse(localStorage.getItem("singleSeaterSofaStorage"));
    for (let i of singleSeaterSofaData) {
        if (param1 == i.itemName) {
            const popularItems = {
                "name" : i.itemName,
                "image" : i.itemImage
            }
            popularProductArray.push(popularItems);
            localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
        }
    }
}
function lShapeSofa(param1) {
    const LShapeSofaData = JSON.parse(localStorage.getItem("LShapeSofaStorage"));
    for (let i of LShapeSofaData) {
        if (getProductName == i.itemName) {
            const popularItems = {
                "name" : i.itemName,
                "image" : i.itemImage
            }
            popularProductArray.push(popularItems);
            localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
        }
    }
}
function kingMattress(param1) {
    const getKingMattressData = JSON.parse(localStorage.getItem("KingMattressStorage"));
    for (let i of getKingMattressData) {
        if (param1 == i.itemName) {
            const popularItems = {
                "name" : i.itemName,
                "image" : i.itemImage
            }
            popularProductArray.push(popularItems);
            localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
        }
    }
}
function queenMattress(param1) {
    const getQueenMattressData = JSON.parse(localStorage.getItem("QueenMattressStorage"));
    for (let i of getQueenMattressData) {
        if (param1 == i.itemName) {
            const popularItems = {
                "name" : i.itemName,
                "image" : i.itemImage
            }
            popularProductArray.push(popularItems);
            localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
        }
    }
}
function singleMattress(param1) {
    const getSingleMattressData = JSON.parse(localStorage.getItem("singlemattressStorage"));
    for (let i of getSingleMattressData) {
        if (param1 == i.itemName) {
            const popularItems = {
                "name" : i.itemName,
                "image" : i.itemImage
            }
            popularProductArray.push(popularItems);
            localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
        }
    }
}
function superSingleMattress(param1) {
    const getSuperSingleMattressData = JSON.parse(localStorage.getItem("superSingleMattressStorage"));
    for (let i of getSuperSingleMattressData) {
        if (param1 == i.itemName) {
            const popularItems = {
                "name" : i.itemName,
                "image" : i.itemImage
            }
            popularProductArray.push(popularItems);
            localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
        }
    }
}
function beddingAccessories(param1) {
    const getBeddingAccessoriesData = JSON.parse(localStorage.getItem("beddingAccessoriesStorage"));
    for (let i of getBeddingAccessoriesData) {
        if (param1 == i.itemName) {
            const popularItems = {
                "name" : i.itemName,
                "image" : i.itemImage
            }
            popularProductArray.push(popularItems);
            localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
        }
    }
}