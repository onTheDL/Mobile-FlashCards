import React, {Component} from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
 } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


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
    
    // add to DB

    // add deck title to store
  
    alert('Add Deck: title was submitted')

    this.props.navigation.navigate('Deck', {
      deckId: this.state.title,
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
              <Text style={styles.btnText}>Submit</Text>
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
    // paddingTop: Platform.OS === 'android' ? 25 : 0,
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


export default AddDeck