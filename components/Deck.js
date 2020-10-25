import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function Deck({ route, navigation }) {
  const { deckId } = route.params

  

  return (
    <View style={styles.container}>
      <Text>{deckId}</Text>        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
})

export default Deck