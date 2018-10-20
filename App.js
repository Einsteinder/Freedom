import HomeScreen from './HomeScreen.js'
import CateSelect from './CateSelect.js'
import Moves from './Moves.js'
import React from 'react';

import {
  createStackNavigator,StackNavigator
} from 'react-navigation';

const RootStack = createStackNavigator({
  Home: { screen: HomeScreen },
  AddRecord: { screen: CateSelect },
  Moves:{ screen: Moves }
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}