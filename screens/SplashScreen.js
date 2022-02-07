import React from 'react';
import {View,Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreenMain = ({navigation}) => {
  React.useEffect(() => {
    AsyncStorage.getItem('userToken').then(value => {
      if (value) {
        navigation.navigate('Home');
      } else {
        // this.props.navigation.navigate('Login');
        navigation.navigate('Register');
      }
    });
  }, []);
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreenMain;