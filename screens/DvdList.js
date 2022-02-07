import {
    VStack,
    Box,
    HStack,
    ScrollView,
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
  
  export default function DvdList({navigation}) {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
  
    React.useEffect(() => {
      fetch('https://app.jinjimaharaj.com/api/videolist')
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
          <View style={styles.headerButtonView}>
            <TouchableOpacity onPress={() => { navigation.pop() }} >
              <Image source={require('../images/icons/back.png')} style={styles.headerButtonImage} />
            </TouchableOpacity>
          </View>
          <Text style={styles.titleText}>CD/DVD List</Text>
          {/* <TouchableOpacity
            style={{position: 'absolute'}}
            onPress={() => navigation.goBack()}>
            <ArrowBackIcon />
          </TouchableOpacity>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.text}>CD/DVD List</Text>
          </View> */}
        </HStack>
  
        <ScrollView style={{flex: 1, backgroundColor: '#D4F1DD'}}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <VStack style={{flex: 1, backgroundColor: '#D4F1DD'}}>
              {data.map((item,index) => (
              <VStack style={styles.content} key={index} space={3}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DvdDetail',{video_id : item.id,video_index : index+1});
                  }}>
                  <HStack style={styles.video} shadow={7}>
                    <VStack style={{ flex:1.6, width:'100%', borderRightWidth:1 , padding:5, justifyContent:'center' , alignItems:'center' }}>
                    <Image
                      source={require('../images/dvd.png')}
                      alt="text"
                      style={{ width: 80, height:80 }}
                    />
                    <Text style={{ fontSize:RFValue(16), fontWeight:'bold', color:'#000' }}>CD/DVD {index+1}</Text>
                    </VStack>
                    <Box style={styles.videoContent}>
                      <Text style={styles.videoTitle} adjustsFontSizeToFit numberOfLines={3} >{item.title}</Text>
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
      borderBottomWidth: 1,
      borderBottomColor: '#CBEED6',
      backgroundColor: '#D4F1DD',
      flexDirection: 'row',
      justifyContent: 'center',
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
      color:'#000',
    },
    heading: {
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
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
      height: '100%',
      borderRadius: 4,
      backgroundColor: '#D4F1DD',
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
  