import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Deck extends Component {

  render() {
    return (
      <View style={styles.container}>
        Deck        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    justifyContent: "center",
    borderRadius: 5,
  },
  
})

export default Deck