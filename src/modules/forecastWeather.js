import { apiEndpoint, apiKey } from './api';
import HourlyForecast from './hourlyForecast';
import DailyForecast from './dailyForecast';

class ForecastWeather {
    constructor({ hourly, daily }) {
        this.hourly = hourly
            .slice(1, 9)
            .map((hour) => new HourlyForecast(hour));
        this.daily = daily.map((day) => new DailyForecast(day));
    }
}

const getForecastWeather = async (
    { longitude, latitude },
    units = 'metric'
) => {
    const response = await fetch(
        `${apiEndpoint}onecall?lon=${longitude}&lat=${latitude}&units=${units}&exclude=current,minutely,alerts&appid=${apiKey}`
    );
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return new ForecastWeather(data);
};

export default getForecastWeather;
