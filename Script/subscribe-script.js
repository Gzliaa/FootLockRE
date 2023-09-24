function validateEmail(emailForm) {
    var emailParts = emailForm.split("@");
    if (emailParts.length !== 2) {
        return false;
    }

    var username = emailParts[0];
    var domain = emailParts[1];
    if (username === "" || domain === "") {
        return false;
    }
    if (domain.indexOf(".") === -1) {
        return false;
    }
    return true;
}

function validatePhoneNumber(phoneForm) {
    var clear = phoneForm.replace(/-/g, '');
    if (clear.length !== 12) {
        return false;
    }

    for (var i = 0; i < clear.length; i++) {
        var digit = clear.charAt(i);
        if (digit < '0' || digit > '9') {
        return false;
        }
    }
    return true;
}

function showPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function validateForm() {
    var nameForm = document.getElementById("name").value;
    var emailForm = document.getElementById("email").value;
    var phoneForm = document.getElementById("phone").value;
    var countryForm = document.getElementById("country").value;
    var termsForm = document.getElementById("terms").checked;

    if (nameForm === "") {
        alert("Please enter your name");
        return false;
    }

    if (emailForm === "") {
        alert("Please enter your email");
        return false;
    }
    else if (!validateEmail(emailForm)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (phoneForm === "") {
        alert("Please enter your phone number");
        return false;
    }
    else if (!validatePhoneNumber(phoneForm)) {
        alert("Please enter a valid phone number");
        return false;
    }

    if (countryForm === "") {
        alert("Please select your country");
        return false;
    }

    if (!termsForm) {
        alert("Please agree to the terms and conditions");
        return false;
    }

    showPopup();
    console.log("Data User")
    console.log("===========================")
    console.log("Name: ", nameForm)
    console.log("Email Address: ", emailForm)
    console.log("Phone Number: ", phoneForm)
    console.log("Country: ", countryForm)

    return false;
}