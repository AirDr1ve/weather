export const setProbabilityOfPrecipitation = (pop) => {
    let result
    return result = (pop * 100 === 0) ? 'Осадков не ожидается' : "Вероятность осадков: " + pop * 100  + '%'    
    
}
