import './styles.css';

let lastLocation;
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
