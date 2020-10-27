import {
  getDecks,
  getDeck,
  saveDeckTitle,
  deleteDeck,
  addCardToDeck,
  setInitialData,
} from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const DELETE_DECK = 'DELETE_DECK'

function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function handleInitialData() {
  
  return dispatch => {
    return getDecks()
      .then(decks => {
        dispatch(receiveDecks(decks))
      })
  }
}

function addDeck(title) {
  return {
    type: ADD_DECK,
    title,
  }
}

export function handleAddDeck(title) {
  return dispatch => {
    return saveDeckTitle(title)
      .then(() => {
        dispatch(addDeck(title))
      })
      .catch(e => {
        console.warn('Error in handleAddDeck(): ', e)
        alert('There was an error adding your deck. Please try again.')
      })
  }
}

function deleteDeckAction(deckId) {
  return {
    type: DELETE_DECK,
    deckId,
  }
}

export function handleDeleteDeck(deckId) {
  return dispatch => {
    return deleteDeck(deckId)
      .then(() => dispatch(deleteDeckAction(deckId)))
  }
}

export function addCard(deckId, card) {
  return {
    type: ADD_CARD,
    deckId,
    card,
  }
}

export function handleAddCard(deckId, card) {
  return dispatch => {
    return addCardToDeck(deckId, card)
      .then((deckId, card) => {
        return dispatch(addCard(deckId, card))
      })
      .catch(e => {
        console.warn('Error in handleAddCard(): ', e)
        alert('There was an error adding your card. Please try again.')
      })
  }
}