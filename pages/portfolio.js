function handleError(err) {
    console.log("OH NO!");
    console.log(err);
}

function populateSeoul() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=37.566&longitude=126.9784&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day&timezone=auto";
    const promise = fetch(url);
    promise
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let temperature = data.current.temperature_2m;
        document.getElementById("temperature").innerHTML = `${temperature}°`;
        let time = data.current.time;
        document.getElementById("time").innerHTML = `${time}`;
        let apparentTemp = data.current.apparent_temperature;
        document.getElementById("apparentTemperature").innerHTML = `${apparentTemp}`;
        let humidity = data.current.relative_humidity_2m;
        document.getElementById("humidity").innerHTML = `${humidity}%`;
        let timezone = data.timezone_abbreviation;
        document.getElementById("timezoneAbbreviation").innerHTML = `${timezone}`;
        console.log(data);
        console.log(data.current.time);
        console.log(data.current.temperature_2m);
        console.log(data.current.apparent_temperature);
        console.log(data.current.relative_humidity_2m);
        console.log(data.timezone_abbreviation);
      })
      .catch(handleError);
}

function displayWeather(){
    let choice = document.getElementById("destinations").value;
    if(choice == "Seoul"){
        populateSeoul();
    }
}