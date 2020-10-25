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
import Deck from './components/Deck'
import AddCard from './components/AddCard'
import ErrorPage from './components/ErrorPage'
import Quiz from './components/Quiz'
import QuizResult from './components/QuizResult'
import AddDeck from './components/AddDeck'



function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


// Note: Possible breaking update in @react-navigation/material-top-tabs; importing api returns an error. Currently only designing tab nav for ios


const Stack = createStackNavigator()

const DeckStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name='DeckList'
      component={DeckList} 
      options={{ title: 'Mobile Flashcards' }} 
    />
    <Stack.Screen 
      name='Deck'
      component={Deck} 
      
    />
    <Stack.Screen 
      name='AddCard'
      component={AddCard}  
    />
    <Stack.Screen 
      name='ErrorPage'
      component={ErrorPage} 
    />
    <Stack.Screen 
      name='Quiz'
      component={Quiz}
    />
    <Stack.Screen 
      name='QuizResult'
      component={QuizResult} 
      
    />
    
    
  </Stack.Navigator>
)
const Tabs = createBottomTabNavigator()
const TabNav = () => (
  <Tabs.Navigator
  initialRouteName='DeckStack'
  >
    <Tabs.Screen name='DeckStack'
      component={DeckStack}
      options={{ title: 'Deck Stacks'}}
    />
    <Tabs.Screen
      name='AddDeck'
      component={AddDeck}
      options={{ title: 'New Deck'}} 
    />
  </Tabs.Navigator>
)

class App extends React.Component {
  
  render() {
    return (
      <Provider store={createStore(reducer, middleware)} >
        <View style={styles.container}>
          <NavigationContainer>
            <AppStatusBar />
            <TabNav />
          </NavigationContainer>      
          
        </View>
      </Provider>
    )
  }

  
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
