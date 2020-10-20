 
import React from 'react';
// import './otherInfo.css';
import { connect } from 'react-redux';
import { setPressure } from './conversion'
import { setProbabilityOfPrecipitation } from './setProbabilityOfPrecipitation';


export const OtherInfo = ({ weatherNow }) => {
    return (
        <ul>
            <li> Атмосферное давление: {setPressure(weatherNow.main.grnd_level)} мм.рт.ст </li>
            <li> {setProbabilityOfPrecipitation(weatherNow.pop)}</li>
            <li> Относительная влажность: {weatherNow.main.humidity}%</li>
        </ul>
    )
}




const mapStateToProps = (state) => {
    return {
        weatherNow: state.weatherNow,
    }    
}

export default connect(mapStateToProps)(OtherInfo);