import React from 'react';
import './style.css';
import OtherInfo from '../OtherInfo/otherInfo';
import MainInfo from '../MainInfo/mainInfo';

export const WeatherToday = () => {


  const date = new Date().toLocaleString('ru', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
      });


    return (
        <section >
            <div className="header">
                <h2 >Минск </h2>
                <h3>{date}</h3>
            </div>
            
            <div className='weather-info'>
                <MainInfo />
                <OtherInfo />

            </div>
        </section>
    )
}

