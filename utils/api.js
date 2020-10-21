import {AsyncStorage} from 'react-native'

const data = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

//TO DO:
//getDecks(): return all of the decks along with their titles, questions, and answers
//getDeck():  take in a single id argument and return the deck associated with that id
//saveDeckTitle(): take in a single title argument and add it to the decks
//addCardToDeck(): take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title

//method to delete a deck (?)


const DECK_STORAGE_KEY = "mobileFlashcards:decks"

export function getData() {
  return data
}

export function getDecks() {
  try {
    
    const jsonResult = await AsyncStorage.getItem(DECK_STORAGE_KEY);

    jsonResult === null && AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))

    return JSON.parse(jsonResult)

  }
  catch(err) {
    console.log('Error in getDecks() in api.js: ', err)
  }
}

export function getDeck(deckId) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(res => JSON.parse(res))
    .then(res => res[deckId])
    .catch(err => console.log('Error in getDeck() in api.js: ', err))
}

export function saveDeckTitle(title) {
  try {
    AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: { 
      title: title, 
      questions: []
    },
  }))
  } 
  catch(err) {
    console.log('Error in saveDeckTitle() in api.js: ', err)
  }
}

export function deleteDeck(key) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(res => {
      const data = JSON.parse(res)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
    })
    .catch(err => console.log('Error in deleteDeck() in api.js: ', err))
}

export function addCardToDeck(deckId, card) {
  const deck = getDeck(deckId)
  const jsonCardMerge = JSON.stringify({
    [deckId]: {
      title: deckId,
      questions: [...deck.questions].concat(card)
    }
  })
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY, jsonCardMerge)
    .catch(err => console.log('Error in addCardToDeck() in api.js', err))
}