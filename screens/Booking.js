import {
  View,
  Text,
  HStack,
  ArrowBackIcon,
  Button,
} from 'native-base';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

export default function Booking({navigation}) {
  return (
    <>
      <HStack style={styles.header}>
        <TouchableOpacity
          style={{position: 'absolute'}}
          onPress={() => navigation.goBack()}>
          <ArrowBackIcon />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.text}>Booking</Text>
        </View>
      </HStack>
      <View style={styles.container}>
        <Text style={styles.Title}>Coming Soon</Text>
        <Button style={styles.btn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnText}>Back</Text>
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height:55,
    alignItems: 'center',
    backgroundColor: '#cecefb',
    borderBottomWidth: 1,
    borderBottomColor: '#A8C4E5',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#cecefb',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingBottom:60
  },
  Title: {
    fontSize: 38,
    fontFamily: 'Arial',
    color: '#000000',
    padding: 20,
    marginBottom:60
  },
  btn: {
    backgroundColor: 'purple',
    width: 150,
    height: 50,
    borderColor:'#A8C4E5',
    borderWidth: 2,
    backgroundColor:'#9E9EF8',
  },
  btnText: {
    fontSize: 20,
    color: '#ffffff',
  },
});
