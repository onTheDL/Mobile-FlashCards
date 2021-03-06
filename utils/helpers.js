import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'

const NOTIFICATION_KEY = 'flashcards:notifications'


export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
  return {
    title: "Review reminder",
    body: "👋 Don't forget to quiz yourself today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
  
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if(data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if(status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)
              
              Notifications.scheduleNotificationAsync({
                content: createNotification(),
                trigger: {
                  time: tomorrow,
                  repeats: true,
                }
              })
              
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
          .catch(e => console.error('Error in Permissions.askAsync(Permissions.NOTIFICATIONS) in helper.js', e))
      }
    })
    .catch(e => console.error('Error in setLocalNotification() in helper.js', e))
}