import { combineReducers } from "redux";

import weather, { weatherActions, WeatherState } from './weather';

export const actions = { weatherActions };

export interface GlobalState {
  weather: WeatherState,
}

export default combineReducers({
  weather,
});