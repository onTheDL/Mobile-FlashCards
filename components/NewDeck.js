import React, {Component} from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  TextInput,
  KeyboardAvoidingView } from 'react-native'

class NewDeck extends Component {
  state = {
    input: '',
  }
  handleTextChange = (input) => {
    this.setState(() => ({
      input,
    }))
  }

  render() {
    const { input, showInput } = this.state
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text>Enter the name of your new deck</Text>
        <TextInput onChangeText={this.handleTextChange} placeholder='Deck name' style={styles.input} />
        

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
    width: 300,
    height: 40,
    padding: 8,
    margin: 10,
  }
})


export default NewDeck