import {Button, HStack, VStack, Box, InfoOutlineIcon, Image} from 'native-base';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import MarqueeText from 'react-native-marquee';
import {RFValue} from 'react-native-responsive-fontsize';

const Home = ({navigation}) => {
  const [weight, setWeight] = React.useState(0);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const img_url = 'https://app.jinjimaharaj.com/uploads/dash_slider/';

  React.useEffect(() => {
    async function fetchData() {
      fetch('https://app.jinjimaharaj.com/api/dashboard')
        .then(response => response.json())
        .then(responseJson => {
          setData(responseJson);
          setLoading(false);
        })
        .catch(error => console.log(error));
    }
    fetchData();
  }, []);

  const openLink = () =>{
    Linking.openURL(data.button_link);
  }


  return (
    <View style={styles.container}>
      <HStack style={{flex: 1}}>
        <VStack style={{flex: 1}}>
          <TouchableOpacity
            style={Object.assign({}, styles.MenuBox, styles.AboutBox)}
            onPress={() => navigation.navigate('Aboutus')}>
            <Image
              source={require('../images/file.png')}
              style={styles.icon}
              alt="main-Image"
            />
            <Text style={styles.menuHeading}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Object.assign({}, styles.MenuBox, {
              backgroundColor: '#f6c29f',
            })}
            onPress={() => navigation.navigate('Panchang')}>
            <Image
              source={require('../images/swastika.png')}
              style={styles.icon}
              alt="main-Image"
            />
            <Text style={styles.menuHeading}>Panchang</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Object.assign({}, styles.MenuBox, {
              backgroundColor: '#92dca8',
            })}
            onPress={() => navigation.navigate('GalleryList')}>
            <Image
              source={require('../images/image-gallery.png')}
              style={styles.icon}
              alt="main-Image"
            />
            <Text style={styles.menuHeading}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Object.assign({}, styles.MenuBox, {
              backgroundColor: '#7bc4d7',
            })}
            onPress={() => navigation.navigate('Donation')}>
            <Image
              source={require('../images/donation.png')}
              style={styles.icon}
              alt="main-Image"
            />
            <Text style={styles.menuHeading}>Donation</Text>
          </TouchableOpacity>
          <Box
            style={Object.assign({}, styles.MenuBox, {
              backgroundColor: '#9e9ef7',
            })}>
            <Image
              source={require('../images/event.png')}
              style={styles.icon}
              alt="main-Image"
            />
            <Text style={styles.menuHeading}>Events</Text>
          </Box>
        </VStack>
        <VStack style={{flex: 2.6}}>
          <View
            style={styles.ImageBox}
            onLayout={event => {
              const {x, y, width, height} = event.nativeEvent.layout;
              setWeight(width);
            }}>
            {/* <Image
                source={require('../images/slide3.png')}
                resizeMode="contain"
                style={{flex:1,width: '100%', height: null}}
                alt="main-Image"
              /> */}
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              <SliderBox
                images={[
                  img_url + data.slider1,
                  img_url + data.slider2,
                  img_url + data.slider3,
                ]}
                sliderBoxHeight="100%"
                resizeMethod="scale"
                resizeMode="contain"
                parentWidth={weight}
                autoplay
                circleLoop
              />
            )}
          </View>
          <Box
            style={Object.assign({}, styles.MenuBox)}
            style={{flex: 2, borderWidth: 1, borderColor: '#91980C',alignItems:'center',justifyContent:'center'}}>
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : data.is_quote_img == 1 ? (
              <Image
                source={{uri: img_url + data.quote_img}}
                resizeMethod="scale"
                resizeMode="stretch"
                alt="quote-img"
                style={{height: '100%', width: '100%'}}
              />
            ) : data.is_text == 1 && data.is_button == 0 ? (
              <Text style={{ fontSize:RFValue(18), fontWeight:'bold'}}>{data.slider_text}</Text>
            ) : (
              <>
              <Text  numberOfLines={8}
                    adjustsFontSizeToFit style={{ fontSize:RFValue(18), fontWeight:'bold'}}>{data.slider_text}</Text>
              <Button style={{width:'80%',marginLeft:20, marginRight:20, marginTop:10}} onPress={() => openLink()}><Text style={{ fontSize:RFValue(18), fontWeight:'bold', color:'#fff' }}>{data.button_name}</Text></Button>
              </>
            )}
          </Box>
        </VStack>
        <VStack style={{flex: 1}}>
          <TouchableOpacity
            style={Object.assign({}, styles.MenuBox, {
              backgroundColor: '#f6828c',
            })}
            onPress={() => navigation.navigate('ArticleList')}>
            <Image
              source={require('../images/copywriting.png')}
              style={styles.icon}
              alt="main-Image"
            />
            <Text style={styles.menuHeading}>Article</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Object.assign({}, styles.MenuBox, {
              backgroundColor: '#f6c29f',
            })}
            onPress={() => navigation.navigate('Pachchhkan')}>
            <Image
              source={require('../images/pray.png')}
              style={styles.icon}
              alt="main-Image"
            />
            <Text style={styles.menuHeading}>Pachchhkan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Object.assign({}, styles.MenuBox, {
              backgroundColor: '#92dca8',
            })}
            onPress={() => navigation.navigate('VideoList')}>
            <Image
              source={require('../images/video.png')}
              style={styles.icon}
              alt="main-Image"
            />
            <Text style={styles.menuHeading}>Video</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Object.assign({}, styles.MenuBox, {
              backgroundColor: '#7bc4d7',
            })}
            onPress={() => navigation.navigate('Contactus')}>
            <Image
              source={require('../images/contact.png')}
              style={styles.icon}
              alt="main-Image"
            />
            <Text style={styles.menuHeading}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Object.assign({}, styles.MenuBox, {
              backgroundColor: '#9e9ef7',
            })}
            onPress={() => navigation.navigate('Booking')}>
            <Image
              source={require('../images/online-booking.png')}
              style={styles.icon}
              alt="main-Image"
            />
            <Text style={styles.menuHeading}>Booking</Text>
          </TouchableOpacity>
        </VStack>
      </HStack>
      <Box
        style={{
          flex: 0.1,
          borderWidth: 1,
          borderColor: '#91980C',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {loading ? (
          <ActivityIndicator size="large" color="#91980C" />
        ) : (
          <MarqueeText
            style={{
              fontSize: 20,
              width: '100%',
              textAlign: 'center',
              paddingLeft: 10,
            }}
            duration={15000}
            marqueeOnStart
            loop>
            {data.footer_text}
          </MarqueeText>
        )}
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 0,
  },

  MenuBox: {
    flex: 1,
    borderColor: '#91980C',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageBox: {
    flex: 3,
    borderColor: '#91980C',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Arial',
  },
  AboutBox: {
    backgroundColor: '#f6828c',
  },

  icon: {
    width: 46,
    height: 46,
  },
  menuHeading: {
    marginTop: 10,
    fontSize: RFValue(13),
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Arial',
  },
});

export default Home;
