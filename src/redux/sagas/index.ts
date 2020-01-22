import { spawn, all } from 'redux-saga/effects';
import { Saga } from 'redux-saga';
import getCurrentWeather from './weather/getCurrentWeather'

const sagas: Saga[] = [
  getCurrentWeather
];

function* rootSaga() {
  yield all(sagas.map(saga => spawn(saga)));
};

export default rootSaga;