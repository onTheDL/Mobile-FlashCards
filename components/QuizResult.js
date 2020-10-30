import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class QuizResult extends Component {

  render() {
    const { correct, incorrect, total } = this.props.route.params

    return (
      <View>
        <Text>QuizResult: </Text>
        <Text>Correct: {correct}</Text>
        <Text>Incorrect: {incorrect} </Text>
        <Text>
          Percentage:  { 100 * (correct / total) }% 
        </Text>
        
      </View>
    )
  }
}

export default QuizResult