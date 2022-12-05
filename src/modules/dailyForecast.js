import dayjs from 'dayjs';
import Weather from './weather';

class DailyWeather extends Weather {
    constructor(data) {
        super(data);
        this.day = dayjs.unix(data.dt).format('dddd');
        this.minTemperature = data.temp.min.toFixed(0);
        this.maxTemperature = data.temp.max.toFixed(0);
    }
}

export default DailyWeather;
