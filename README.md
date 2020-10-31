# Mobile Flashcards

## Overview

Mobile-FlashCards is the final project for Udacity's React Native course. This mobile, which will run both in Android and iOS, allows users to create flashcards (of different subjects) called "decks," add flashcards to those decks, then take quizzes on those decks.

This project encompasses the fundamental aspects of building a native application, including handling infinite lists, routing, and user input.

## Installation
```
git clone https://github.com/onTheDL/Mobile-FlashCards.git
cd Mobile-FlashCards
npm install
npx pod-install
```

## Usage

Start the development server with expo:
`$ expo start` 

Once the Expo Developer Tools open in the browser, you can either:

1. **Use your device to test**. Download the Expo Client app for your phone (Android or iOS). Open the Expo app then scan the QR Code shown on your cli terminal or Expo Dev Tools in the browser.

2. **Use an iOS Simulator and/or an Android Emulator to run the app**:
  - [iOS Simulator Setup](https://docs.expo.io/workflow/ios-simulator/)
  - [Android Studio Emulator Setup](https://docs.expo.io/workflow/android-studio-emulator/)

  - when prompted on the cli, choose either `a` to run on android emulator (if installed) and/or `i` to view on iOS simulator (if installed)

## Testing
This projected was tested on an android phone.

## Additional Sources
Used [react-native-flip-card](https://www.npmjs.com/package/react-native-flip-card) to animate transitioning from Quiz question to answer.