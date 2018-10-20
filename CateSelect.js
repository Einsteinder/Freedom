import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';


export default class CateSelect extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const { navigate } = this.props.navigation;
      const moves = {
        chest:["Dumbbell Bench Press","Pushups","Dumbbell Flyes","Incline Dumbbell Press",
               "Dips - Chest Version","Barbell Bench Press"],
        back: ["Pullups","V-Bar Pulldown","Wide-Grip Lat Pulldown","Reverse Grip Bent-Over Rows",
               "T-Bar Row"]
      }
      return (
    <View style={styles.container}>
    <Button
          title="Chest"
          onPress={() =>
            navigate('Moves',{
              moves: moves.chest,
            })
          }
        />
        <Button
          title="Back"
          onPress={() =>
            navigate('Moves',{
              moves: moves.back,
            })
          }
        />
        <Button
          title="Shoulder"
        />
        <Button
          title="Leg"
        />
        <Button
          title="Ab"
        />
        <Button
          title="Bicep"
        />
        <Button
          title="Tricep"
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
  