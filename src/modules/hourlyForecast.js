import dayjs from 'dayjs';
import Weather from './weather';

class HourlyForecast extends Weather {
    constructor(data) {
        super(data);
        this.hour = dayjs.unix(data.dt).format('h A');
        this.temperature = data.temp.toFixed(0);
    }
}

export default HourlyForecast;
