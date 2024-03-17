window.onload = function(){
    var departureCity = localStorage.getItem('departureCity');
    document.getElementById("departure-city").innerHTML = `${departureCity}`;
    var arrivalCity = localStorage.getItem('arrivalCity');
    document.getElementById("arrival-city").innerHTML = `${arrivalCity}`;
    var departureDate = localStorage.getItem('departureDate');
    document.getElementById("departure-date").innerHTML = `${departureDate}`;
    var returnDate = localStorage.getItem('returnDate');
    document.getElementById("return-date").innerHTML = `${returnDate}`;
    var cabinClass = localStorage.getItem('cabinClass');
    document.getElementById("cabin-class").innerHTML = `${cabinClass}`;
}

function checkFirstName() {
    let fName = document.forms["myFormOne"]["fname"].value;
    let regName = /^[A-Z].*/;
    if(fName == "" || !fName.match(regName)){
        alert("Please enter valid first name");
        return false;
    } else {
        return true;
    }
}

function checkLastName() {
    let lName = document.forms["myFormOne"]["lname"].value;
    let regName = /^[A-Z].*/;
    if(lName == "" || !lName.match(regName)){
        alert("Please enter valid last name");
        return false;
    } else {
        return true;
    }
}

function checkEmail() {
    let email = document.forms["myFormTwo"]["email"].value;
    let regName = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(email == "" || !email.match(regName)){
        alert("Please enter valid email");
        return false;
    } else {
        return true;
    }
}

function checkPassport() {
    let passport = document.forms["myFormOne"]["passport"].value;
    if(passport == "" || passport.length < 8){
        alert("Please enter valid passport number");
        return false;
    } else {
        return true;
    }
}

function checkPhone() {
    let phone = document.forms["myFormTwo"]["phone"].value;
    let regName = /^\+.*/;
    if(phone == "" || !phone.match(regName) || phone.length < 8){
        alert("Please enter valid phone number");
        return false;
    } else {
        return true;
    }
}

function validateData(){
    if(checkFirstName() == true && checkLastName() == true && checkPassport() == true && checkPhone() == true && checkEmail() == true){
        alert("Login Successful");
    }
}