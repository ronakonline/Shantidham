import {
  HStack,
  ScrollView,
  View,
  ArrowBackIcon,
} from 'native-base';
import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import ImageView from 'react-native-image-viewing';

export default function ArticleDetail({navigation, route}) {
  const article_id = route.params.article_id;
  const article_index = route.params.article_index;
  const img_url = 'https://app.jinjimaharaj.com/public/uploads/articles/';
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [visible, setIsVisible] = React.useState(false);
  const [currentImageIndex, setImageIndex] = React.useState(0);
  const [images, setImages] = React.useState([]);

  const onSelect = (images, index) => {
    setImageIndex(index);
    setImages(images);
    setIsVisible(true);
  };

  const onRequestClose = () => setIsVisible(false);

  React.useEffect(() => {
    fetch('https://app.jinjimaharaj.com/api/article_img/' + article_id)
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
      {/* <HStack style={styles.header}>
        <TouchableOpacity
          style={{position: 'absolute'}}
          onPress={() => navigation.goBack()}>
          <ArrowBackIcon />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.text}>Article {article_index}</Text>
        </View>
      </HStack> */}
      <HStack style={styles.heading}>
        <View style={styles.headerButtonView}>
          <TouchableOpacity onPress={() => { navigation.pop() }} >
            <Image source={require('../images/icons/back.png')} style={styles.headerButtonImage} />
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText}>Article {article_index}</Text>
      </HStack>
      <ScrollView style={{backgroundColor: '#FDD8DD'}}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          data.map((item, index) => (
            <View style={styles.container} key={index}>
              <TouchableOpacity
                key={index}
                onPress={() => onSelect(images, index)}
                style={{
                  height: '100%',
                  width: '100%',
                  backgroundColor: '#FDD8DD',
                }}>
                <Image
                  resizeMethod="resize"
                  resizeMode="contain"
                  source={{uri: img_url + item.image}}
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#FDD8DD',
                  }}
                  alt="about image"
                />
              </TouchableOpacity>
            </View>
          ))
        )}
        <ImageView
          key={currentImageIndex}
          images={images}
          imageIndex={currentImageIndex}
          visible={visible}
          swipeToCloseEnabled={false}
          doubleTapToZoomEnabled={true}
          onRequestClose={() => setIsVisible(false)}
        />
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
    flexDirection: 'row',
    justifyContent: 'center',
  },
  heading: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDD8DD',
    borderBottomWidth: 1,
    borderBottomColor: '#F0BCC0',
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
    height: Dimensions.get('window').height - 80,
    width: '100%',
    backgroundColor: '#FDD8DD',
  },
});
