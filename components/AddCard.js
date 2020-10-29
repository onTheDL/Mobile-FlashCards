import React, {Component} from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView, 
} from 'react-native'
import { handleAddCard } from '../actions'
import { connect } from 'react-redux'

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  handleAddQuestion = (question) => {
    this.setState({ question })
  }

  handleAddAnswer = (answer) => {
    this.setState({ answer })
  }

  handleSubmit = () => {
    // const { question, answer } = this.state
    // const questionObj = { question, answer }

    // const { route, dispatch } = this.props
    // const { deckId } = route.params

    // // add to DB and to store
    // dispatch(handleAddCard(deckId, questionObj))

  }

  render() {
    const { deckId } = this.props.route.params
    const { question, answer} = this.state
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView>
          <TextInput
            value={question} 
            onChangeText={this.handleAddQuestion}
            placeholder='Add question' 
            style={styles.input} 
            enablesReturnKeyAutomatically={true}
          />

          <TextInput
            value={answer} 
            onChangeText={this.handleAddAnswer}
            placeholder='Add answer' 
            style={styles.input} 
            enablesReturnKeyAutomatically={true}
          />

        </KeyboardAvoidingView>

        <TouchableOpacity 
        style={styles.btn}
        onPress={this.handleSubmit} 
        >
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity> 


        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    height: 45,
    padding: 8,
    marginBottom: 25,
  },
  btn: {
    width: 160,
    height: 40,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor:'black',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
  },
})


export default connect()(AddCard)