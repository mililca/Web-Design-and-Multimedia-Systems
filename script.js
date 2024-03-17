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
    if(document.getElementById('origin').value == "paris") {
        const origin = document.querySelector('.city-out-full');
        origin.innerText = 'Paris';
        const originCode = document.querySelector('.city-out-code');
        originCode.innerText = 'CDG';
   } else if(document.getElementById('origin').value == "seoul") {
        const origin = document.querySelector('.city-out-full');
        origin.innerText = 'Seoul';
        const originCode = document.querySelector('.city-out-code');
        originCode.innerText = 'ICN';
   } else if(document.getElementById('origin').value == "moscow") {
        const origin = document.querySelector('.city-out-full');
        origin.innerText = 'Moscow';
        const originCode = document.querySelector('.city-out-code');
        originCode.innerText = 'SVO';
    } else if(document.getElementById('origin').value == "shanghai") {
        const origin = document.querySelector('.city-out-full');
        origin.innerText = 'Shanghai';
        const originCode = document.querySelector('.city-out-code');
        originCode.innerText = 'PVG';
   } else if(document.getElementById('origin').value == "belgrade") {
        const origin = document.querySelector('.city-out-full');
        origin.innerText = 'Belgrade';
        const originCode = document.querySelector('.city-out-code');
        originCode.innerText = 'BEG';
    } else if(document.getElementById('origin').value == "berlin") {
        const origin = document.querySelector('.city-out-full');
        origin.innerText = 'Berlin';
        const originCode = document.querySelector('.city-out-code');
        originCode.innerText = 'BER';
    } else if(document.getElementById('origin').value == "tallinn") {
        const origin = document.querySelector('.city-out-full');
        origin.innerText = 'Tallinn';
        const originCode = document.querySelector('.city-out-code');
        originCode.innerText = 'TLL';
    } else if(document.getElementById('origin').value == "istanbul") {
        const origin = document.querySelector('.city-out-full');
        origin.innerText = 'Istanbul';
        const originCode = document.querySelector('.city-out-code');
        originCode.innerText = 'IST';
    } 
}

function chooseArrival () {
    if(document.getElementById('arrival').value == "paris") {
        const arrival = document.querySelector('.city-in-full');
        arrival.innerText = 'Paris';
        const arrivalCode = document.querySelector('.city-in-code');
        arrivalCode.innerText = 'CDG';
   } else if(document.getElementById('arrival').value == "seoul") {
        const arrival = document.querySelector('.city-in-full');
        arrival.innerText = 'Seoul';
        const arrivalCode = document.querySelector('.city-in-code');
        arrivalCode.innerText = 'ICN';
   } else if(document.getElementById('arrival').value == "moscow") {
        const arrival = document.querySelector('.city-in-full');
        arrival.innerText = 'Moscow';
        const arrivalCode = document.querySelector('.city-in-code');
        arrivalCode.innerText = 'SVO';
    } else if(document.getElementById('arrival').value == "shanghai") {
        const arrival = document.querySelector('.city-in-full');
        arrival.innerText = 'Shanghai';
        const arrivalCode = document.querySelector('.city-in-code');
        arrivalCode.innerText = 'PVG';
   } else if(document.getElementById('arrival').value == "belgrade") {
        const arrival = document.querySelector('.city-in-full');
        arrival.innerText = 'Belgrade';
        const arrivalCode = document.querySelector('.city-in-code');
        arrivalCode.innerText = 'BEG';
    } else if(document.getElementById('arrival').value == "berlin") {
        const arrival = document.querySelector('.city-in-full');
        arrival.innerText = 'Berlin';
        const arrivalCode = document.querySelector('.city-in-code');
        arrivalCode.innerText = 'BER';
    } else if(document.getElementById('arrival').value == "tallinn") {
        const arrival = document.querySelector('.city-in-full');
        arrival.innerText = 'Tallinn';
        const arrivalCode = document.querySelector('.city-in-code');
        arrivalCode.innerText = 'TLL';
    } else if(document.getElementById('arrival').value == "istanbul") {
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
    const dDate = document.forms["myForm"]["departureDate"].value;
    if(dDate == ""){
        alert("Please choose departure date");
    }
}

function bookTicketReturn() {
    const dDate = document.forms["myForm"]["returnDate"].value;
    if(dDate == ""){
        alert("Please choose return date");
    }
}