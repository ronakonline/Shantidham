import {
  Button,
  Center,
  Heading,
  Input,
  Stack,
  Image,
  Container,
  Box,
  Text,
  KeyboardAvoidingView,
  HStack,
} from 'native-base';
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  BackHandler,
  Alert,
  Platform
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { CommonActions } from '@react-navigation/native';

const Register = ({navigation}) => {
  const [name, setName] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const submitform = async () => {
    if (name == null || phone == null) {
      alert('Enter Details');
    } else {
      await fetch(
        'https://app.jinjimaharaj.com/api/register_user/' + name + '/' + phone,
      ).then(() => {
        const random = Math.floor(Math.random() * 100);
        AsyncStorage.setItem('userToken', random.toString());
        // navigation.navigate('Home');
        goToHomeScreen()
      });
    }
  };

  React.useEffect(() => {
    const backAction = () => {
      //check if its Home screen
      if (navigation.isFocused()) {
        Alert.alert('Shantidham', 'Are you sure to exit from Shantidham?', [
          {
            text: 'NO',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const goToHomeScreen = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: 'Home' },
        ]
      })
    );
  }

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}} edges={['top']}>
      <View
        style={{
          height: 60,
          widht: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <Text
          bold
          style={{
            fontSize: RFValue(26),
            fontFamily: 'Arial',
            color: '#640003',
            padding: 10,
          }}>
          SHANTIDHAM
        </Text>
      </View>
      <LinearGradient
        colors={['#FFFFFF', '#E4F6EA', '#D4F1DD']}
        style={styles.container}>

          <Stack space={4} alignItems="center">
            <Center>
              <Image
                source={require('../images/logo.png')}
                style={{width: 200, height: 200}}
                alt="logo"
              />
            </Center>
            <Center>
              <Heading style={styles.Loginheading} size="xl">
                Registration
              </Heading>
            </Center>
            <Input
              value={name}
              placeholder="Name"
              w="100%"
              size="lg"
              style={styles.Input}
              onChangeText={text => setName(text)}
            />
            <Input
              placeholder="Phone"
              w="100%"
              size="lg"
              keyboardType={'phone-pad'}
              style={styles.Input}
              value={phone}
              onChangeText={text => setPhone(text)}
            />
            <HStack space={6}>
              <View style={styles.LoginbtnContainer}>
                <Button
                  style={styles.Loginbtn}
                  onPress={() => {
                    submitform();
                  }}>
                  <Text style={styles.LoginbtnText}>Submit</Text>
                </Button>
              </View>
              <View style={styles.LoginbtnContainer}>
                <Button
                  style={styles.Loginbtn}
                  onPress={() => {
                    goToHomeScreen()
                  }}>
                  <Text style={styles.LoginbtnText}>Skip</Text>
                </Button>
              </View>
            </HStack>
          </Stack>
          { Platform.OS == 'ios' ? <KeyboardSpacer /> : <View/>}       
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
  Loginheading: {
    marginBottom: 20,
    color: '#640003',
  },
  Input: {
    borderColor: 'gray',
  },
  LoginbtnContainer: {
    width: 120,
    marginTop: 30,
  },
  Loginbtn: {
    borderRadius: 50,
    height: 50,
    backgroundColor: '#640003',
  },
  LoginbtnText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default Register;
