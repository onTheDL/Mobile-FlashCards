import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'

import { connect } from 'react-redux'
import { handleDeleteDeck } from '../actions'


function Deck({ route, navigation, decks, dispatch }) {
  const { deckId } = route.params
  // console.log('deckId: ', deckId)
  // console.log('decks: ', decks)
  // console.log('navigation: ', navigation)

  const { navigate } = navigation
  const questions = decks[deckId]   
    ? decks[deckId].questions 
    : ''

  const handleAddCard = () => {
    navigate('AddCard', { deckId
    })
  }

  const handleStartQuiz = () => {
    navigate('Quiz', { deckId })
  }

  const onDeleteDeck = () => {

    // delete from db and store
    dispatch(handleDeleteDeck(deckId))
    // nav to DeckList
    navigate('DeckList')

  
  }

  return (
    <View style={styles.container}>
      <View style={styles.textSubContainer}>
        <Text style={{fontSize: 28, letterSpacing: 1.1}}>
          {deckId}
        </Text> 
        <Text style={styles.subText}>
          {questions.length}
          {questions.length === 1
            ? ' card'
            : ' cards'
          }
        </Text> 
      </View>

      <View>
        <TouchableOpacity 
          style={styles.btn}
          onPress={handleAddCard} 
        >
          <Text>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.btn, styles.quizBtn]}
          onPress={handleStartQuiz}
        >
          <Text style={{color: 'white'}}>Start Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onDeleteDeck}
        >
          <Text style={styles.deleteText}>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  textSubContainer: {
    marginTop: 100,
    alignItems: 'center',
  },

  subText: {
    fontSize: 14, 
    color: 'gray',
    marginTop: 5,
  },
 
  buttons: {
    // flex: 0.2,
    // justifyContent: 'flex-end',
    // height: 100,
  },
  btn: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderRadius: 16,
    //backgroundColor:'#438ae8',
    // color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22,
  },
  btnText: {
    fontSize: 16,
  },

  quizBtn: {
    backgroundColor: 'black',
  },
  
  deleteText: {
    textAlign: 'center',
    color: '#7a0c0c',
    fontSize: 14,
  },
  
})  

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Deck)