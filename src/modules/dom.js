import dayjs from 'dayjs';

const searchForm = document.querySelector('#search');
const unitsToggle = document.querySelector('#unit-toggle');

unitsToggle.className = localStorage.getItem('units') || 'metric';

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const createElement = (tag, attributes, ...children) => {
    const element = document.createElement(tag);
    Object.keys(attributes).forEach((attr) => {
        element.setAttribute(attr, attributes[attr]);
    });
    children.forEach((child) => {
        if (child) {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else {
                element.appendChild(child);
            }
        }
    });
    return element;
};

const createWeatherIcon = ({ icon, description }) => {
    const weatherIcon = createElement('img', {
        src: `https://openweathermap.org/img/wn/${icon}@4x.png`,
        alt: capitalize(description),
        title: capitalize(description),
    });

    return weatherIcon;
};

const createHourlyCard = (weather) => {
    const hour = createElement('div', { class: 'hour' }, weather.hour);
    const icon = createWeatherIcon(weather);
    const temp = createElement(
        'div',
        { class: 'temp' },
        `${weather.temperature}°`
    );
    const container = createElement('div', { class: 'container' }, icon, temp);
    const card = createElement('div', { class: 'card' }, hour, container);

    return card;
};

const createDailyCard = (weather) => {
    const day = createElement('div', { class: 'day' }, weather.day);
    const icon = createWeatherIcon(weather);
    const maxTemp = createElement(
        'div',
        { class: 'max-temp' },
        `${weather.maxTemperature}°`
    );
    const minTemp = createElement(
        'div',
        { class: 'min-temp' },
        `${weather.minTemperature}°`
    );
    const temp = createElement('div', { class: 'temp' }, maxTemp, minTemp);
    const container = createElement('div', { class: 'container' }, icon, temp);
    const card = createElement('div', { class: 'card' }, day, container);

    return card;
};

const getWeatherElements = () => {
    const currentWeather = document.querySelector('#current-weather-card');
    const locationName = currentWeather.querySelector('.weather-location');
    const icon = currentWeather.querySelector('.weather-icon');
    const description = currentWeather.querySelector('.weather-desc');
    const temperature = currentWeather.querySelector('.weather-temp');
    const humidity = currentWeather.querySelector('.humidity');
    const cloudiness = currentWeather.querySelector('.clouds');
    const windSpeed = currentWeather.querySelector('.wind');

    return {
        locationName,
        icon,
        description,
        temperature,
        humidity,
        cloudiness,
        windSpeed,
    };
};

const getDateInfoElements = () => {
    const currentWeather = document.querySelector('#current-weather-card');
    const day = currentWeather.querySelector('.weather-day');
    const date = currentWeather.querySelector('.weather-date');
    const time = currentWeather.querySelector('.weather-time');

    return { day, date, time };
};

const toggleUnits = () => {
    unitsToggle.classList.toggle('metric');
    unitsToggle.classList.toggle('imperial');
    localStorage.setItem('units', unitsToggle.className);
};

const clearCurrentWeather = () => {
    const weatherElements = getWeatherElements();
    Object.keys(weatherElements).forEach((element) => {
        weatherElements[element].textContent = '';
    });
};

const clearForecastWeather = () => {
    const forecastWeather = document.querySelector('#forecast-weather');
    const hourly = forecastWeather.querySelector('#hourly');
    const daily = forecastWeather.querySelector('#daily');
    hourly?.remove();
    daily?.remove();
};

const showError = (err) => {
    const currentWeather = document.querySelector('#current-weather-card');
    const error = document.querySelector('#error');
    const errorMessage = error.querySelector('#message');
    currentWeather.classList.add('hidden');
    error.classList.remove('hidden');
    errorMessage.textContent = err.message;
    unitsToggle.disabled = false;
};

const hideError = () => {
    const currentWeather = document.querySelector('#current-weather-card');
    const error = document.querySelector('#error');
    currentWeather.classList.remove('hidden');
    error.classList.add('hidden');
};

const showLoadingAnimation = () => {
    const currentWeather = document.querySelector('#current-weather-card');
    currentWeather.classList.add('loading');
    unitsToggle.disabled = true;
    hideError();
    clearCurrentWeather();
    clearForecastWeather();
};

const displayDateInfo = () => {
    const { day, date, time } = getDateInfoElements();

    day.textContent = dayjs().format('dddd');
    date.textContent = dayjs().format('ddd/MM/YYYY');
    time.textContent = dayjs().format('h:mm A');
};

const displayCurrentWeather = (weather) => {
    const currentWeather = document.querySelector('#current-weather-card');
    const {
        locationName,
        icon,
        description,
        temperature,
        humidity,
        cloudiness,
        windSpeed,
    } = getWeatherElements();

    currentWeather.classList.remove('loading');
    locationName.textContent = `${weather.name}, ${weather.country}`;
    icon.append(createWeatherIcon(weather));
    description.textContent = capitalize(weather.description);
    temperature.textContent = `${weather.temperature.toFixed(0)}°`;
    humidity.textContent = `${weather.humidity}%`;
    cloudiness.textContent = `${weather.cloudiness}%`;
    windSpeed.textContent = `${weather.windSpeed} ${
        unitsToggle.className === 'metric' ? 'm/s' : 'mph'
    }`;
};

const displayForecastWeather = (weather) => {
    const forecastWeather = document.querySelector('#forecast-weather');
    const hourly = createElement('div', { id: 'hourly' });
    const daily = createElement('div', { id: 'daily' });

    weather.hourly.forEach((hour) => {
        hourly.appendChild(createHourlyCard(hour));
    });
    weather.daily.forEach((day) => {
        daily.appendChild(createDailyCard(day));
    });
    const today = daily.firstElementChild.querySelector('.day');
    today.textContent = 'Today';
    today.classList.add('Today');
    forecastWeather.appendChild(hourly);
    forecastWeather.appendChild(daily);
    unitsToggle.disabled = false;
};

unitsToggle.addEventListener('click', toggleUnits);

export {
    searchForm,
    unitsToggle,
    showError,
    showLoadingAnimation,
    displayDateInfo,
    displayCurrentWeather,
    displayForecastWeather,
};
