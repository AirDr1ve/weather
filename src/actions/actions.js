export const saveListAction =  async (dispatch)  =>  {
    const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=Minsk&units=metric&appid=098d31524ed06d295f000b1488178b09');
    const data = await response.json();
    const list = data.list;
    const city = data.city;
    dispatch({type: 'SAVE_LIST', payload: list});
    dispatch({type: 'SAVE_CITY', payload: city});
};






