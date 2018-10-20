import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';


export default class HomeScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
      <Button
          title="Add Move"
        />
        <Button
          title="Add Record"
          onPress={() =>
            navigate('AddRecord')
          }
        />

        <Button
          title="History"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 30,
    borderRadius: 50    

  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
});


