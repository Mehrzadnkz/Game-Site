function checkPasswordMatch() {
    var Password1 = document.getElementById("Password1").value;
    var confpass = document.getElementById("confpass").value;

    if (Password1 !== confpass) {
        document.getElementById("eror").innerHTML = "Passwords Doe's Not Match";
    } else {
        document.getElementById("eror").innerHTML = "";
    }
}