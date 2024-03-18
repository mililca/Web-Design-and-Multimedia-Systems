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
        document.getElementById("apparentTemperature").innerHTML = `${apparentTemp}°`;
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

function populateParis() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&current=temperature_2m,relative_humidity_2m,apparent_temperature";
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
      document.getElementById("apparentTemperature").innerHTML = `${apparentTemp}°`;
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

function populateMoscow() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=55.7522&longitude=37.6156&current=temperature_2m,relative_humidity_2m,apparent_temperature";
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
      document.getElementById("apparentTemperature").innerHTML = `${apparentTemp}°`;
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

function populateBelgrade() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=44.804&longitude=20.4651&current=temperature_2m,relative_humidity_2m,apparent_temperature";
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
      document.getElementById("apparentTemperature").innerHTML = `${apparentTemp}°`;
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

function populateBerlin() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=52.5244&longitude=13.4105&current=temperature_2m,relative_humidity_2m,apparent_temperature";
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
      document.getElementById("apparentTemperature").innerHTML = `${apparentTemp}°`;
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

function populateShanghai() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=31.2222&longitude=121.4581&current=temperature_2m,relative_humidity_2m,apparent_temperature";
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
      document.getElementById("apparentTemperature").innerHTML = `${apparentTemp}°`;
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

function populateTallinn() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=59.437&longitude=24.7535&current=temperature_2m,relative_humidity_2m,apparent_temperature";
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
      document.getElementById("apparentTemperature").innerHTML = `${apparentTemp}°`;
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

function populateIstanbul() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=41.0138&longitude=28.9497&current=temperature_2m,relative_humidity_2m,apparent_temperature";
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
      document.getElementById("apparentTemperature").innerHTML = `${apparentTemp}°`;
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
    } else if(choice == "Paris"){
      populateParis();
    } else if(choice == "Moscow"){
      populateMoscow();
    } else if(choice == "Shanghai"){
      populateShanghai();
    } else if(choice == "Belgrade"){
      populateBelgrade();
    } else if(choice == "Berlin"){
      populateBerlin();
    } else if(choice == "Tallinn"){
      populateTallinn();
    } else if(choice == "Istanbul"){
      populateIstanbul();
    }
}