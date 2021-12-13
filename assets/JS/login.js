let user_details = [];
function onPageLoad() {
    let getting_Local_storage = localStorage.getItem("customer_details");
    let convert_To_original = JSON.parse(getting_Local_storage);
    user_details.push(convert_To_original);  
}
function login() {
    event.preventDefault();
    let inputEmail = document.getElementById("email").value;
    let inputPassword = document.getElementById("password").value;
    let emailValidation = emailchecking(inputEmail);
    let passwordValidation = passwordchecking(inputPassword);
    console.log(passwordValidation);
    if (emailValidation == false) {
        alert("Login details are invalid");
    }
}
function emailchecking(parameter1) {
    let email_exist = false;  
    let len = user_details.length;
    for (i = 0; i<len ;i++) {
        let indexOf = user_details[i];
        let numeric = indexOf.length;
        for (i=0; i<numeric; i++) {
            let getting_email = indexOf[i].emailId;
            if (parameter1 == getting_email) {
                email_exist = true;
                break;
            }
        }
    }
    return email_exist;
}
function passwordchecking(parameter1) {
    let password_exist = false;
    let len = user_details.length;
    for (i=0; i<len; i++) {
        let indexNumber = user_details[i];
        let lenOf_indexNumber = indexNumber.length;
        for (i=0;i<lenOf_indexNumber;i++) {
            let get_password = indexNumber[i].password;
            if (parameter1 == get_password) {
                password_exist = true;
                break;
            }
        }
    }
    return password_exist;
}
onPageLoad();