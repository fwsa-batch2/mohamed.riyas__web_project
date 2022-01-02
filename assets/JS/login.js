let user_details = [];
function onPageLoad() {
    let getting_Local_storage = localStorage.getItem("customer_details");
    let convert_To_original = JSON.parse(getting_Local_storage);
    user_details.push(convert_To_original);  
}
function login(event) {
    event.preventDefault();
    let inputEmail = document.getElementById("email").value;
    let inputPassword = document.getElementById("password").value;
    let login_details = {
        "email" : inputEmail
    }
    let ValidationProcess = loginValidation(inputEmail,inputPassword);
    console.log(ValidationProcess);
    if (ValidationProcess) {
        alert("Login details are inavlid");
    }
    else {
        updateuserdetails(login_details)
        window.location.href = "./../../index.html";
    }
}
function loginValidation(parameter1,parameter2) {
    let details_exist = false;  
    let len = user_details.length;
    for (let i = 0; i<len ;i++) {
        let indexOf = user_details[i];
        let numeric = indexOf.length;
        for (i=0; i<numeric; i++) {
            let getting_email = indexOf[i].emailId;
            let get_password = indexOf[i].password;
            if ((parameter1 == getting_email)&&(parameter2 == get_password)) {
                details_exist = true;
                break;
            }
        }
    }
    return details_exist;
}
function updateuserdetails(emailparam) {
    let convertToString = JSON.stringify(emailparam);
    localStorage.setItem("userlogin",convertToString);
}
onPageLoad();