import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';


export default class CountChoose extends React.Component {
    static navigationOptions = {
      title: 'How Many',
    };
    render() {
      const { navigate,moves } = this.props.navigation;
      const { params } = this.props.navigation.state;
      const number = [
          6,8,10,12,14,16,18,20
      ]
      return (
    <View style={styles.container}>
    {
        number.map(n =>
        <Button key = {n}
          title = {n}
        />)
    }
    
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
  