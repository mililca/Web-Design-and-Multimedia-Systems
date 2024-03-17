function checkFirstName() {
    let name = document.forms["myForm"]["name"].value;
    let regName = /^[A-Z].*/;
    if(name == "" || !name.match(regName)){
        alert("Please enter valid name");
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

function validateData() {
    if(checkFirstName() == true && checkEmail() == true){
        let name = document.forms["myForm"]["name"].value;
        alert(`Thank you, ${name}. Our help desk will get to you shortly!`);
    }
}