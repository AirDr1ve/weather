import React from 'react';
import './mainInfo.css';
import { connect } from 'react-redux';



const MainInfo = ({ weatherNow, maxTempToday, minTempToday }) => {
    return (
        <div className="main-info">
            <ul>
                <li className="main-temp">Сейчас: {Math.round(weatherNow.main.temp)}°С</li>
                <li className="average-temp">Днём: {Math.round(minTempToday)} - {Math.round(maxTempToday)}°С</li>
            </ul>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        weatherNow: state.weatherNow,
        minTempToday: state.minTempToday,
        maxTempToday: state.maxTempToday,
    }
}

export default connect(mapStateToProps)(MainInfo);