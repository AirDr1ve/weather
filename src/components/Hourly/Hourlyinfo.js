import React from "react";
import { connect } from 'react-redux';


export const HourlyInfo = ({ weatherHourly, city }) => {
  return (
    <div>
        <div>{weatherHourly.dt}</div>
        <div>{city.id}</div>
        <div>{weatherHourly.main.temp}</div>
        <div>{weatherHourly.main.temp}</div>
    </div>
  )}

const mapStateToProps = (state) => {
    return {
        weatherHourly: state.weatherHourly,
        city: state.city
    }
}



export default connect(mapStateToProps)(HourlyInfo);