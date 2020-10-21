import AsyncStorage from '@react-native-community/async-storage'

export const data = {
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

const DECK_STORAGE_KEY = "flashcards:decks"


// get all decks
export async function getDecks() {
  return await AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(res => {
      console.log('res: ', res)
      if (res === null) {
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
      }
      return res === null ? data : JSON.parse(res)
    })
    .catch(err => console.log('Error in getDecks(): ', err))


  // try {
    
  //   const jsonResult = await AsyncStorage.getItem(DECK_STORAGE_KEY);

  //   if (jsonResult === null) {
  //     AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
  //   }

  //   return jsonResult === null ? data : JSON.parse(jsonResult)

  // }
  // catch(err) {
  //   console.error('Error in getDecks() in api.js: ', err)
  // }
}

// get single deck
export async function getDeck(deckId) {
  return await AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(res => JSON.parse(res))
    .then(res => res[deckId])
    .catch(err => console.log('Error in getDeck() in api.js: ', err))
}

export async function saveDeckTitle(title) {
  try {
    await AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
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

export async function deleteDeck(key) {
  await AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(res => {
      const data = JSON.parse(res)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
    })
    .catch(err => console.log('Error in deleteDeck() in api.js: ', err))
}

export async function addCardToDeck(deckId, card) {
  const deck = getDeck(deckId)
  const jsonCardMerge = JSON.stringify({
    [deckId]: {
      title: deckId,
      questions: [...deck.questions].concat(card)
    }
  })
   await AsyncStorage.mergeItem(
    DECK_STORAGE_KEY, jsonCardMerge)
    .catch(err => console.log('Error in addCardToDeck() in api.js: ', err))
}

export function setInitialData() {
  AsyncStorage.setItem(
    DECK_STORAGE_KEY, 
    JSON.stringify(data)
  )
    .catch(err => console.log('Error in setInitialData() in api.js: ', err))
}