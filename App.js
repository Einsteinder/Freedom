import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

function SubmitBtn(name) {
  return (
    <TouchableOpacity
    style={styles.button}

    >
        <Text>{JSON.parse(JSON.stringify(name.name))}</Text>
    </TouchableOpacity>
  )
}

export default class App extends React.Component {
  render() {
    const button = {
      cat:'Add Category',
      rec:'Add Record',
      his:'History'
    }
    return (
      <View style={styles.container}>
      <SubmitBtn name={button.cat} />

      <SubmitBtn name={button.rec}/>

      <SubmitBtn name={button.his}/>

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
