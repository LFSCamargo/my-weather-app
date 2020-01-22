import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Weather from '../pages/Weather'

export const Screens = {
  Weather: 'Weather',
}

export default createAppContainer(
  createStackNavigator(
    {
      [Screens.Weather]: Weather,
    },
    {
      headerMode: 'none',
    },
  ),
)
