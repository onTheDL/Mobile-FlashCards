import React, {Component} from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, } from 'react-native'
import { connect } from 'react-redux'
import { handleAddCard, handleInitialData } from '../actions/index'
import { getDecks, data } from '../utils/api'





const DeckSummary = ({title, navigation, decks}) => {
  const questions = decks[title].questions
  const { navigate } = navigation

  const handleSelect= () => {
    navigate('Deck', {
      deckId: title,
    })

  }

  return (
    <TouchableOpacity 
      style={styles.cards}
      onPress={handleSelect}
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

    const { decks, navigation, route } = this.props
    
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Choose Your Deck</Text>

        <ScrollView>
        
        {Object.keys(decks).map(title => (
          <View key={title} style={styles.cardsContainer}>
            <DeckSummary
             route={route}
             navigation={navigation}
             title={title}
             decks={decks}
             />
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
    marginTop: 25,
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
    marginBottom: 15,
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

function mapStateToProps(decks) {
return { decks }
}

export default connect(mapStateToProps)(DeckList)