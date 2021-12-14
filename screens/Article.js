import {VStack, Box, HStack, ScrollView, Button, View} from 'native-base';
import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default function Article({navigation}) {
  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: '#FDD8DD'}}>
        <VStack style={{flex: 1, backgroundColor: '#FDD8DD'}}>
          <Box style={styles.heading}>
            <Text style={styles.titleText}>Article</Text>
          </Box>

          <HStack style={styles.content} space={3}>
            <TouchableOpacity style={{ flex:1 }} onPress={() => navigation.navigate('ArticleList')} >
                <Box style={{ height:140,width:'100%' }}>
                    <VStack style={{ flex:1,justifyContent:'center',alignItems:'center' }}>
                    <Image source={require('../images/article.png')} style={{ height:'100%', width:150 }} />
                    <Text style={{ fontSize:RFValue(22), fontWeight:'bold', color:'#000' }}>Articles</Text>
                    </VStack>
                </Box>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex:1 }}>
                <Box style={{ height:140,width:'100%' }}>
                    <VStack style={{ flex:1,justifyContent:'center',alignItems:'center' }}>
                    <Image source={require('../images/copywriting.png')} style={{ height:'100%', width:150 }} />
                    <Text style={{ fontSize:RFValue(22), fontWeight:'bold', color:'#000' }}>Quotes</Text>
                    </VStack>
                </Box>
            </TouchableOpacity>
          </HStack>
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
    paddingTop: 40,
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
