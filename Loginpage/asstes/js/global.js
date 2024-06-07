function checkPasswordMatch() {
    var Password1 = document.getElementById("Password1").value;
    var Password2 = document.getElementById("Password2").value;

    if (Password1 !== Password2) {
        document.getElementById("eror").innerHTML = "Passwords Doe's Not Match";
    } else {
        document.getElementById("eror").innerHTML = "";
    }
}