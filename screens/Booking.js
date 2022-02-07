import {
  View,
  Text,
  HStack,
  ArrowBackIcon,
  Button,
  Image
} from 'native-base';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

export default function Booking({navigation}) {
  return (
    <>
      {/* <HStack style={styles.header}>
        <TouchableOpacity
          style={{position: 'absolute'}}
          onPress={() => navigation.goBack()}>
          <ArrowBackIcon />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.text}>Booking</Text>
        </View>
      </HStack> */}
      <HStack style={styles.header}>
        <View style={styles.headerButtonView}>
          <TouchableOpacity onPress={() => { navigation.pop() }} >
            <Image source={require('../images/icons/back.png')} style={styles.headerButtonImage} />
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText}>Booking</Text>
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
    flexDirection: 'row',
    justifyContent: 'center',
  },
  heading: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0BCC0',
    backgroundColor: '#FDD8DD',
  },
  headerButtonView: {
    aspectRatio: 1, height: 30, alignSelf: 'center', position: 'absolute', left: 10  },
  headerButtonImage: {
    aspectRatio: 1, height: '100%', padding: 10
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
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
