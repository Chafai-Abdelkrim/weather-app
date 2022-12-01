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
    const description = currentWeather.querySelector('.weather-desc');
    const humidity = currentWeather.querySelector('.humidity');
    const cloudiness = currentWeather.querySelector('.clouds');
    const windSpeed = currentWeather.querySelector('.wind');

    return { locationName, description, humidity, cloudiness, windSpeed };
};

const toggleUnits = () => {
    this.classList.toggle('metric');
    this.classList.toggle('imperial');
    localStorage.setItem('units', this.className);
};

