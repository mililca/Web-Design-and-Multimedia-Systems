function departureOpen () {
    document.querySelector(".pop-up-departure-wrapper").style.display = "flex";
}

function departureClose () {
    document.querySelector(".pop-up-departure-wrapper").style.display = "none";
}

function arrivalOpen () {
    document.querySelector(".pop-up-arrival-wrapper").style.display = "flex";
}

function arrivalClose () {
    document.querySelector(".pop-up-arrival-wrapper").style.display = "none";
}

function chooseDeparture () {
    if(document.getElementById('origin').value == "Paris") {
        const origin = document.querySelector('.city-out-full');
        origin.innerText = 'Paris';
        const originCode = document.querySelector('.city-out-code');
        originCode.innerText = 'CDG';
   } else if(document.getElementById('origin').value == "Seoul") {
        const origin = document.querySelector('.city-out-full');
        origin.innerText = 'Seoul';
        const originCode = document.querySelector('.city-out-code');
        originCode.innerText = 'ICN';
   } else if(document.getElementById('origin').value == "Moscow") {
        const origin = document.querySelector('.city-out-full');
        origin.innerText = 'Moscow';
        const originCode = document.querySelector('.city-out-code');
        originCode.innerText = 'SVO';
    } else if(document.getElementById('origin').value == "Shanghai") {
        const origin = document.querySelector('.city-out-full');
        origin.innerText = 'Shanghai';
        const originCode = document.querySelector('.city-out-code');
        originCode.innerText = 'PVG';
   } else if(document.getElementById('origin').value == "Belgrade") {
        const origin = document.querySelector('.city-out-full');
        origin.innerText = 'Belgrade';
        const originCode = document.querySelector('.city-out-code');
        originCode.innerText = 'BEG';
    } else if(document.getElementById('origin').value == "Berlin") {
        const origin = document.querySelector('.city-out-full');
        origin.innerText = 'Berlin';
        const originCode = document.querySelector('.city-out-code');
        originCode.innerText = 'BER';
    } else if(document.getElementById('origin').value == "Tallinn") {
        const origin = document.querySelector('.city-out-full');
        origin.innerText = 'Tallinn';
        const originCode = document.querySelector('.city-out-code');
        originCode.innerText = 'TLL';
    } else if(document.getElementById('origin').value == "Istanbul") {
        const origin = document.querySelector('.city-out-full');
        origin.innerText = 'Istanbul';
        const originCode = document.querySelector('.city-out-code');
        originCode.innerText = 'IST';
    } 
}

function chooseArrival () {
    if(document.getElementById('arrival').value == "Paris") {
        const arrival = document.querySelector('.city-in-full');
        arrival.innerText = 'Paris';
        const arrivalCode = document.querySelector('.city-in-code');
        arrivalCode.innerText = 'CDG';
   } else if(document.getElementById('arrival').value == "Seoul") {
        const arrival = document.querySelector('.city-in-full');
        arrival.innerText = 'Seoul';
        const arrivalCode = document.querySelector('.city-in-code');
        arrivalCode.innerText = 'ICN';
   } else if(document.getElementById('arrival').value == "Moscow") {
        const arrival = document.querySelector('.city-in-full');
        arrival.innerText = 'Moscow';
        const arrivalCode = document.querySelector('.city-in-code');
        arrivalCode.innerText = 'SVO';
    } else if(document.getElementById('arrival').value == "Shanghai") {
        const arrival = document.querySelector('.city-in-full');
        arrival.innerText = 'Shanghai';
        const arrivalCode = document.querySelector('.city-in-code');
        arrivalCode.innerText = 'PVG';
   } else if(document.getElementById('arrival').value == "Belgrade") {
        const arrival = document.querySelector('.city-in-full');
        arrival.innerText = 'Belgrade';
        const arrivalCode = document.querySelector('.city-in-code');
        arrivalCode.innerText = 'BEG';
    } else if(document.getElementById('arrival').value == "Berlin") {
        const arrival = document.querySelector('.city-in-full');
        arrival.innerText = 'Berlin';
        const arrivalCode = document.querySelector('.city-in-code');
        arrivalCode.innerText = 'BER';
    } else if(document.getElementById('arrival').value == "Tallinn") {
        const arrival = document.querySelector('.city-in-full');
        arrival.innerText = 'Tallinn';
        const arrivalCode = document.querySelector('.city-in-code');
        arrivalCode.innerText = 'TLL';
    } else if(document.getElementById('arrival').value == "Istanbul") {
        const arrival = document.querySelector('.city-in-full');
        arrival.innerText = 'Istanbul';
        const arrivalCode = document.querySelector('.city-in-code');
        arrivalCode.innerText = 'IST';
    } 
}

function swap() {
    const origin = document.getElementById('origin').value;
    const arrival = document.getElementById('arrival').value;
    document.getElementById('arrival').value = origin;
    document.getElementById('origin').value = arrival;
}

function bookTicketDeparture() {
    let dDate = document.forms["myForm"]["departureDate"].value;
    if(dDate == ""){
        alert("Please choose departure date");
        return false;
    } else {
        return true;
    }
}

function bookTicketReturn() {
    let aDate = document.forms["myForm"]["returnDate"].value;
    if(aDate == ""){
        alert("Please choose return date");
        return false;
    } else {
        return true;
    }
}

function checkCity(){
    let out = document.getElementById("origin");
    let outValue = out.value;
    let arrival = document.getElementById("arrival");
    let arrivalValue = arrival.value;
    if(outValue==arrivalValue){
        alert("Origin and arrival cities can not be the same!");
        return false;
    } else {
        return true;
    }
}

function bookingTicket(){
    const departureCity = document.getElementById("origin");
    const arrivalCity = document.getElementById("arrival");
    const departureDate = document.forms["myForm"]["departureDate"].value;
    const returnDate = document.forms["myForm"]["returnDate"].value;
    const cabinClass = document.getElementById("cabin");
}

function dataValidation(){
    if(checkCity() == true && bookTicketDeparture() == true && bookTicketReturn() == true){
        const departureCity = document.getElementById("origin").value;
        const arrivalCity = document.getElementById("arrival").value;
        const departureDate = document.forms["myForm"]["departureDate"].value;
        const returnDate = document.forms["myForm"]["returnDate"].value;
        const cabinClass = document.getElementById("cabin").value;
        localStorage.setItem("departureCity", departureCity);
        localStorage.setItem("arrivalCity", arrivalCity);
        localStorage.setItem("departureDate", departureDate);
        localStorage.setItem("returnDate", returnDate);
        localStorage.setItem("cabinClass", cabinClass);
        hrefFunction();
    }
}

function hrefFunction(){
    window.location.href = "/pages/booking.html";
}