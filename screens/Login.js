import {Button, Center, Heading, Input, Stack} from 'native-base';
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Login = ({navigation}) => {
  return (
    <>
      <LinearGradient colors={['#FFFFFF','#E4F6EA', '#D4F1DD']} style={styles.container}>
        <Stack space={4} alignItems="center">
          <Center>
            <Heading style={styles.Loginheading} size="xl">
              Login
            </Heading>
          </Center>
          {/* <Input placeholder="Name" w="100%" size="lg" style={styles.Input} /> */}
          <Input placeholder="Phone" w="100%" size="lg" style={styles.Input} />
          <View style={styles.LoginbtnContainer}>
            <Button
              style={styles.Loginbtn}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.LoginbtnText}>Submit</Text>
            </Button>
          </View>
        </Stack>

        <TouchableOpacity
          style={styles.RegisterLinkContainer}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.RegisterText}>Register!!</Text>
        </TouchableOpacity>
      </LinearGradient>
    </>
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
    color: '#fff',
  },
  RegisterLinkContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    padding:0,
    marginLeft:30
  },
  RegisterText: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#640003',
  },
});

export default Login;
