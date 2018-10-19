import HomeScreen from './HomeScreen.js'
import RecordSelect from './RecordSelect.js'
import React from 'react';

import {
  createStackNavigator,StackNavigator
} from 'react-navigation';

const RootStack = createStackNavigator({
  Home: { screen: HomeScreen },
  AddRecord: { screen: RecordSelect },
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}