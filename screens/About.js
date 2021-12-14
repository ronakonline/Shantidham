import {
  HStack,
  ArrowBackIcon,
  View,
  Image,
  Text,
} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import ImageView from 'react-native-image-viewing';

export default function About({navigation, route}) {
  const [visible, setIsVisible] = useState(false);
  const img = route.params.img;
  return (
    <>
      <HStack style={styles.header}>
        <TouchableOpacity
          style={{position: 'absolute'}}
          onPress={() => navigation.goBack()}>
          <ArrowBackIcon />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.text}>About</Text>
        </View>
      </HStack>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setIsVisible(true)}
          style={{height: '100%', width: '100%'}}>
          <Image
            resizeMethod="resize"
            resizeMode="contain"
            source={{uri: img}}
            style={{width: '100%', height: '100%'}}
            alt="about image"
          />
        </TouchableOpacity>
        <ImageView
          images={[{uri: img}]}
          imageIndex={0}
          visible={visible}
          swipeToCloseEnabled={false}
          doubleTapToZoomEnabled={true}
          onRequestClose={() => setIsVisible(false)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    alignItems: 'center',
    borderBottomWidth: 1,
    backgroundColor: '#FDD8DD',
    borderBottomColor: '#F0BCC0',

  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor:'#FDD8DD'
  },
});
