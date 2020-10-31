import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import FlipCard from 'react-native-flip-card'
import { setLocalNotification, clearLocalNotification } from '../utils/helpers'

class Quiz extends Component {
  state = {
    question: '',
    answer: '',
    index: 0,
    numCorrect: 0,
    numWrong: 0,
    showResults: false,
  }

  handleCorrectAns = () => {   
    this.setState(prevState => ({
      ...prevState,
      index: prevState.index + 1,
      numCorrect: prevState.numCorrect + 1,
    }))
  }

  handleWrongAns = () => {
    this.setState(prevState => ({
        ...prevState,
        index: prevState.index + 1,
        numWrong: prevState.numWrong + 1,
    }))
  }

  navToResults = (correct, incorrect, total ) => {
    const { deckId } = this.props.route.params
    const { navigate } = this.props.navigation

    navigate('QuizResult', { 
      correct, 
      incorrect,
      total,
      deckId
    })

    this.setState({
      question: '',
      answer: '',
      index: 0,
      numCorrect: 0,
      numWrong: 0,
    })

    clearLocalNotification()
      .then(setLocalNotification)
        
  }

  render() {
    const { deckId } = this.props.route.params
    const { decks, navigation } = this.props
    const { navigate } = navigation
    const deck = decks[deckId]
    const { questions } = deck
    const { index, numCorrect, numWrong } = this.state

    if(!questions[index] || index === questions.length) {
      this.navToResults(numCorrect, numWrong, questions.length)
      return null;
    }

    const { question, answer } = questions[index]
    const totalQuestions = questions.length
    const counter = `[ ${index + 1} of ${totalQuestions} ]`

    return (
    <View style={{flex: 1}}> 
      <FlipCard 
        style={{flex: 1}}
        friction={8}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        
      >
        {/* Face Side */}
        <View style={styles.container}>

          <Text style={styles.counter}>QUESTION {counter} : </Text>

          <View>
            {/* <Text style={styles.heading}>QUESTION:</Text> */}
            <Text style={styles.text}>{question}</Text>
            <TouchableOpacity style={styles.fliptoAnswer}>
              <Text style={{color: 'white', textAlign: 'center'}}>See answer</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Back Side */}
        <View style={styles.container}>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <Text style={styles.heading}>ANSWER:</Text>
            <Text style={styles.text}>{answer}</Text>

            <View style={styles.subContainer}>
              <Text>Did you answer correctly?</Text>

                <View style={styles.btnContainer}>
                  <TouchableOpacity 
                    style={styles.btn}
                    onPress={this.handleCorrectAns}
                  >
                    <Text>Yes</Text>
                  </TouchableOpacity>
                                    
                  <TouchableOpacity 
                    style={styles.btn}
                    onPress={this.handleWrongAns}
                  >
                    <Text>No</Text>
                  </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.flipToQuestion}>
              <Text style={{color: 'white'}}>Question</Text>
            </TouchableOpacity>
          </View>
        </View>
      </FlipCard>

    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  heading: {
    marginBottom: 10,
  
  },
  text: {
    fontSize: 25,
    textAlign: 'center'
  },
  fliptoAnswer: {
    marginTop: 50,
    width: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 16,
    padding: 5,
    backgroundColor: '#438ae8',
  },
  counter: {
    height: 50,
    justifyContent: 'flex-start',
  },

  //back side
  subContainer: {
    marginTop: 80,
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 25,
    

  },
  btn: {
    width: 60,
    height: 30,
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  flipToQuestion: {
    marginTop: 50,
    width: 100,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 16,
    padding: 5,
    backgroundColor: '#438ae8'
  },
})

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Quiz)