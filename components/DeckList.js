import React, {Component} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Deck from './Deck'

// try adding FlatList


class DeckList extends Component {

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        {/* <Deck /> */}
        
          <Deck />
        
        
      </ScrollView>
    )
  }
}

export default DeckList