function checkPasswordMatch() {
    var password1 = document.getElementById("password1").value;
    var confpass = document.getElementById("confpass").value;

    if (password1 !== confpass) {
        document.getElementById("eror").innerHTML = "Passwords Doe's Not Match";
    } else {
        document.getElementById("eror").innerHTML = "";
    }
}

// Login - Sign Up
function changeButton() {
    var sw = document.getElementById('sw');
    var lw = document.getElementById('lw');

    if (sw.style.display === 'block') {
        sw.style.display = 'none';
        lw.style.display = 'block';
    } else {
        sw.style.display = 'block';
        lw.style.display = 'none';
    }
}

// Forget pass - Login
function test() {
    var lw = document.getElementById('lw');
    var FP = document.getElementById('FP');

    if (lw.style.display === 'block') {
        lw.style.display = 'none';
        FP.style.display = 'block';
    } else {
        lw.style.display = 'block';
        FP.style.display = 'none';
    }
}