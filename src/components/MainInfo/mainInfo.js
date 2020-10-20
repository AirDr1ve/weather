import React from 'react';
import { connect } from 'react-redux';



const MainInfo = ({ weatherNow, maxTempToday, minTempToday }) => {
    return (
        <div >
            <ul>
                <li>{weatherNow.main.temp}°С</li>
                <li>{minTempToday}°С...{maxTempToday}°С</li>
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