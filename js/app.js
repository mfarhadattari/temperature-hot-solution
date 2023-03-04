const loadWeather = (city) => {
    document.getElementById('no-data-alert').classList.add('d-none') ;
    document.getElementById('weather-status').classList.add('d-none')
    document.getElementById('loader').classList.remove('d-none') ;
  const apiKey = "948e90e7278c4eb08de82cc9a982bc62";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayWeather(data))
    .catch(error =>{
        document.getElementById('no-data-alert').classList.remove('d-none') ;
    document.getElementById('loader').classList.add('d-none') ;
    })
};

const setTextElementById = (elementId , text) => {
    document.getElementById(elementId).innerText = text ;
}

const displayWeather = (data) => {
    const temp = data.main.temp ;
    const weather = data.weather[0].main ;
    const city = data.name ;
    console.log()
    setTextElementById('temp' , temp) ;
    setTextElementById('weather' , weather) ;
    setTextElementById('city' , city) ;
    document.getElementById('loader').classList.add('d-none') ;
    document.getElementById('weather-status').classList.remove('d-none')

}

document.getElementById('search-btn').addEventListener('click', function(){
    console.log()
    const city = document.getElementById('search-field').value
    loadWeather(city) ;
})
