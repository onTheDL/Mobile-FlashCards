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
              <Text>(Tap to see answer)</Text>
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
              <Text>(Back to the question)</Text>
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
    // marginBottom: 180,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    marginBottom: 10,
    // textAlign: 'center',
  },
  text: {
    fontSize: 25,
  },
  fliptoAnswer: {
    marginTop: 20,
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  counter: {
    height: 50,
    justifyContent: 'flex-start',
  },

  //back side
  subContainer: {
    marginTop: 65,
    // height: 80,
    // justifyContent: 'center',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
    

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
    marginTop: 70,
    // height: 200,
    // justifyContent: 'flex-end',
    alignItems: 'center'
  },

})

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Quiz)