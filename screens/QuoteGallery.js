import {HStack, ArrowBackIcon, ScrollView, View} from 'native-base';
import {Platform, StatusBar, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ImageView from 'react-native-image-viewing';

export default function Gallery({navigation}) {
  const img_url = 'https://app.jinjimaharaj.com/uploads/quotes/';
  const [currentImageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [visible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const onSelect = (images, index) => {
    setImageIndex(index);
    setImages(images);
    setIsVisible(true);
  };

  const onRequestClose = () => setIsVisible(false);

  React.useEffect(() => {
    fetch('https://app.jinjimaharaj.com/api/quote_imgs')
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson);
        setImages(
          responseJson.map(item => ({
            uri: img_url + item.image,
          })),
        );
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: '#FDD8DD'}}>
        <View style={styles.container}>
          <ImageView
            key={currentImageIndex}
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
              <Text style={styles.text}>Quotes</Text>
            </View>
          </HStack>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <HStack style={styles.body}>
              {data.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => onSelect(images, index)}
                  style={styles.box}>
                  <Image
                    resizeMethod="resize"
                    resizeMode="contain"
                    source={{uri: img_url + item.image}}
                    alt="text"
                    style={{width: '100%', height: '100%'}}
                  />
                </TouchableOpacity>
              ))}
            </HStack>
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    alignItems: 'center',
    backgroundColor: '#FDD8DD',
    borderBottomWidth: 1,
    borderBottomColor: '#F0BCC0',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#FDD8DD',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FDD8DD',
  },
  box: {
    width: '30%',
    height: 100,
    margin: 5,
    backgroundColor: '#FDD8DD',
    borderWidth: 2,
    borderColor: '#91980C',
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
