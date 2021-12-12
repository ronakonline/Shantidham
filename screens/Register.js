import {Button, Center, Heading, Input, Stack,Image} from 'native-base';
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Register = ({navigation}) => {
  return (
    <>
      <LinearGradient
        colors={['#FFFFFF', '#E4F6EA', '#D4F1DD']}
        style={styles.container}>
        <Stack space={4} alignItems="center">
          <Center>
            <Image source={require('../images/logo.png')} style={{ width:200, height:200 }} alt="logo" />
          </Center>
          <Center>
            <Heading style={styles.Loginheading} size="xl">
              Registration
            </Heading>
          </Center>
          <Input placeholder="Name" w="100%" size="lg" style={styles.Input} />
          <Input placeholder="Phone" w="100%" size="lg" style={styles.Input} />
          <View style={styles.LoginbtnContainer}>
            <Button style={styles.Loginbtn} onPress={()=>{navigation.navigate('Home')}}>
              <Text style={styles.LoginbtnText}>Submit</Text>
            </Button>
          </View>
        </Stack>
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
    color:'#640003'
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
  }

});

export default Register;
