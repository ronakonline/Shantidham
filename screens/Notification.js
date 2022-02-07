import {
  VStack,
  Box,
  HStack,
  ScrollView,
  View,
  ArrowBackIcon,
  Flex,
} from 'native-base';
import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default function Notification({navigation}) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://app.jinjimaharaj.com/api/get_notifcation')
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
      {/* <HStack style={styles.header}>
        <TouchableOpacity
          style={{position: 'absolute'}}
          onPress={() => navigation.goBack()}>
          <ArrowBackIcon />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.text}>Notifications</Text>
        </View>
      </HStack> */}
      <HStack style={styles.header}>
        <View style={styles.headerButtonView}>
          <TouchableOpacity onPress={() => { navigation.pop() }} >
            <Image source={require('../images/icons/back.png')} style={styles.headerButtonImage} />
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText}>Notifications</Text>
      </HStack>
      <ScrollView style={{flex: 1, backgroundColor: '#FFF'}}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <VStack style={{flex: 1, backgroundColor: '#FFF'}}>
            {data.map((item, index) => (
              <VStack style={styles.content} key={index} space={1}>
                <TouchableOpacity
                  onPress={() => {
                    if(item.screenname == null){

                    }else{
                      console.log(item.screenname);
                      navigation.navigate(item.screenname);
                    }
                    // navigation.navigate('ArticleDetail',{article_id : item.id,article_index : index+1});
                  }}>
                  <VStack style={styles.video}>
                    <Box style={styles.videoContent}>
                      <Text
                        style={styles.videoTitle}
                        adjustsFontSizeToFit
                        numberOfLines={2}>
                        {item.title}
                      </Text>
                      <Box
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          flexWrap: 'wrap',
                        }}>
                        <View style={{flex: 0.8}}>
                          <Text
                            style={styles.videoDescription}
                            adjustsFontSizeToFit
                            numberOfLines={12}>
                            {item.message}
                          </Text>
                        </View>
                        <View style={{flex: 0.2, marginRight:15}}>
                          <Text style={{textAlign: 'right'}}>{item.created_at_new}</Text>
                        </View>
                      </Box>
                    </Box>
                  </VStack>
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
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#d1cfcf',
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
    color: '#000',
  },
  heading: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d1cfcf',
    backgroundColor: '#FDD8DD',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  video: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
    backgroundColor: '#FFF',
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
  },
  videoContent: {
    flex: 4,
    height: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingLeft: 0,
    borderBottomColor: '#d1cfcf',
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
