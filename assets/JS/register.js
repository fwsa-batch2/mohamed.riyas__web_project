let array = [];
function onPageLoad() {
    const users = JSON.parse(localStorage.getItem("Riyas"));
    if (users) {
        array = users;
    }
}
function register() {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone_no").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let customer_details = {
        "Name": name,
        "Phone": phone,
        "Email": email,
        "Password": password
    }
    array.push(customer_details);
    let objectToArray = JSON.stringify(array);
    localStorage.setItem("Riyas", objectToArray);
}
onPageLoad();