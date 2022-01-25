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
            const getBarChairData = JSON.parse(localStorage.getItem("bar chair_Storage"));
            for (let i of getBarChairData) {
                if (getProductName == i.itemName) {
                    const popularItems = {
                        "name" : i.itemName,
                        "image" : i.itemImage
                    }
                    popularProductArray.push(popularItems);
                    localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
                }
            }
            break;
        case "Designer Chair":
            const getDesignerChairData = JSON.parse(localStorage.getItem("Designer Chair Storage"));
            for (let i of getDesignerChairData) {
                if (getProductName == i.itemName) {
                    const popularItems = {
                        "name" : i.itemName,
                        "image" : i.itemImage
                    }
                    popularProductArray.push(popularItems);
                    localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
                }
            }
            break;
        case "Office Chair": 
            const getOfficeChairData = JSON.parse(localStorage.getItem("Office Chair Storage"));
            for (let i of getOfficeChairData) {
                if (getProductName == i.itemName) {
                    const popularItems = {
                        "name" : i.itemName,
                        "image" : i.itemImage
                    }
                    popularProductArray.push(popularItems);
                    localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
                }
            }
            break;
        case "3 Seater Sofa":
            const threeSeaterSofaData = JSON.parse(localStorage.getItem("threeSeaterSofaStorage"));
            for (let i of threeSeaterSofaData) {
                if (getProductName == i.itemName) {
                    const popularItems = {
                        "name" : i.itemName,
                        "image" : i.itemImage
                    }
                    popularProductArray.push(popularItems);
                    localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
                }
            }
            break;
        case "2 Seater Sofa":
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
            break;
        case "1 Seater Sofa":
            const singleSeaterSofaData = JSON.parse(localStorage.getItem("singleSeaterSofaStorage"));
            for (let i of singleSeaterSofaData) {
                if (getProductName == i.itemName) {
                    const popularItems = {
                        "name" : i.itemName,
                        "image" : i.itemImage
                    }
                    popularProductArray.push(popularItems);
                    localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
                }
            }
            break;
        case "L Shape Sofa": 
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
            break;
        case "King Mattress" :
            const getKingMattressData = JSON.parse(localStorage.getItem("KingMattressStorage"));
            for (let i of getKingMattressData) {
                if (getProductName == i.itemName) {
                    const popularItems = {
                        "name" : i.itemName,
                        "image" : i.itemImage
                    }
                    popularProductArray.push(popularItems);
                    localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
                }
            }
            break;
        case "Queen Mattress":
            const getQueenMattressData = JSON.parse(localStorage.getItem("QueenMattressStorage"));
            for (let i of getQueenMattressData) {
                if (getProductName == i.itemName) {
                    const popularItems = {
                        "name" : i.itemName,
                        "image" : i.itemImage
                    }
                    popularProductArray.push(popularItems);
                    localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
                }
            }
            break;
        case "Single Mattress":
            const getSingleMattressData = JSON.parse(localStorage.getItem("singlemattressStorage"));
            for (let i of getSingleMattressData) {
                if (getProductName == i.itemName) {
                    const popularItems = {
                        "name" : i.itemName,
                        "image" : i.itemImage
                    }
                    popularProductArray.push(popularItems);
                    localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
                }
            }
            break;
        case "Super Single Mattress":
            const getSuperSingleMattressData = JSON.parse(localStorage.getItem("superSingleMattressStorage"));
            for (let i of getSuperSingleMattressData) {
                if (getProductName == i.itemName) {
                    const popularItems = {
                        "name" : i.itemName,
                        "image" : i.itemImage
                    }
                    popularProductArray.push(popularItems);
                    localStorage.setItem("popularProducts",JSON.stringify(popularProductArray));
                }
            }
            break;
        case "Bedding Accessories":
            const getBeddingAccessoriesData = JSON.parse(localStorage.getItem("beddingAccessoriesStorage"));
            for (let i of getBeddingAccessoriesData) {
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
}