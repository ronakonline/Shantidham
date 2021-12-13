import {
  VStack,
  Box,
  HStack,
  ArrowBackIcon,
  ScrollView,
  Button,
  View,
} from 'native-base';
import {Platform, SafeAreaView, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ImageView from 'react-native-image-viewing';

export default function Gallery({navigation}) {
  const galleryImages = [
    require('../images/slide1.jpg'),
    require('../images/slide2.png'),
    require('../images/slide3.png'),
  ];

  const [currentImageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState(galleryImages);
  const [visible, setIsVisible] = useState(false);

  const onSelect = (images, index) => {
    setImageIndex(index);
    setImages(images);
    setIsVisible(true);
  };

  const onRequestClose = () => setIsVisible(false);
  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: '#c3eccf'}}>
        <View style={styles.container}>
        <ImageView
              images={images}
              imageIndex={currentImageIndex}
              visible={visible}
              swipeToCloseEnabled={false}
              doubleTapToZoomEnabled={true}
              onRequestClose={() => setIsVisible(false)}
            />
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
            {galleryImages.map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => onSelect(galleryImages, index)} style={styles.box}>
               
                  <Image
                    source={image}
                    alt="text"
                    style={{width: '100%', height: '100%'}}
                  />
               
              </TouchableOpacity>
            ))}
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
    color: '#000',
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
  root: {
    flex: 1,
    backgroundColor: '#000',
    ...Platform.select({
      android: {paddingTop: StatusBar.currentHeight},
      default: null,
    }),
  },
  about: {
    flex: 1,
    marginTop: -12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '200',
    color: '#FFFFFFEE',
  },
});
