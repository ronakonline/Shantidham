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
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default function ArticleList({navigation}) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://app.jinjimaharaj.com/api/articles')
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
      <HStack style={styles.header}>
        <TouchableOpacity
          style={{position: 'absolute'}}
          onPress={() => navigation.goBack()}>
          <ArrowBackIcon />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.text}>Articles</Text>
        </View>
      </HStack>

      <ScrollView style={{flex: 1, backgroundColor: '#FDD8DD'}}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <VStack style={{flex: 1, backgroundColor: '#FDD8DD'}}>
            {data.map((item,index) => (
            <VStack style={styles.content} key={index} space={3}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Gallery');
                }}>
                <HStack style={styles.video} shadow={7}>
                  <VStack style={{ flex:1.6, width:'100%', borderRightWidth:1 , padding:5, justifyContent:'center' , alignItems:'center' }}>
                  <Image
                    source={require('../images/copywriting.png')}
                    alt="text"
                    style={{ width: 80, height:80 }}
                  />
                  <Text style={{ fontSize:RFValue(16), fontWeight:'bold', color:'#000' }}>Article {index+1}</Text>
                  </VStack>
                  <Box style={styles.videoContent}>
                    <Text style={styles.videoTitle} adjustsFontSizeToFit numberOfLines={2} >{item.title}</Text>
                    <Text style={styles.videoDescription} adjustsFontSizeToFit numberOfLines={2.8}>
                      {item.mini_desc}
                    </Text>
                  </Box>
                </HStack>
              </TouchableOpacity>
            </VStack>
            ))}
          </VStack>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    alignItems: 'center',
    backgroundColor: '#FDD8DD',
    borderBottomWidth: 1,
    borderBottomColor: '#F0BCC0',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#000',
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
    height: '100%',
    borderRadius: 4,
    backgroundColor: '#FDD3D7',
    paddingRight:10,
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
