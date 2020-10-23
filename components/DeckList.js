import React, {Component} from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, } from 'react-native'
import { connect } from 'react-redux'
import { handleAddCard, handleInitialData } from '../actions'
import { getDecks, data } from '../utils/api'



const DeckSummary = (props) => {
  const { title, questions } = props.deck
  return (
    <TouchableOpacity style={styles.cards}>
      <Text>{title}</Text>
      <Text>{questions.length} cards</Text>
    </TouchableOpacity>
  )
}

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
          <View key={title} style={styles.cardsContainer}>
            <DeckSummary deck={data[title]} />
          </View>  
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
    width: 350,
  },

  cardsContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    justifyContent: "center",
    borderRadius: 5,
  },
  cards: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30,
  },
})

export default connect()(DeckList)