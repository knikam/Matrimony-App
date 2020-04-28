/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react'; 
import AppNavigation from './src/navigations/appNavigation/AppNavigation';

export class App extends Component {
  render() {
    return (
      <AppNavigation></AppNavigation>
    )
  }
}

export default App

