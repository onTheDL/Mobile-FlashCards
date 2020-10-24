import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Constants from 'expo-constants'

import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'


function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


function App() {
  
  const Stack = createStackNavigator()

  return (
    <Provider store={createStore(reducer, middleware)} >
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen name='Deck List' component={DeckList} options={{ title: 'Mobile Flashcards' }}/>
            <Stack.Screen
              name='AddDeck' 
              component={AddDeck}
              options={{ title: 'Add a new deck'}}
              
            /> 
          </Stack.Navigator>
        </NavigationContainer>      
        
      </View>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App
