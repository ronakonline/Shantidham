import {VStack, Box, HStack, ScrollView} from 'native-base';
import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

export default function GalleryList({route, navigation}) {
  const img_url = 'https://app.jinjimaharaj.com/uploads/gallery/';
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const screenParams = route.params;

  React.useEffect(() => {
    console.log('gallery screen', screenParams);
    var url = 'https://app.jinjimaharaj.com/api/img_categories';
    if (screenParams.newGallery) {
      url = 'https://app.jinjimaharaj.com/api/get_img_categories_atithi';
    }
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: '#D4F1DD'}}>
        <VStack style={{flex: 1, backgroundColor: '#D4F1DD'}}>
          <Box style={styles.heading}>
            <View style={styles.headerButtonView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.pop();
                }}>
                <Image
                  source={require('../images/icons/back.png')}
                  style={styles.headerButtonImage}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.titleText}>
              {screenParams.newGallery ? 'Atithi Gruh' : 'Gallery'}
            </Text>
          </Box>

          <VStack style={styles.content} space={3}>
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              data.map((item, index) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Gallery', {
                      cat_id: item.id,
                      name: item.title,
                    });
                  }}
                  key={index}>
                  <HStack style={styles.video} shadow={7}>
                    <Image
                      resizeMethod="resize"
                      resizeMode="cover"
                      source={{uri: img_url + item.cat_img}}
                      alt="text"
                      style={styles.videoImage}
                    />
                    <Box style={styles.videoContent}>
                      <Text style={styles.videoTitle}>{item.title}</Text>
                    </Box>
                  </HStack>
                </TouchableOpacity>
              ))
            )}
          </VStack>
        </VStack>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cecefb',
    borderBottomWidth: 1,
    borderBottomColor: '#CBEED6',
    backgroundColor: '#D4F1DD',
  },
  headerButtonView: {
    aspectRatio: 1,
    height: 30,
    alignSelf: 'center',
    position: 'absolute',
    left: 10,
  },
  headerButtonImage: {
    aspectRatio: 1,
    height: '100%',
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    flex: 1,
    backgroundColor: '#D4F1DD',
    padding: 10,
    paddingTop: 15,
  },
  video: {
    width: '100%',
    height: 125,
    borderRadius: 4,
    backgroundColor: '#c3eccf',
  },
  videoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    color: '#000',
  },
  videoContent: {
    flex: 4,
    height: '100%',
    marginLeft: 10,
    paddingVertical: 10,
  },
  videoImage: {
    flex: 2,
    height: '100%',
    width: '100%',
    borderRadius: 4,
  },
});
