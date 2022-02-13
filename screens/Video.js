import {View, Text, HStack, ArrowBackIcon, Button} from 'native-base';
import {StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Video({navigation,route}) {
  const video = route.params.video;
  const videoId = video.link.split('v=')[1];
  return (
    <View style={styles.container}>
      {/* <HStack style={styles.header}>
        <TouchableOpacity
          style={{position: 'absolute'}}
          onPress={() => navigation.goBack()}>
          <ArrowBackIcon />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.text}>Video</Text>
        </View>
      </HStack> */}
      <HStack style={styles.header}>
        <View style={styles.headerButtonView}>
          <TouchableOpacity onPress={() => { navigation.pop() }} >
            <Image source={require('../images/icons/back.png')} style={styles.headerButtonImage} />
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText}>Video</Text>
      </HStack>
      {/* <View style={styles.title}>
        <Text style={styles.titleText}>{video.title}</Text>
      </View> */}
      <View style={styles.video}>
        <YoutubePlayer webViewStyle={ {opacity:0.99} }  height={220} videoId={videoId}  />
      </View>
      <View>
          <View style={styles.title}>
          <Text style={styles.titleText}>{video.title}</Text>
          </View>
          <Text style={styles.description} adjustsFontSizeToFit numberOfLines={12}>
            {video.short_desc}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
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
    fontFamily: 'Arial',
    color: '#000000',
  },
  video: {
    padding: 10,
    width: '100%',
  },
    description: {
        padding: 20,
        fontFamily: 'Arial',
        color: '#000000',
        fontSize: 22,

    }
});
