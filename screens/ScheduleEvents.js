import {HStack, ScrollView, View, ArrowBackIcon} from 'native-base';
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
import {RFValue} from 'react-native-responsive-fontsize';

export default function ScheduleEvents({navigation}) {
  //const article_id = route.params.article_id;
  const img_url = 'https://app.jinjimaharaj.com/public/uploads/events/';
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [imgLoader,setImgLoader] = React.useState(true);
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
    fetch('https://app.jinjimaharaj.com/api/schedule_events')
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson);
        setImages(
          responseJson.map(item => ({
            uri: img_url + item.image,
          })),
        );
        console.log(images);
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
          <Text style={styles.text}>Schedule Events</Text>
        </View>
      </HStack> */}
      <HStack style={styles.heading}>
        <View style={styles.headerButtonView}>
          <TouchableOpacity onPress={() => { navigation.pop() }} >
            <Image source={require('../images/icons/back.png')} style={styles.headerButtonImage} />
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText}>Schedule Events</Text>
      </HStack>
      <ScrollView style={{backgroundColor: '#cecefb'}}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          data.map((item, index) => (
            <View style={styles.container} key={index}>
              <View
                style={{
                    width:'100%',
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop:20,
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(18),
                    fontWeight: 'bold',
                    color: '#1F4180',
                  }}>
                  {item.title}
                </Text>
              </View>
              <TouchableOpacity
                key={index}
                onPress={() => onSelect(images, index)}
                style={{
                  height: '100%',
                  width: '100%',
                  backgroundColor: '#cecefb',
                }}>
                <Image
                  resizeMethod="resize"
                  resizeMode="contain"
                  source={{uri: img_url + item.image}}
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#cecefb',
                  }}
                  alt="about image"
                  onLoadEnd={()=>{
                    setImgLoader(false);
                  }}
                /> 
              </TouchableOpacity>
              <ActivityIndicator size="large" color="#0000ff" animating={imgLoader}/>
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
    backgroundColor: '#cecefb',
    borderBottomWidth: 1,
    borderBottomColor: '#A8C4E5',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  heading: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cecefb',
    borderBottomWidth: 1,
    borderBottomColor: '#A8C4E5',
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
    backgroundColor: '#cecefb',
  },
});
