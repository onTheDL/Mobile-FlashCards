import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'
import { handleDeleteDeck } from '../actions'
import { clearLocalNotification,  setLocalNotification } from '../utils/helpers'


function Deck({ route, navigation, decks, dispatch }) {
  const { deckId } = route.params
  
  const { navigate } = navigation
  const questions = decks[deckId]   
    ? decks[deckId].questions 
    : []

  const handleAddCard = () => {
    navigate('AddCard', { deckId
    })
  }

  const handleStartQuiz = () => {
    if (questions.length === 0) {
      return navigate('ErrorPage')
    } else {

      clearLocalNotification()
        .then(setLocalNotification)

      return navigate('Quiz', { deckId })
    }
    
  }

  const onDeleteDeck = () => {

    // delete from db and store
    dispatch(handleDeleteDeck(deckId))
    // nav to DeckList
    navigate('DeckList')

    alert( `${deckId} has been deleted.`)

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
          style={[styles.btn, styles.quizBtn]}
          onPress={handleStartQuiz}
        >
          <Text style={{color: 'white'}}>Start Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.btn}
          onPress={handleAddCard} 
        >
          <Text style={{color: 'black'}}>Add Card</Text>
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
    padding: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
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