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
  
  export default function DvdDetail({navigation, route}) {
    const video_id = route.params.video_id;
    console.log(video_id);
    const article_index = route.params.video_index;
    const img_url = 'https://app.jinjimaharaj.com/public/uploads/videolist/';
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
      fetch('https://app.jinjimaharaj.com/api/videolist_img/' + video_id)
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
        <HStack style={styles.header}>
          <TouchableOpacity
            style={{position: 'absolute'}}
            onPress={() => navigation.goBack()}>
            <ArrowBackIcon />
          </TouchableOpacity>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.text}>CD/DVD {article_index}</Text>
          </View>
        </HStack>
        <ScrollView style={{backgroundColor: '#D4F1DD'}}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <View style={styles.container} >
           {data.map((item, index) => (
              
                <TouchableOpacity
                  key={index}
                  onPress={() => onSelect(images, index)}
                  style={{
                    height: Dimensions.get('window').height - 80,
                    width: '100%',
                    backgroundColor: '#D4F1DD'
                  }}>
                  <Image
                    resizeMethod="resize"
                    resizeMode="contain"
                    source={{uri: img_url + item.image}}
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#D4F1DD'
                    }}
                    alt="about image"
                  />
                </TouchableOpacity>
              
            ))}
            </View>
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
      backgroundColor: '#D4F1DD',
      borderBottomWidth: 1,
      borderBottomColor: '#CBEED6',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
    },
    container: {
     flex: 1,
      backgroundColor: '#D4F1DD'
    },
  });
  