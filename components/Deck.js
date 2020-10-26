import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function Deck({ route, navigation }) {
  const { deckId } = route.params

  

  return (
    <View style={styles.container}>
      <View style={styles.textSubContainer}>
        <Text style={{fontSize: 28, letterSpacing: 1.1}}>
          {deckId}
        </Text> 
        <Text style={styles.subText}>x cards</Text> 
      </View>

      <View>
        <TouchableOpacity style={styles.btn}>
          <Text>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, styles.quizBtn]}>
          <Text style={{color: 'white'}}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
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

  textSubContainer: {
    marginTop: 100,
    alignItems: 'center',
  },

  subText: {
    fontSize: 14, 
    color: 'gray',
    marginTop: 5,
  },
 
  buttons: {
    // flex: 0.2,
    // justifyContent: 'flex-end',
    // height: 100,
  },
  btn: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderRadius: 16,
    //backgroundColor:'#438ae8',
    // color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  btnText: {
    fontSize: 16,
  },

  quizBtn: {
    backgroundColor: 'black',
  } 
  
})  

export default Deck