import {VStack, Box, HStack, ScrollView, Button, View} from 'native-base';
import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function Aboutus({navigation}) {
  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: '#FDD8DD'}}>
        <VStack style={{flex: 1, backgroundColor: '#FDD8DD'}}>
          <Box style={styles.heading}>
            <Text style={styles.titleText}>About Us</Text>
          </Box>

          <VStack style={styles.content} space={3}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('About');
              }}>
              <VStack style={styles.video} shadow={7}>
                <Image
                  source={{uri: 'https://picsum.photos/200/300'}}
                  alt="text"
                  style={styles.videoImage}
                />
                <Box style={styles.videoContent}>
                  <Text style={styles.videoTitle}>Lorem Text Demo</Text>
                    <Text style={styles.videoDescription}>
                        Lorem ipsum dolor sit amet, consec tetur adi piscing elit.
                        Pellentesque euismod
                    </Text>
                </Box>
              </VStack>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('About');
              }}>
              <VStack style={styles.video} shadow={7}>
                <Image
                  source={{uri: 'https://picsum.photos/200/300'}}
                  alt="text"
                  style={styles.videoImage}
                />
                <Box style={styles.videoContent}>
                  <Text style={styles.videoTitle}>Lorem Text Demo</Text>
                    <Text style={styles.videoDescription}>
                        Lorem ipsum dolor sit amet, consec tetur adi piscing elit.
                        Pellentesque euismod
                    </Text>
                </Box>
              </VStack>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('About');
              }}>
              <VStack style={styles.video} shadow={7}>
                <Image
                  source={{uri: 'https://picsum.photos/200/300'}}
                  alt="text"
                  style={styles.videoImage}
                />
                <Box style={styles.videoContent}>
                  <Text style={styles.videoTitle}>Lorem Text Demo</Text>
                    <Text style={styles.videoDescription}>
                        Lorem ipsum dolor sit amet, consec tetur adi piscing elit.
                        Pellentesque euismod
                    </Text>
                </Box>
              </VStack>
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
    height: 300,
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
    height: '100%',
    padding: 10,
  },
  videoImage: {
    height: 200,
    borderRadius: 4,
  },
    videoDescription: {
        fontSize: 15,
        marginLeft: 10,
        marginTop: 10,
        color: '#000',
    },
});
