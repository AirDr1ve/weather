import {getWeather, parseData} from "../../parse";

export function setEveryDayWeather(list) {
    const today = new Date().getDay();
    return list.filter((item) => getWeather(item.dt_txt, today)).map(parseData);
}

export const get = ({ list }) => {
    return (
        <div className='temp-by-hour'>
            {list.map(({ date, temp, icon }) => {
                return <>
                    <div date={date} temp={temp} icon={icon} hour={0} />
                    <div date={date} temp={temp} icon={icon} hour={1} />
                    <div date={date} temp={temp} icon={icon} hour={2} />
                </>
            })}
        </div>
    );
};