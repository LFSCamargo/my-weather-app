import * as React from 'react'
import { ScrollView, ActivityIndicator, Alert } from 'react-native'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { actions, GlobalState } from '../redux/ducks'
import { getDescription, toCelsius, kindToIcon } from '../utils'
import Geolocation from '@react-native-community/geolocation'
import { WeatherState } from 'src/redux/ducks/weather'
import { Dispatch } from 'redux'

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`

const Centered = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`

const Image = styled.Image`
  width: 350px;
  height: 320px;
  margin-left: 30px;
`

const Title = styled.Text`
  font-size: 31px;
  font-weight: bold;
  color: black;
  margin: 30px;
`

const WeatherName = styled.Text`
  font-size: 40px;
  font-weight: 100;
  color: black;
  margin: 0px 30px;
`

const Temperature = styled.Text`
  font-size: 60px;
  color: black;
  margin: 10px 30px;
  font-weight: 200;
`

const WelcomeText = styled.Text`
  margin-top: 40px;
  font-size: 21px;
  color: grey;
  margin-left: 30px;
  margin-bottom: -30px;
`

const WeatherHelpfultext = styled.Text`
  font-size: 21px;
  font-weight: 300;
  color: black;
  margin: 5px 40px;
`

type Props = WeatherState & {
  getCurrentWeather: (lat: number, long: number) => void
}

const Weather: React.FunctionComponent<Props> = props => {
  const [error, setError] = React.useState<string | null>(null)
  
  React.useEffect(() => {
    Geolocation.watchPosition(info => {
      props.getCurrentWeather(info.coords.latitude, info.coords.longitude)
    }, () => {
      setError('You need to give permission to geolocation')
    })
  }, [])

  if (error) {
    return (
      <Centered>
        <Title>{error}</Title>
      </Centered>
    )
  }

  if (props.error) {
    return (
      <Centered>
        <Title>{props.error}</Title>
      </Centered>
    )
  }

  if (props.loading && !props.weather) {
    return (
      <Centered>
        <ActivityIndicator animating />
      </Centered>
    )
  }

  return (
    <Wrapper>
      <ScrollView>
        <WelcomeText>Hey here's your weather in</WelcomeText>
        <Title>
          {props.weather?.city}, {props.weather?.country}
        </Title>
        <Image source={kindToIcon(props.weather?.kind || '')} />
        <Temperature>{toCelsius(props.weather?.temperatureInKelvin || 0)} °C</Temperature>
        <WeatherName>{props.weather?.title}</WeatherName>
        <WeatherHelpfultext>
          {getDescription(props.weather?.kind || '')}
        </WeatherHelpfultext>
      </ScrollView>
    </Wrapper>
  )
}

export default connect(
  (state: GlobalState) => {
    return {
      ...state.weather,
    }
  },
  (dispatch: Dispatch) => {
    return {
      getCurrentWeather: (lat: number, long: number) =>
        dispatch(actions.weatherActions.getCurrentLocationWeather(lat, long)),
    }
  },
)(Weather)
