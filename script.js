const apiKey = 'a57090d47786b5a0f8119858d2ed0556';

function getWeather() {
    const city = document.getElementById('city').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const weather = document.getElementById('weather');
            const description = data.weather[0].description;
            const temp = (data.main.temp - 273.15).toFixed(2);
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const country = data.sys.country;

            weather.innerHTML = `
                <p>Weather: ${description}</p>
                <p>Temperature: ${temp} °C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
                <p>Country: ${country}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weather = document.getElementById('weather');
            weather.innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
        });
}
