import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { setPressure } from './conversion'
import { setProbabilityOfPrecipitation } from './setProbabilityOfPrecipitation';

export const OtherInfo = ({ weatherNow, city }) => {
    const timeSunrise = new Date(city.sunrise * 1000).toLocaleString('ru', {
        hour: 'numeric',
        minute: 'numeric',
    });
    const timeSunset = new Date(city.sunset * 1000).toLocaleString('ru', {
        minute: 'numeric',
        hour: 'numeric',
    });

    return (  
        <ul className="other-info">
            <li className="pressure"> Атмосферное давление: {setPressure(weatherNow.main.grnd_level)} мм.рт.ст </li>
            <li className="pop"> {setProbabilityOfPrecipitation(weatherNow.pop)}</li>
            <li className="humidity"> Относительная влажность: {weatherNow.main.humidity}%</li>
            <li className="wind"> Cкорость ветра: {(weatherNow.wind.speed).toFixed(1)} м/с</li>
            <li className="sunrise"> Восход: {timeSunrise} </li>
            <li className="sunrise"> Закат: {timeSunset} </li>
        </ul>      
    )
}
const mapStateToProps = (state) => {
    return {
        weatherNow: state.weatherNow,
        city: state.city
    }    
}
export default connect(mapStateToProps)(OtherInfo);