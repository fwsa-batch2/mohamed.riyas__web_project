function isdetailsexist() {
    event.preventDefault();
    let inputEmail = document.getElementById("email").value;
    let inputPhone = document.getElementById("phone").value;
    let getDetails = localStorage.getItem("customer_details");    
    let convertTo_original = JSON.parse(getDetails);
    let  detailsValidation = Validation(inputEmail,inputPhone, convertTo_original);
    if (detailsValidation == true) {
        alert("Change your password now");
    }
    else {
        alert("details are inavlid");
    }
}
function Validation(param1,param2,param3) {
    let isexist = false;
    let len = param3.length;
    for (i=0;i<len;i++) {
        let gettingIndex = param3[i];
        let gettingemail = gettingIndex.emailId;
        let gettingpass = gettingIndex.phoneNumber;
        if ((gettingemail == param1)&&(gettingpass == param2)) {
            isexist = true;
            break;
        }
    }
    return isexist;
}
function Validatepassword() {
    event.preventDefault();
    let userpass = document.getElementById("password").value;
    let userConfirmPass = document.getElementById("confirmPassword").value;
    let resetpass = {
        "password" : userpass,
        "userConfrimPass" : userConfirmPass
    }
    if (userpass != userConfirmPass) {
        console.log("password not match");
        return;
    }
    else {
        
    }
}