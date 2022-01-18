let str = "";
const currentURL = window.location.search;
const urlParams = new URLSearchParams(currentURL);
const chairName = urlParams.get("name");
let getDetails = JSON.parse(localStorage.getItem("productDetails"));
function updateDetails() {
    for (let i of getDetails) {
        let indexNumber = i.itemName;
        if (indexNumber == chairName) {
            str += "<div class=\"barchair__div\"><img src='"+ i.image+"' alt='mobelbarchair' height='400px;'><div><button type='submit' class='cartbutton' onclick='addCart(event)'>ADD TO CART</button><button type='submit' class='buybutton'>BUY NOW</button></div></div><div class='barchair__info'><h1 id='chairName'>"+ i.itemName+"</h1><h3>&#x20b9;"+i.itemPrice+"</h3><table class='barchair__table'><caption></caption><tr><th scope='col'>Usage/Applications</th><td>"+ i.itemApplications +"</td></tr><tr><th scope='col'>Brand</th><td>"+ i.itemCompany+"</td></tr><tr><th scope='col'>Color</th><td>"+ i.itemColor +"</td></tr><tr><th scope='col'>Appearance</th><td>"+ i.itemappearance+"</td></tr></table></div><div class='specifications'><h1 style='text-align: center'>Specifications</h1><table class='specifications_table'><caption></caption><tr><td><h2>General</h2></td></tr><tr><th scope='col'>Model Number</th><td>"+ i.productNumber+"</td></tr><th scope='col'>Footrest Included</th><td>"+ i.footrestIncluded+"</td><tr><th scope='col'>Armrest Included</th><td>"+ i.armrestIncluded +"</td></tr><tr><th scope='col'>Wheels Included</th><td>"+ i.wheelsIncluded +"</td></tr><tr><th scope='col'>Manufactured Place</th><td>India</td></tr><tr><th scope='col'>Care Instructions</th><td>"+i.careInstructions+"</td></tr><tr><th scope='col'>Warranty</th><td>"+i.itemWarranty+" replacement warranty</td></tr></table></div><div>";
            break;
        }
    }
    return str;
}
let callingUpdateDetails = updateDetails();
console.log(callingUpdateDetails);
document.getElementById("barChairDetails").innerHTML = callingUpdateDetails;