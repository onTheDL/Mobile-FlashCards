import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'

export default function App() {
  return (
    <Provider store={createStore(reducer, middleware)} >
      <View style={styles.container}>
        {/* <DeckList /> */}
        <DeckList />
        <StatusBar style="auto" />
      </View>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
