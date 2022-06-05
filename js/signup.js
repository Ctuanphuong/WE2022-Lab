function createacc() {
    var Mail = document.frmForm.txtEmail.value;
    var name = document.frmForm.txtName.value;
    var passWord = document.frmForm.pdPass.value;
    var rePass = document.frmForm.rePass.value;
    var check = true;
    //validite email
    var reEmail = /^\w+@\w+\.\w{2,6}$/;
    if (Mail.length == 0) {
        document.getElementById("errEmail").innerHTML = "You haven't entered your email yet!";
        check = false;
    } else if (!Mail.match(reEmail)) {
        document.getElementById("errEmail").innerHTML = "Incorrect email format!";
        check = false;
    } else {
        document.getElementById("errEmail").innerHTML = "";
    }
    //validate name
    if (name.length == 0) {
        document.getElementById("errName").innerHTML = "You have not entered your full name!";
        check = false;
    } else {
        document.getElementById("errName").innerHTML = "";
    }

    //validate pass
    if (passWord.length == 0) {
        document.getElementById("errPass").innerHTML = "You have not entered your password!";
        check = false;
    } else if (passWord.length < 5) {
        document.getElementById("errPass").innerHTML = "Weak password, please choose another password!";
        check = false;
    } else {
        document.getElementById("errPass").innerHTML = "";
    }
    //validate re-pass 

    if (!rePass.match(passWord)) {
        document.getElementById("errRePass").innerHTML = "Passwords do not match!";
        check = false;
    } else if (rePass.length == 0) {
        document.getElementById("errRePass").innerHTML = "You have not entered a new password!";
        check = false;
    } else {
        document.getElementById("errRePass").innerHTML = "";
    }
    //send data to server if data valid
    if (check) {
        alert("You have successfully registered for an account!");
        return true;
    } else {
        return false;
    }
}