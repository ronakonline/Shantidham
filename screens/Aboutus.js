import {VStack, Box, ScrollView} from 'native-base';
import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

export default function Aboutus({navigation}) {
  const img_url = 'https://app.jinjimaharaj.com/uploads/aboutus/';

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      fetch('https://app.jinjimaharaj.com/api/aboutus')
        .then(response => response.json())
        .then(responseJson => {
          setData(responseJson);
          setLoading(false);
        })
        .catch(error => console.log(error));
    }
    fetchData();
  }, []);

  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: '#FDD8DD'}}>
        <VStack style={{flex: 1, backgroundColor: '#FDD8DD'}}>
          <Box style={styles.heading}>
            <Text style={styles.titleText}>About Us</Text>
          </Box>

          <VStack style={styles.content} space={3}>
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              data.map((item, index) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('About',{img : img_url + item.image});
                  }}>
                  <VStack style={styles.video} shadow={7}>
                    <Image
                      resizeMode="cover"
                      resizeMethod="resize"
                      source={{uri: img_url + item.outer_img}}
                      alt="text"
                      style={styles.videoImage}
                    />
                    <Box style={styles.videoContent}>
                      <Text style={styles.videoTitle}>{item.title}</Text>
                      <Text style={styles.videoDescription}>{item.desc}</Text>
                    </Box>
                  </VStack>
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
