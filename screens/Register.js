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
} from 'native-base';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({navigation}) => {
  const [name, setName] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const submitform = async () => {
    console.log('name', name);
    console.log('phone', phone);
    if (name == null || phone == null) {
      alert('Enter Details');
    } else {
      await fetch(
        'https://app.jinjimaharaj.com/api/register_user/' + name + '/' + phone,
      ).then(() => {
        const random = Math.floor(Math.random() * 100);
        AsyncStorage.setItem('user_id', random.toString());
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      });
    }
  };

  React.useEffect(() => {
    async function check_user() {
      const value = await AsyncStorage.getItem('user_id');
      if (value !== null) {
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      }
    }
    check_user();
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: 'red', flex: 1}}>
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
        <KeyboardAvoidingView>
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
              style={styles.Input}
              value={phone}
              onChangeText={text => setPhone(text)}
            />
            <View style={styles.LoginbtnContainer}>
              <Button
                style={styles.Loginbtn}
                onPress={() => {
                  submitform();
                }}>
                <Text style={styles.LoginbtnText}>Submit</Text>
              </Button>
            </View>
          </Stack>
        </KeyboardAvoidingView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Box
            style={{
              width: '100%',
              top: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              underline
              bold
              style={{
                fontSize: RFValue(17),
                fontFamily: 'Arial',
                color: '#000',
              }}>
              Skip
            </Text>
          </Box>
        </TouchableOpacity>
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
