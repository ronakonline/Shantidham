import {VStack, Box, HStack, ScrollView,Button,View} from 'native-base';
import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function VideoList({navigation}) {
  return (
    <>
      <ScrollView  style={{ flex:1,backgroundColor:'#D4F1DD' }}>
        <VStack style={{ flex:1,backgroundColor:'#D4F1DD' }}>
        <Box style={styles.heading}>
          <Text style={styles.titleText}>Video</Text>
        </Box>

        <VStack style={styles.content} space={3}>
          
          <TouchableOpacity onPress={()=>{navigation.navigate('Video')}}>
          <HStack style={styles.video} shadow={7}>
            <Box style={styles.videoContent}>
              <Text style={styles.videoTitle}>Video Title</Text>
              <Text style={styles.videoDescription}>
                Video Description Video Description Video Description
              </Text>
            </Box>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              alt="text"
              style={styles.videoImage}
            />
          </HStack>
          </TouchableOpacity>
          <HStack style={styles.video} shadow={7}>
            <Box style={styles.videoContent}>
              <Text style={styles.videoTitle}>Video Title</Text>
              <Text style={styles.videoDescription}>
                Video Description Video Description Video Description
              </Text>
            </Box>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              alt="text"
              style={styles.videoImage}
            />
          </HStack>
          <HStack style={styles.video} shadow={7}>
            <Box style={styles.videoContent}>
              <Text style={styles.videoTitle}>Video Title</Text>
              <Text style={styles.videoDescription}>
                Video Description Video Description Video Description
              </Text>
            </Box>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              alt="text"
              style={styles.videoImage}
            />
          </HStack>
          <HStack style={styles.video} shadow={7}>
            <Box style={styles.videoContent}>
              <Text style={styles.videoTitle}>Video Title</Text>
              <Text style={styles.videoDescription}>
                Video Description Video Description Video Description
              </Text>
            </Box>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              alt="text"
              style={styles.videoImage}
            />
          </HStack>
          <HStack style={styles.video} shadow={7}>
            <Box style={styles.videoContent}>
              <Text style={styles.videoTitle}>Video Title</Text>
              <Text style={styles.videoDescription}>
                Video Description Video Description Video Description
              </Text>
            </Box>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              alt="text"
              style={styles.videoImage}
            />
          </HStack>
         
          
          <View style={{ flex:1, alignItems:'center', justifyContent:'center', marginTop:20, marginBottom:40  }}>
              <Button style={{ height:50,width:150,backgroundColor:'#92DCA7' }}><Text style={{ fontSize:18, fontWeight:'bold',color:'#000' }}>View More</Text></Button>
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
    backgroundColor:'#D4F1DD',

  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    flex: 1,
    backgroundColor:'#D4F1DD',
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
    fontSize: 20,
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
  },
  videoImage: {
    flex: 2,
    height: '100%',
    borderRadius:7,
  },
});
