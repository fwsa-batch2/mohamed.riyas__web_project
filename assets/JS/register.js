user_details = [];
function whilePageLoad() {
    let getting_details = JSON.parse(localStorage.getItem("customer_details"));
    if (user_details != null) {
        user_details = getting_details;
    }
    else {
        user_details = "";
    }
}
function register() {
    event.preventDefault();
    let inputName = document.getElementById("name").value;
    let inputPhone = document.getElementById("phone_no").value;
    let inputEmail = document.getElementById("email").value;
    let inputPassword = document.getElementById("password").value;
    let inputCPassword = document.getElementById("confirmPassword").value;
    let PhoneNo_validation = phoneChecking(inputPhone);
    let emailValidation = check_email(inputEmail);
    if (PhoneNo_validation == true) {
        alert("try different Phone number");
        return;
    }
    else if (emailValidation ==  true) {
        alert("Email already registered");
        return;
    }
    else {
        if (inputPassword != inputCPassword) {
            alert("password not match");
        }
        else {
            let register_details = {
                "name" : inputName,
                "phoneNumber" : inputPhone,
                "emailId" : inputEmail,
                "password" : inputPassword,
                "confirmpassword" : inputCPassword
            }
            user_details.push(register_details);
            let arrayToString = JSON.stringify(user_details);
            localStorage.setItem("customer_details", arrayToString);
            window.location.href = 'login.html';
        }
    }
}
function phoneChecking(phone_number) {
    let No_exist = false;
    let lengthOfUserDetails = user_details.length;
    for (i = 0 ; i<lengthOfUserDetails; i++) {
        let indexNumber = user_details[i];
        let getting_phone_number = indexNumber.phoneNumber;
        if (phone_number == getting_phone_number) {
            No_exist = true;
            break;
        }
    }
    return No_exist;
}
function check_email(paramter1) {
    let email_exist = false;  
    let len = user_details.length;
    for (i = 0; i<len ;i++) {
        let indexOf = user_details[i];
        let getting_email = indexOf.emailId;
        if (paramter1 == getting_email) {
            email_exist = true;
            break;
        }
    }
    return email_exist;
}
whilePageLoad();