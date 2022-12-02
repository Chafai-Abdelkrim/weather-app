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
