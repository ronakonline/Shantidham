import {
  VStack,
  Box,
  HStack,
  ArrowBackIcon,
  ScrollView,
  View,
  Image,
  Text,
  Wrap,
} from 'native-base';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

export default function About({navigation}) {
  return (
   
    <Wrap>
        <HStack style={styles.container}>
        <Image source={require('../images/god.jpg')} style={{ height:300, width:200 }} alt="abc" />
        <Text style={{fontSize:20, fontWeight:'bold', marginTop:10}}>
            God is the Creator of the universe.
        </Text>
        </HStack>
    </Wrap>
  
  
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container:{
    flex:1,
    flexWrap:'wrap',
  }
});
