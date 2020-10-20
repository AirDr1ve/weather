 
import React from 'react';
// import './otherInfo.css';
import { connect } from 'react-redux';
import { setPressure } from './conversion'
import { setProbabilityOfPrecipitation } from './setProbabilityOfPrecipitation';


export const OtherInfo = ({ weatherNow }) => {
    return (
        <ul>
            <li> Давление: {setPressure(weatherNow.main.grnd_level)} мм.рт.ст </li>
            <li> Осадков: {setProbabilityOfPrecipitation(weatherNow.pop)}%</li>
            <li> Влажность: {weatherNow.main.humidity}%</li>
        </ul>
    )
}




const mapStateToProps = (state) => {
    return {
        weatherNow: state.weatherNow,
    }    
}

export default connect(mapStateToProps)(OtherInfo);