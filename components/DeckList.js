import React, {Component} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { getDecks } from '../utils/api'

import Deck from './Deck'



class DeckList extends Component {

  render() {
    // const decks = getDecks()
    // console.log('decks: ', decks)
    return (
      <ScrollView style={{flex: 1}}>
        {/* {Object.keys(decks).map(deck => {
          return (
            <View>
              <Text>{deck}</Text>
            </View>
          )
        })} */}

        
        
      </ScrollView>
    )
  }
}

export default DeckList