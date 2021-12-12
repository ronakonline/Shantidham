import {
  VStack,
  Box,
  HStack,
  ArrowBackIcon,
  ScrollView,
  Button,
  View,
} from 'native-base';
import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function Gallery({navigation}) {
  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: '#c3eccf'}}>
        <View style={styles.container}>
          <HStack style={styles.header}>
            <TouchableOpacity
              style={{position: 'absolute'}}
              onPress={() => navigation.goBack()}>
              <ArrowBackIcon />
            </TouchableOpacity>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.text}>Gallery</Text>
            </View>
          </HStack>
          <HStack style={styles.body}>
            <Box style={styles.box}>
              <Image
                source={{uri: 'https://picsum.photos/200/300'}}
                  alt="text"
                style={{width: '100%', height: '100%'}}
              />
            </Box>
            <Box style={styles.box}>
              <Image
                source={{uri: 'https://picsum.photos/200/300'}}
                  alt="text"
                style={{width: '100%', height: '100%'}}
              />
            </Box>
            <Box style={styles.box}>
              <Image
                source={{uri: 'https://picsum.photos/200/300'}}
                  alt="text"
                style={{width: '100%', height: '100%'}}
              />
            </Box>
            <Box style={styles.box}>
              <Image
                source={{uri: 'https://picsum.photos/200/300'}}
                  alt="text"
                style={{width: '100%', height: '100%'}}
              />
            </Box>
          </HStack>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    alignItems: 'center',
    backgroundColor: '#c3eccf',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#c3eccf',
  },
    body: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#c3eccf',

    },
    box: {
        width: '47%',
        height: 100,
        margin: 5,
        backgroundColor: '#c3eccf',
        borderWidth: 2,
        borderColor: 'white',
    },
});
