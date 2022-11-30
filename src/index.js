import './styles.css';

let lastLocation;

function getCurrentPosition(options) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
}

const getWeather = async (location) => {
    showLoadingAnimation();
    try {
        const currentWeather = await getCurrentWeather(
            location,
            unitsToggle.className
        );
        displayCurrentWeather(currentWeather);
        const forecastWeather = await getForecastWeather(
            currentWeather,
            unitsToggle.className
        );
        displayForecastWeather(forecastWeather);
    } catch (err) {
        showError(err);
    }
};

const search = (e) => {
    e.preventDefault();
    const location = searchForm.text.value;
    if (location && location !== lastLocation) {
        getWeather(location);
    }
    lastLocation = location;
};

const toggleUnits = () => {
    const location = document.querySelector(
        '#current-weather-card .weather-location'
    )?.textContent;
    if (location !== '.') {
        getWeather(location);
    }
};

const getWeatherByCoords = async (coords) => {
    showLoadingAnimation();
    try {
        const [currentWeather, forecastWeather] = await Promise.all([
            getCurrentWeatherByCoords(coords, unitsToggle.className),
            getForecastWeather(coords, unitsToggle.className),
        ]);
        displayCurrentWeather(currentWeather);
        displayForecastWeather(forecastWeather);
    } catch (err) {
        showError(err);
    }
};

const getWeatherAtStart = async () => {
    const options = {
        timeout: 5000,
        maximumAge: 0,
    };
    showLoadingAnimation();
    try {
        const position = await getCurrentPosition(options);
        getWeatherByCoords(position.coords);
    } catch (err) {
        getWeather('Agadir');
    }
};

searchForm.addEventListener('submit', search);
unitsToggle.addEventListener('click', toggleUnits);

getWeatherAtStart();
