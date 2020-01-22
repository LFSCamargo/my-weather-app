import { takeLatest, call, put } from 'redux-saga/effects'
import weather, {
  GET_CURRENT_LOCATION_WEATHER_OK,
  GET_CURRENT_LOCATION_WEATHER_FAIL,
  GET_CURRENT_LOCATION_WEATHER,
} from '../../ducks/weather'
import { WeatherResponse } from 'src/redux/apiTSTypes/weatherGeoCode'

function* getWeather(action: any) {
  const { latitude, longitude } = action

  try {
    const req = yield call(fetch, `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=fa9820eef2fc7ad80477c794aa09da06`)

    const weatherRes: WeatherResponse = yield req.json()

    console.log('weatherREs', weatherRes);
    

    yield put({
      type: GET_CURRENT_LOCATION_WEATHER_OK,
      weather: {
        kind: weatherRes.weather[0].description,
        title: weatherRes.weather[0].main,
        temperatureInKelvin: weatherRes.main.temp,
        city: weatherRes.name,
        country: weatherRes.sys.country,
        windSpeed: weatherRes.wind.speed,
      },
    })
  } catch (error) {
    
    yield put({
      type: GET_CURRENT_LOCATION_WEATHER_FAIL,
      error: 'An Unexpected Error Occurred',
    })
  }
}

export default function* getCurrentWeatherSaga() {
  yield takeLatest(GET_CURRENT_LOCATION_WEATHER, getWeather)
}
