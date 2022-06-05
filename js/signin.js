function signinacc() {
    var Mail = document.frmForm.txtEmail.value;
    var PassWord = document.frmForm.pdPass.value;
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
    //validate pass
    if (PassWord.length == 0) {
        document.getElementById("errPass").innerHTML = "You have not entered your password!";
        check = false;
    } else {
        document.getElementById("errPass").innerHTML = "";
    }
    //send data to server if data valid
    if (check) {
        alert("Logged in successfully!");
        return true;
    } else {
        return false;
    }
}