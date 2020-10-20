import React from "react";

export const setProbabilityOfPrecipitation = (pop) => {
    let result = pop * 100;
    if(result === 0){
        result = 'Осадков не ожидается'
    }
    else result = "Вероятность Осадков: " + pop * 100  + '%';
    return result ;
}
