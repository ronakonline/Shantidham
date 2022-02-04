/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import TrackPlayer from 'react-native-track-player';
// import PushNotification from 'react-native-push-notification';
// import messaging from '@react-native-firebase/messaging';

// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Message handled in the background!', remoteMessage);
// });

// PushNotification.configure({
//   onRegister: function (token) {
//     console.log('TOKEN:', token);
//   },
//   onNotification: function (notification) {
//     console.log('NOTIFICATION:', notification);
//   },
//   permissions: {
//     alert: true,
//     badge: true,
//     sound: true,
//   },
//   popInitialNotification: true,
//   requestPermissions: true,
// });

// PushNotification.subscribeToTopic('all');

AppRegistry.registerComponent(appName, () => App);
//TrackPlayer.registerPlaybackService(() => require('./screens/service.js'));
