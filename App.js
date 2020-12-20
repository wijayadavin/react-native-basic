import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { App } from './app/index';
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'


const Root = () => {
  return (
    <Provider store={store}>
      <StatusBar />
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider >
  )
}


export default Root