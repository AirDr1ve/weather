import { setWeatherToday } from '../components/Today/setWeatherToday';
import { setTemp } from '../components/Today/setTemp';
const initialState = {
    list: [],
    city: [],
    weatherNow: 0,
    weatherHourly: [],
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
                weatherHourly: action.payload[1],
                weatherNow: action.payload[0],
                listWeatherToday: setWeatherToday(action.payload, action.payload[0]),
                minTempToday: setTemp(setWeatherToday(action.payload, action.payload[0])).minTemp,
                maxTempToday: setTemp(setWeatherToday(action.payload, action.payload[0])).maxTemp,
            }
        case 'SAVE_CITY':
            return{
                ...state,
                city: action.payload
            }
        default:
            return state;
    }
}

