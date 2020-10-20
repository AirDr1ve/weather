import { setWeatherToday } from '../components/Today/setWeatherToday';
import { setTemp } from '../components/Today/setTemp';


const initialState = {
    list: [],
    weatherNow: null,
    listWeatherToday: [],
    minTempToday: 0,
    maxTempToday: 0,
}




export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_LIST':
            return {
                ...state,
                list: action.payload,
                weatherNow: action.payload[0],
                listWeatherToday: setWeatherToday(action.payload, action.payload[0]),
                minTempToday: setTemp(setWeatherToday(action.payload, action.payload[0])).minTemp,
                maxTempToday: setTemp(setWeatherToday(action.payload, action.payload[0])).maxTemp,
            }
        default:
            return state;
    }
}

