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
