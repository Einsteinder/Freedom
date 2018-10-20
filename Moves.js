import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';


export default class Moves extends React.Component {
    static navigationOptions = {
      title: 'Moves',
    };
    render() {
      const { navigate,moves } = this.props.navigation;
      const { params } = this.props.navigation.state;

      return (
    <View style={styles.container}>
    {
        params.moves.map(move =>
        <Button key = {move}
          title = {move}
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
  