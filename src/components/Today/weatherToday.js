import React from 'react';
import OtherInfo from '../OtherInfo/otherInfo';
import MainInfo from '../MainInfo/mainInfo';

export const WeatherToday = () => {
    

    return (
        <header >
            <h2 >Минск</h2>
            <div>
                
                <MainInfo />
                <OtherInfo />
                
            </div>
        </header>
    )
}

export default WeatherToday()