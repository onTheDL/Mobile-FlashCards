import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

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

import { setLocalNotification } from './utils/helpers'



function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

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
      options={{ title: 'Empty Deck'}} 
    />
    <Stack.Screen 
      name='Quiz'
      component={Quiz}
    />
    <Stack.Screen 
      name='QuizResult'
      component={QuizResult} 
      
    />
    <Stack.Screen 
      name='AddDeck'
      component={AddDeck} 
    />
    
    
  </Stack.Navigator>
)

// Note: Possible breaking update in @react-navigation/material-top-tabs; importing api returns an error. Currently only designing tab nav for ios
const Tabs = createBottomTabNavigator()
const TabNav = () => (
  <Tabs.Navigator
    initialRouteName='DeckStack'
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let icon
        if (route.name === 'DeckStack') {
          icon = <AntDesign name="folder1" size={size} color={color} />
        } else if (route.name === 'AddDeck') {
          icon = <AntDesign name="addfolder" size={size} color={color} />
        }
        return icon
      }
    })}
    tabBarOptions={{
      showIcon: true,
      style: {
        height: 50,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
        paddingBottom: 5,
        paddingTop: 10,
      },
    }}
  >
    <Tabs.Screen 
      name='DeckStack'
      options={{ title: 'Decks Stack'}}
      component={DeckStack}
    />
    <Tabs.Screen
      name='AddDeck'
      component={AddDeck}
      options={{ title: 'New Deck'}} 
    />
  </Tabs.Navigator>
)

class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  
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
  },
});

export default App
