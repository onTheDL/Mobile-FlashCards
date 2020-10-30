import React, {Component} from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
 } from 'react-native'
import { handleAddDeck, addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'
import { connect } from 'react-redux'

class AddDeck extends Component {
  state = {
    title: '',
  }
  handleTextChange = (title) => {
    this.setState(() => ({
      title,
    }))
  }

  handleSubmit = (e) => {
    const { title } = this.state
    const { dispatch } = this.props
    
    dispatch(handleAddDeck(title))

    alert(`${title} has been added. Begin by adding your first card to this deck.`)

    this.props.navigation.navigate('Deck', {
      deckId: title,
    })
    
    this.setState({
    title: '',
    })
    
  }

  render() {
    const { title } = this.state
    return (
      <KeyboardAvoidingView behavior='padding' style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={{fontSize: 18}}>Enter the name of your new deck</Text>

          <TextInput
            value={title} 
            onChangeText={this.handleTextChange}
            placeholder='Deck name' 
            style={styles.input} 
            enablesReturnKeyAutomatically={true}
          />

          {title !== '' &&
            <TouchableOpacity
              onPress={this.handleSubmit}
              style={styles.button}
            >
              <Text style={styles.btnText}>Create Deck</Text>
            </TouchableOpacity> 
          }
        </View>
       </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    height: 45,
    padding: 8,
    margin: 25,
  },
  button: {
    width: 130,
    height: 40,
    borderRadius: 16,
    backgroundColor:'#438ae8',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
  }
})


export default connect()(AddDeck)