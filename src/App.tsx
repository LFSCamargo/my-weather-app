import * as React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigation from './navigation/Navigation';

export default () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}