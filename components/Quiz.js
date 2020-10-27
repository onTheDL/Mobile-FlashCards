import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class Quiz extends Component {
  state = {
    question: '',
    answer: '',
    index: 0,
  }

  // componentDidMount() {
  //   const { route, decks } = this.props
  //   const { deckId } = route.params
  //   const deck = decks[deckId]
  //   const { index } = this.state.index
  //   const { question, answer } = deck.questions[index]

  //   this.setState({
  //     question,
  //     answer,
  //   })
  // }

  render() {
    const { deckId } = this.props.route.params
    const { decks } = this.props
    const deck = decks[deckId]
    const { title, questions} = deck
    const { index } = this.state
    const { question, answer } = questions[index]

    return (
      <View style={styles.container}>
        <Text>Q:  {question}</Text>
    <Text>A:  {answer}</Text>
      </View>
    )
  }
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

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Quiz)