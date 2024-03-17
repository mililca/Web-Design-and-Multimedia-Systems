function checkFirstName() {
    let fName = document.forms["myForm"]["fname"].value;
    let regName = /^[A-Z].*/;
    if(fName == "" || !fName.match(regName)){
        alert("Please enter valid first name");
        return false;
    } else {
        return true;
    }
}

function checkLastName() {
    let lName = document.forms["myForm"]["lname"].value;
    let regName = /^[A-Z].*/;
    if(lName == "" || !lName.match(regName)){
        alert("Please enter valid last name");
        return false;
    } else {
        return true;
    }
}

function checkEmail() {
    let email = document.forms["myForm"]["email"].value;
    let regName = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(email == "" || !email.match(regName)){
        alert("Please enter valid email");
        return false;
    } else {
        return true;
    }
}

function checkPassword() {
    let password = document.forms["myForm"]["password"].value;
    if(password == "" || password.length < 8){
        alert("Please enter password");
        return false;
    } else {
        return true;
    }
}

function logIn() {
    if(checkFirstName() == true && checkLastName() == true && checkEmail() == true && checkPassword() == true){
        alert("Login Successful");
    }
}
