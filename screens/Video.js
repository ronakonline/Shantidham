import {View, Text, HStack, ArrowBackIcon, Button} from 'native-base';
import {StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Video({navigation}) {
  return (
    <View style={styles.container}>
      <HStack style={styles.header}>
        <TouchableOpacity
          style={{position: 'absolute'}}
          onPress={() => navigation.goBack()}>
          <ArrowBackIcon />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.text}>Video</Text>
        </View>
      </HStack>
      <View style={styles.title}>
        <Text style={styles.titleText}>Lorem Ipsem Simple Dummy</Text>
      </View>
      <View style={styles.video}>
        <YoutubePlayer height={220} videoId={'UG5xXxV4I_M'} />
      </View>
      <View>
          <View style={styles.title}>
          <Text style={styles.titleText}>Lorem Ipsem Simple Dummy</Text>
          </View>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, cons ectetur adipiscing elit.
            Pel le ntes que euismod, urna eu tincidunt consectetur, nisi
            lectus aliquet nunc, eget aliquet nisl
          </Text>
      </View>
    </View>
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
  title: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#99D8AC',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Ariel',
    color: '#000000',
  },
  video: {
    padding: 10,
    width: '100%',
  },
    description: {
        padding: 20,
        fontFamily: 'Ariel',
        color: '#000000',
        fontSize: 22,

    }
});
