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
    <TouchableOpacity 
      style={styles.cards}
      
    >
      <Text style={{fontSize: 22}}>
        {title}
      </Text>
      <Text style={{fontSize: 14, color: 'gray'}}>
        {questions.length} 
        {questions.length === 1
          ? ' card'
          : ' cards'}
      </Text>
    </TouchableOpacity>
  )
}

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Choose Your Deck</Text>

        <ScrollView>
        
        {Object.keys(data).map(title => (
          <View key={title} style={styles.cardsContainer}>
            <DeckSummary deck={data[title]} />
          </View>  
          ))
        }
      </ScrollView>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  cardsContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    justifyContent: 'center',
    borderRadius: 5,
  },
  heading: {
    fontSize: 30,
    marginBottom: 20,
    alignSelf: 'center',
  },
  cards: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    width: 200,
    height: 60
  },
})

export default connect()(DeckList)