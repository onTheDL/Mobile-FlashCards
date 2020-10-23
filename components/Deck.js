import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Deck extends Component {

  render() {
    const { title, questions } = this.props.deck
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.cards}>
          <Text>{title}</Text>
          <Text>{questions.length}</Text>
        </TouchableOpacity>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    justifyContent: "center",
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  cards: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30,
  },
})

export default Deck