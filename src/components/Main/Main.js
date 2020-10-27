import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./style.css";
import { saveListAction } from "../../actions/actions";
import { WeatherToday } from '../Today/weatherToday';

const Main = ({ list, saveList }) => {
  useEffect(() => {
      saveList();
  }, [saveList])
  if (!list.length) {
      return (
          <h3>Waiting please...</h3>
      )
  }
  return (    
    <div className="main">
          <WeatherToday />
    </div>
  )
}
function mapDispatchToProps(dispatch) {
    return {
        saveList: () => {
            dispatch(saveListAction)
        }
    }
}
 const mapStateToProps = (state) => {
  return {
    list: state.list,
      city: state.city,
    weatherNow: state.weatherNow,
  };
 };
export default connect(mapStateToProps, mapDispatchToProps)(Main);

