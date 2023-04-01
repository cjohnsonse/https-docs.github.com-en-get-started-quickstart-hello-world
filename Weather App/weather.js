const apiKey = 'ca198c1b6bb4d71fad4f63cc157d5b7e';

function getWeather() {
    const city = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('error').textContent = '';
                displayWeather(data);
            } else {
                document.getElementById('error').textContent = 'Invalid city name';
            }
        })
        .catch(error => console.error(error));
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
            fetch(url)
                .then(response => response.json())
                .then(data => displayWeather(data))
                .catch(error => console.error(error));
        });
    } else {
        document.getElementById('error').textContent = 'Geolocation is not supported by your browser';
    }
}

function displayWeather(data) {
    document.getElementById('location').textContent = data.name;
    document.getElementById('temperature').textContent = `${data.main.temp}°C`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('feels-like').textContent = `Feels like ${data.main.feels_like}°C`;
}