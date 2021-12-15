import {VStack, Box, HStack, ScrollView, Button, View} from 'native-base';
import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity, Linking,ActivityIndicator} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default function VideoList({navigation}) {
  const img_url = 'https://app.jinjimaharaj.com/uploads/videolinks/';
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://app.jinjimaharaj.com/api/videos')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: '#D4F1DD'}}>
        <VStack style={{flex: 1, backgroundColor: '#D4F1DD'}}>
          <Box style={styles.heading}>
            <Text style={styles.titleText}>Video</Text>
          </Box>

          <VStack style={styles.content} space={3}>
            {isLoading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              data.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.navigate('Video',{video: item});
                  }}>
                  <HStack style={styles.video} shadow={7}>
                    <Box style={styles.videoContent}>
                      <Text style={styles.videoTitle} adjustsFontSizeToFit numberOfLines={2} >{item.title}</Text>
                      <Text style={styles.videoDescription} adjustsFontSizeToFit numberOfLines={2}>
                        {item.short_desc.substring(0, 30)}...
                      </Text>
                    </Box>
                    <Image

                      source={{uri: img_url + item.img_outer}}
                      alt="text"
                      style={styles.videoImage}
                    />
                  </HStack>
                </TouchableOpacity>
              ))
            )}

            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
                marginBottom: 40,
              }}>
              <Button
                onPress={() => Linking.openURL('https://www.youtube.com/channel/UCTWUaWuTK7GJyJiWbUofm3g')}
                style={{height: 50, width: 150, backgroundColor: '#92DCA7'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
                  View More
                </Text>
              </Button>
            </View>
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
    height: 120,
    borderRadius: 7,
    backgroundColor: '#c3eccf',
  },
  videoTitle: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    color: '#000',
  },
  videoDescription: {
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 10,
    marginTop: 10,
    color: '#000',
  },
  videoContent: {
    flex: 4,
    height: '100%',
    marginLeft: 10,
    paddingVertical: 10,
    paddingRight:10,
  },
  videoImage: {
    flex: 3,
    height: '100%',
    borderRadius: 7,
  },
});
