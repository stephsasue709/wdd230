const papId = '3718426';
const apiKey = "7a3b3ec934a9d384ce22e3ff36e56529";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${papId}&appid=${apiKey}&units=imperial`;

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${papId}&appid=${apiKey}&units=imperial`;

// Fetching the data from the api
fetch(apiUrl)
    .then((response) => response.json())
    .then((json) => {
        createHtml(json);
    })
    .catch(function (error) {
        console.log(error);
    });

function createHtml(response) {
    console.log(response);
    const currently_element = document.getElementById('currently');
    const currently = response.weather[0].description;
    currently_element.innerHTML = currently;

    const temp_element = document.getElementById('high');
    const temp = response.main.temp;
    temp_element.innerHTML = temp;

    const speed_element = document.getElementById('speed');
    const speed = response.wind.speed;
    speed_element.innerHTML = speed;

    const humidity_element = document.getElementById('humidity');
    const humidity = response.main.humidity;
    humidity_element.innerHTML = `${humidity}%`;

    const windChill_element = document.getElementById('windChill');
    const windChill = response.main.feels_like;
    windChill_element.innerHTML = windChill;
}



    const forecastapiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=83ffc56b941a18f3b18fad10caf6dd16';
fetch(forecastapiURL)
  .then(response => response.json())
  .then(jsObject => {
      console.log(jsObject);

      const noon= jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
      console.log(noon);

      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      let day = 0;
      noon.forEach(forecast => {
          let thedate = new Date(forecast.dt_txt);
          document.querySelector(`#day_${day + 1}`).textContent = weekdays[thedate.getDay()];
          document.querySelector(`#forecast${day + 1}`).textContent = forecast.main.temp.toFixed(0);
          day++;
      
    
      const imagesrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
      const desc = forecast.weather[0].description; 
      document.querySelector(`#icon${day}`).setAttribute('src', imagesrc);
      document.querySelector(`#icon${day}`).setAttribute('alt', desc);
    })
  })