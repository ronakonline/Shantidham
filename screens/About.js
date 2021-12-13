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
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import ImageView from 'react-native-image-viewing';

export default function About({navigation}) {
  const [visible, setIsVisible] = useState(false);
  const image = [require('../images/slide1.jpg')];
  return (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => setIsVisible(true)}>
        <Image source={require('../images/slide2.png')} style={{ width: '100%', height: '100%' }} alt="about image" />
        </TouchableOpacity>
        <ImageView
          images={image}
          imageIndex={0}
          visible={visible}
          swipeToCloseEnabled={false}
          doubleTapToZoomEnabled={true}
          onRequestClose={() => setIsVisible(false)}
        />
  </View>
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
  container: {
    flex: 1,
  },
});
