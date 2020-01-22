export const toCelsius = (kelvinValue: number) => {
  return (kelvinValue - 273.15).toFixed(0)
}

export const toFahrenheit = (kelvinValue: number) => {
  return ((kelvinValue - 273.15) * 9) / 5 + 32
}

export const kindToIcon = (
  kind: string
) => {
  switch (kind) {
    case 'clear sky':
      return require('./assets/clearSky.gif')
    case 'few clouds':
      return require('./assets/sunnyCloudy.gif')
    case 'scattered clouds':
      return require('./assets/clouds.gif')
    case 'shower rain':
      return require('./assets/showerRain.gif')
    case 'light rain':
      return require('./assets/showerRain.gif')
    case 'broken clouds':
      return require('./assets/clouds.gif')
    case 'thunderstorm':
      return require('./assets/thunderStorm.gif')
    case 'snow':
      return require('./assets/snow.gif')
    case 'mist':
      return require('./assets/mist.gif')
    default:
      return require('./assets/clearSky.gif')
  }
}

export const getDescription = (
  kind: string
) => {
  switch (kind) {
    case 'clear sky':
      return 'The perfect day to take a walk with your dog and be outside!' 
    case 'few clouds':
      return 'A good day to take a walk but take your umbrella with you has some clouds in the sky!'
    case 'scattered clouds':
      return "Hey my mom always said to me take your umbrella there's a chance of rain"
    case 'broken clouds':
      return "Hey my mom always said to me take your umbrella there's a chance of rain"
    case 'shower rain':
      return "Hey if you want to get out dont forget your umbrella my friend! It's raining outside!"
    case 'light rain':
      return "Hey if you want to get out dont forget your umbrella my friend! It's raining outside!"
    case 'thunderstorm':
      return "Hey If there is no shelter around you, stay away from trees... There's a lot of thunders coming from the sky"
    case 'snow':
      return "Hey take off the snow of your front door and also remember to put a jacket its freezing cold outside!"
    case 'mist':
      return "Hey take care if you are taking the wheel outside, the fog can hinder you while driving"
    default: 
      return "The perfect day to take a walk with your dog and be outside!"
  }
}
