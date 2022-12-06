import { apiEndpoint, apiKey } from './api';
import Weather from './weather';

class CurrentWeather extends Weather {
    constructor(data) {
        super(data);
        const { coord, main, wind, clouds } = data;
        this.longitude = coord.lon;
        this.latitude = coord.lat;
        this.temperature = main.temp;
        this.humidity = main.humidity;
        this.windSpeed = wind.speed;
        this.cloudiness = clouds.all;
        this.name = data.name;
        this.country = data.sys.country;
    }
}

const getCurrentWeather = async (location, units = 'metric') => {
    const response = await fetch(
        `${apiEndpoint}weather?q=${location}&units=${units}&appid=${apiKey}`
    );
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();

    return new CurrentWeather(data);
};

const getCurrentWeatherByCoords = async (
    { longitude, latitude },
    units = 'metric'
) => {
    const response = await fetch(
        `${apiEndpoint}weather?lon=${longitude}&lat=${latitude}&units=${units}&appid=${apiKey}`
    );
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return new CurrentWeather(data);
};

export { getCurrentWeather, getCurrentWeatherByCoords };
