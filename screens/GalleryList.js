import {VStack, Box, HStack, ScrollView, Button, View} from 'native-base';
import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function GalleryList({navigation}) {
  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: '#D4F1DD'}}>
        <VStack style={{flex: 1, backgroundColor: '#D4F1DD'}}>
          <Box style={styles.heading}>
            <Text style={styles.titleText}>Gallery</Text>
          </Box>

          <VStack style={styles.content} space={3}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Gallery');
              }}>
              <HStack style={styles.video} shadow={7}>
                <Image
                  source={{uri: 'https://picsum.photos/200/300'}}
                  alt="text"
                  style={styles.videoImage}
                />
                <Box style={styles.videoContent}>
                  <Text style={styles.videoTitle}>Gurudev</Text>
                </Box>
              </HStack>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Video');
              }}>
              <HStack style={styles.video} shadow={7}>
                <Image
                  source={{uri: 'https://picsum.photos/200/300'}}
                  alt="text"
                  style={styles.videoImage}
                />
                <Box style={styles.videoContent}>
                  <Text style={styles.videoTitle}>Derasar Ni Murti</Text>
                </Box>
              </HStack>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Video');
              }}>
              <HStack style={styles.video} shadow={7}>
                <Image
                  source={{uri: 'https://picsum.photos/200/300'}}
                  alt="text"
                  style={styles.videoImage}
                />
                <Box style={styles.videoContent}>
                  <Text style={styles.videoTitle}>Campus</Text>
                </Box>
              </HStack>
            </TouchableOpacity>
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
    borderRadius: 4,
  },
});
