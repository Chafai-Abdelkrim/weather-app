class Weather {
    constructor(data) {
        const [weather] = data.weather;
        this.main = weather.main;
        this.description = weather.description;
        this.icon = weather.icon;
    }
}

export default Weather;
