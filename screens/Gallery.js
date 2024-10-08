import {HStack, ArrowBackIcon, ScrollView, View} from 'native-base';
import {Platform, StatusBar, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ImageView from 'react-native-image-viewing';

export default function Gallery({navigation, route}) {
  const img_url = 'https://app.jinjimaharaj.com/';
  const cat_id = route.params.cat_id;
  const name = route.params.name;
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
    fetch('https://app.jinjimaharaj.com/api/img_gallery_new/' + cat_id)
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson);
        setImages(
          responseJson.map(item => ({
            uri: img_url + item.image_web,
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
      <ScrollView style={{flex: 1, backgroundColor: '#c3eccf'}}>
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
            <View style={styles.headerButtonView}>
              <TouchableOpacity onPress={() => { navigation.pop() }} >
                <Image source={require('../images/icons/back.png')} style={styles.headerButtonImage} />
              </TouchableOpacity>
            </View>
            <Text style={styles.titleText}>{name ? name.length > 20 ? name.slice(0,20)+"..." : name : "Gallery"}</Text>
          </HStack>
          {/* <HStack style={styles.header}>
            <TouchableOpacity
              style={{position: 'absolute'}}
              onPress={() => navigation.goBack()}>
              <ArrowBackIcon />
            </TouchableOpacity>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.text}>Gallery</Text>
            </View>
          </HStack> */}
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
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0BCC0',
    backgroundColor: '#c3eccf',
  },
  heading: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0BCC0',
    backgroundColor: '#c3eccf',
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
    width: '30%',
    height: 100,
    margin: 5,
    backgroundColor: '#c3eccf',
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
