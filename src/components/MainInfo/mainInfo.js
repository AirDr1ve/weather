import React from 'react';
import './style.css';
import { connect } from 'react-redux';



const MainInfo = ({ weatherNow, maxTempToday, minTempToday }) => {
    return (
        <div className="main-info">
            <ul className="main-temp-now">
                <li className="temp-now">Сейчас: {Math.round(weatherNow.main.temp)}°С</li>
            </ul>
            <div className="main-icon" style={{backgroundImage: `url('http://openweathermap.org/img/wn/${weatherNow.weather[0].icon}@2x.png')`}} ></div>
            <ul className="temp-today">
                <li className="temp-today-max">{Math.round(maxTempToday)}°</li>
                <li className="temp-today-min">{Math.round(minTempToday)}°</li>
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