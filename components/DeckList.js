import React, {Component} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { handleAddCard, handleInitialData } from '../actions'

import { getDecks, data } from '../utils/api'

import Deck from './Deck'



class DeckList extends Component {
  // componentDidMount() {
  //   const { dispatch } = this.props
  //   dispatch(handleInitialData())
  // }
  render() {
    console.log('data: ', data)
    return (
      <ScrollView style={styles.container}>
        {Object.keys(data).map(title => (
            <Deck key={title} deck={data[title]} />
          ))
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
})

export default connect()(DeckList)