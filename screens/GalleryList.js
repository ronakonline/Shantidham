import {VStack, Box, HStack, ScrollView} from 'native-base';
import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

export default function GalleryList({navigation}) {
  const img_url = 'https://app.jinjimaharaj.com/uploads/gallery/';
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://app.jinjimaharaj.com/api/img_categories')
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
            <Text style={styles.titleText}>Gallery</Text>
          </Box>

          <VStack style={styles.content} space={3}>
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              data.map((item, index) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Gallery',{cat_id: item.id});
                  }}
                  key={index}>
                  <HStack style={styles.video} shadow={7}>
                    <Image
                      resizeMethod='resize'
                      resizeMode='cover'
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
