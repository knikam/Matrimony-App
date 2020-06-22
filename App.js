/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react'; 
import {Provider} from 'react-redux';
import AppNavigation from './src/navigations/appNavigation/AppNavigation';
import store from "src/store/store"

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation></AppNavigation>
      </Provider>
    )
  }
}

export default App

