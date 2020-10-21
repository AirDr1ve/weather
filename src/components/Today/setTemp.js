export const setTemp = (weatherList) => {
    const listTemp = weatherList.map((weather) => weather.main.temp);
    const minTemp = Math.min(...listTemp);
    const maxTemp = Math.max(...listTemp);
    return {
        minTemp,
        maxTemp,
    }
}