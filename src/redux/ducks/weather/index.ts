export const GET_CURRENT_LOCATION_WEATHER = 'weather/GET_CURRENT_LOCATION_WEATHER'
export const GET_CURRENT_LOCATION_WEATHER_OK = 'weather/GET_CURRENT_LOCATION_WEATHER_OK'
export const GET_CURRENT_LOCATION_WEATHER_FAIL = 'weather/GET_CURRENT_LOCATION_WEATHER_FAIL'

export interface WeatherState {
  loading: boolean
  error: string | null
  weather: {
    kind:
      | 'clear sky' // clearSky
      | 'few clouds' // sunnyCloudy
      | 'scattered clouds' // clouds
      | 'broken clouds' // clouds
      | 'shower rain' // clouds
      | 'rain' // showerRain
      | 'thunderstorm' // thunderStorm
      | 'snow' // snow
      | 'mist' // mist
    temperatureInKelvin: number
    city: string;
    title: string;
    country: string;
    windSpeed: number;
  } | null
}

const initialState = {
  loading: true,
  error: null,
  weather: null
} as WeatherState;

export const weatherActions = {
  getCurrentLocationWeather: (latitude: number, longitude: number) => {
    return {
      type: GET_CURRENT_LOCATION_WEATHER,
      latitude,
      longitude,
    }
  },
}

export default (state: WeatherState = initialState, action: any) => {
  switch (action.type) {
    case GET_CURRENT_LOCATION_WEATHER: {
      return {
        ...state,
        loading: true,
      } as WeatherState
    }

    case GET_CURRENT_LOCATION_WEATHER_FAIL: {
      const { error } = action;
      return {
        ...state,
        loading: false,
        error,
      } as WeatherState
    }

    case GET_CURRENT_LOCATION_WEATHER_OK: {
      const { weather } = action; 

      return {
        ...state,
        weather,
        loading: false,
      } as WeatherState
    }
      
    default:
      return state;
  }
}
