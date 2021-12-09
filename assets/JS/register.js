let user_details = [];
function onPageLoad() {
    const getData = localStorage.getItem("Register details")
    const users = JSON.parse(getData);
    if (users != null) {
        user_details = users;
    }
}
function register() {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone_no").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    const phone_no = phoneChecking(phone)
    const emailValid = emailChecking(email);
    if (phone_no) {
        alert("phone Number already registered");
        return;
    }
    else if (emailValid) {
        alert(" email already registered");
        return;
    }
    else {
        const passwordValid = password_checking(password, confirmPassword);
        if (passwordValid) {
            let customer_details = {
                "Name": name,
                "Phone": phone,
                "Email": email,
                "Password": password,
                "cpassword": confirmPassword
            }
            user_details.push(customer_details);
            let objectToArray = JSON.stringify(user_details);
            localStorage.setItem("Register Details", objectToArray);
        }
        else {
            alert("password mismatch")
        }
    }
    window.location.href = "./../index.html"
}
function emailChecking(inputEmail) {
    let email_exist = false;
    let len = user_details.length;
    for (i = 0; i < len; i++) {
        let indexOf = user_details[i];
        let gettingEmail = indexOf.Email;
        if (inputEmail == gettingEmail) {
            email_exist = true;
            break;
        }
    }
    return email_exist;
}
function password_checking(password1, password2) {
    if (password1 != password2) {
        return false;
    }
    else {
        return true;
    }
}
function phoneChecking(inputphone) {
    let phoneNo_exist = false;
    let len = user_details.length;
    for (i = 0; i < len; i++) {
        let indexOf = user_details[i];
        let gettingphone = indexOf.Phone;
        if (inputphone == gettingphone) {
            phoneNo_exist = true;
            break;
        }
    }
    return phoneNo_exist;
}
onPageLoad();