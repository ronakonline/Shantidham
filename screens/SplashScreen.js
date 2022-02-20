import React from 'react';
import {View,Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';

const SplashScreenMain = ({navigation}) => {
  React.useEffect(() => {
    AsyncStorage.getItem('userToken').then(value => {
      if (value) {
        // navigation.navigate('Home');
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              { name: 'Home' },
            ]
          })
        );
      } else {
        // this.props.navigation.navigate('Login');
        // navigation.navigate('Register');
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              { name: 'Register' },
            ]
          })
        );
      }
    });
  }, []);
  return (
    <View>
    </View>
  );
};

export default SplashScreenMain;