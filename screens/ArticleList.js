import {
  VStack,
  Box,
  HStack,
  ScrollView,
  Button,
  View,
  ArrowBackIcon,
} from 'native-base';
import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function ArticleList({navigation}) {
  return (
    <>
      <HStack style={styles.header}>
        <TouchableOpacity
          style={{position: 'absolute'}}
          onPress={() => navigation.goBack()}>
          <ArrowBackIcon />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.text}>Articles</Text>
        </View>
      </HStack>
      <ScrollView style={{flex: 1, backgroundColor: '#FDD8DD'}}>
        <VStack style={{flex: 1, backgroundColor: '#FDD8DD'}}>
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
                  <Text style={styles.videoTitle}>Lorem Text Demo</Text>
                  <Text style={styles.videoDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod
                  </Text>
                </Box>
              </HStack>
            </TouchableOpacity>
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
                  <Text style={styles.videoTitle}>Lorem Text Demo</Text>
                  <Text style={styles.videoDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod
                  </Text>
                </Box>
              </HStack>
            </TouchableOpacity>
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
                  <Text style={styles.videoTitle}>Lorem Text Demo</Text>
                  <Text style={styles.videoDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod
                  </Text>
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
  header: {
    height:55,
    alignItems: 'center',
    backgroundColor: '#FDD8DD',
    borderBottomWidth: 1,
    borderBottomColor: '#F0BCC0',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  heading: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0BCC0',
    backgroundColor: '#FDD8DD',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    flex: 1,
    backgroundColor: '#FDD8DD',
    padding: 10,
    paddingTop: 15,
  },
  video: {
    width: '100%',
    height: 120,
    borderRadius: 4,
    backgroundColor: '#FDD3D7',
  },
  videoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
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
  videoDescription: {
    fontSize: 15,
    marginLeft: 10,
    marginTop: 10,
    color: '#000',
  },
});
