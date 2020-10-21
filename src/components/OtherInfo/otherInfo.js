import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { setPressure } from './conversion'
import { setProbabilityOfPrecipitation } from './setProbabilityOfPrecipitation';

export const OtherInfo = ({ weatherNow }) => {
    return (  
        <ul className="other-info">
            <li className="pressure"> Атмосферное давление: {setPressure(weatherNow.main.grnd_level)} мм.рт.ст </li>
            <li className="pop"> {setProbabilityOfPrecipitation(weatherNow.pop)}</li>
            <li className="humidity"> Относительная влажность: {weatherNow.main.humidity}%</li>
            <li className="wind"> Cкорость ветра: {(weatherNow.wind.speed).toFixed(1)}м/с</li>
        </ul>      
    )
}
const mapStateToProps = (state) => {
    return {
        weatherNow: state.weatherNow,
    }    
}
export default connect(mapStateToProps)(OtherInfo);