import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function ErrorPage({ navigation }) {

  return (   
  <View style={styles.container}>
    <View style={styles.subContainer}>
      <Text style={styles.text}>🤦🏻 Oops ...this deck is empty! Tap back and add study cards to your deck.</Text>
    
      <TouchableOpacity 
        style={styles.btn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.btnText}>Back</Text>
      </TouchableOpacity>
    </View>
    

  </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004a88',
  },
  subContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  text: {
    fontSize: 18,
    letterSpacing: 0.2,
    textAlign: 'center',
    lineHeight: 30,
    color: 'white',
  },
  btn: {
    width: 120,
    height: 40,
    borderRadius: 16,
    backgroundColor:'#ea7e12',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22,
    marginTop: 50,
  },
  btnText: {
    fontSize: 16,
    color: 'white',
  },
})

export default ErrorPage