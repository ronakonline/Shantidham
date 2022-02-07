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
      {/* <HStack style={styles.header}>
        <TouchableOpacity
          style={{position: 'absolute'}}
          onPress={() => navigation.goBack()}>
          <ArrowBackIcon />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.text}>About</Text>
        </View>
      </HStack> */}
      <HStack style={styles.heading}>
        <View style={styles.headerButtonView}>
          <TouchableOpacity onPress={() => { navigation.pop() }} >
            <Image source={require('../images/icons/back.png')} style={styles.headerButtonImage} />
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText}>About</Text>
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
  container: {
    flex: 1,
    backgroundColor:'#FDD8DD'
  },
});
