let str = "";
const currentURL = window.location.search;
const urlParams = new URLSearchParams(currentURL);
const chairName = urlParams.get("name");
let getDetails = JSON.parse(localStorage.getItem("productDetails"));
function updateDetails() {
    for (i = 0; i<getDetails.length; i++) {
        let indexNumber = getDetails[i].itemName;
        if (indexNumber == chairName) {
            str += "<div class=\"barchair__div\"><img src='"+getDetails[i].image+"' alt='mobelbarchair' height='400px;'><div><button type='submit' class='cartbutton' onclick='addCart(event)'>ADD TO CART</button><button type='submit' class='buybutton'>BUY NOW</button></div></div><div class='barchair__info'><h1 id='chairName'>"+ getDetails[i].itemName+"</h1><h3>&#x20b9;"+getDetails[i].itemPrice+"</h3><table class='barchair__table'><caption></caption><tr><th scope='col'>Usage/Applications</th><td>"+getDetails[i].itemApplications +"</td></tr><tr><th scope='col'>Brand</th><td>"+getDetails[i].itemCompany+"</td></tr><tr><th scope='col'>Color</th><td>"+ getDetails[i].itemColor +"</td></tr><tr><th scope='col'>Appearance</th><td>"+ getDetails[i].itemappearance+"</td></tr></table></div><div class='specifications'><h1 style='text-align: center'>Specifications</h1><table class='specifications_table'><caption></caption><tr><td><h2>General</h2></td></tr><tr><th scope='col'>Model Number</th><td>"+getDetails[i].productNumber+"</td></tr><th scope='col'>Footrest Included</th><td>"+getDetails[i].footrestIncluded+"</td><tr><th scope='col'>Armrest Included</th><td>"+getDetails[i].armrestIncluded +"</td></tr><tr><th scope='col'>Wheels Included</th><td>"+ getDetails[i].wheelsIncluded +"</td></tr><tr><th scope='col'>Manufactured Place</th><td>India</td></tr><tr><th scope='col'>Care Instructions</th><td>"+getDetails[i].careInstructions+"</td></tr><tr><th scope='col'>Warranty</th><td>"+getDetails[i].itemWarranty+" replacement warranty</td></tr></table></div><div>";
            break;
        }
    }
    return str;
}
let callingUpdateDetails = updateDetails();
document.getElementById("barChairDetails").innerHTML = callingUpdateDetails;