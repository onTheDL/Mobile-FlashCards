import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity } from 'react-native'

class QuizResult extends Component {

  render() {
    const { correct, incorrect, total, deckId } = this.props.route.params
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.heading}>Quiz Results </Text>
          <Text style={styles.text}>Correct: {correct}</Text>
          <Text style={styles.text}>Incorrect: {incorrect} </Text>
          <Text style={styles.text}>
            Percentage: <Text style={styles.percentage}> { 100 * (correct / total) }% </Text>
              
          </Text>
        </View>
        <View style={styles.btnsContainer}>
          <TouchableOpacity 
            style={styles.btn}
            onPress={() => navigation.navigate('Quiz', { deckId })}
          >
            <Text style={styles.btnText}>Restart Quiz</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.btn, {backgroundColor: 'black'}]}
            onPress={() => navigation.navigate('Deck', { deckId })}
          >
            <Text style={[styles.btnText, {color: 'white'}]}>Back to Deck</Text>
          </TouchableOpacity>
           
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  subContainer: {
    flex: 0.3,
    justifyContent: 'space-evenly',
  },
  heading:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: { 
    fontSize: 16,
  },
  percentage: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  btnsContainer: {
    justifyContent: 'space-evenly',
  },
  btn: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22,
  },
  btnText: {
    fontSize: 16,
  },
})

export default QuizResult