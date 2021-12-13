import {Button, HStack, VStack, Box,InfoOutlineIcon, Image} from 'native-base';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const Home = ({navigation}) => {

  return (
    <View style={styles.container}>
      <HStack style={{flex: 1}}>
        <VStack style={{flex: 1}}>
          <TouchableOpacity style={Object.assign({},styles.MenuBox,styles.AboutBox)} onPress={()=> navigation.navigate('Aboutus')}>
            <Image source={require('../images/copywriting.png')} style={styles.icon} alt="main-Image" />
            <Text style={styles.menuHeading}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Object.assign({},styles.MenuBox,{backgroundColor:'#f6c29f'})} onPress={()=> navigation.navigate('Panchang')}>
            <Image source={require('../images/swastika.png')} style={styles.icon} alt="main-Image" />
            <Text style={styles.menuHeading}>Panchang</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Object.assign({},styles.MenuBox,{backgroundColor:'#92dca8'})} onPress={()=> navigation.navigate('GalleryList')}>
            <Image source={require('../images/image-gallery.png')} style={styles.icon} alt="main-Image" />
            <Text style={styles.menuHeading}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Object.assign({},styles.MenuBox,{backgroundColor:'#7bc4d7'})} onPress={()=> navigation.navigate('Donation')}>
            <Image source={require('../images/donation.png')} style={styles.icon} alt="main-Image" />
            <Text style={styles.menuHeading}>Donation</Text>
          </TouchableOpacity>
          <Box style={Object.assign({},styles.MenuBox,{backgroundColor:'#9e9ef7'})}>
            <Image source={require('../images/event.png')} style={styles.icon} alt="main-Image" />
            <Text style={styles.menuHeading}>Events</Text>
          </Box>
        </VStack>
        <VStack style={{flex: 2.6}}>
          <Box style={Object.assign({},styles.MenuBox)} style={{flex: 3}}>
            <Image source={require('../images/god1.jpg')} style={{width: '100%', height: '100%',borderWidth:1,borderColor:'#91980C'}} alt="main-Image" />
          </Box>
          <Box style={Object.assign({},styles.MenuBox)} style={{ flex:2,borderWidth:1,borderColor:'#91980C' }}>
            <Text>Home</Text>
          </Box>
        </VStack>
        <VStack style={{flex: 1}}>
          <TouchableOpacity style={Object.assign({},styles.MenuBox,{backgroundColor:'#f6828c'})} onPress={()=> navigation.navigate('ArticleList')}>
           <Image source={require('../images/copywriting.png')} style={styles.icon} alt="main-Image" />
            <Text style={styles.menuHeading}>Article</Text>
          </TouchableOpacity>
          <Box style={Object.assign({},styles.MenuBox,{backgroundColor:'#f6c29f'})}>
            <Image source={require('../images/pray.png')} style={styles.icon} alt="main-Image" />
            <Text style={styles.menuHeading}>Pachchhkan</Text>
          </Box>
          <TouchableOpacity style={Object.assign({},styles.MenuBox,{backgroundColor:'#92dca8'})} onPress={()=> navigation.navigate('VideoList')}>
            <Image source={require('../images/video.png')} style={styles.icon} alt="main-Image" />
            <Text style={styles.menuHeading}>Video</Text>
          </TouchableOpacity>
          <Box style={Object.assign({},styles.MenuBox,{backgroundColor:'#7bc4d7'})}>
            <Image source={require('../images/contact.png')} style={styles.icon} alt="main-Image" />
            <Text style={styles.menuHeading}>Contact Us</Text>
          </Box>
          <TouchableOpacity style={Object.assign({},styles.MenuBox,{backgroundColor:'#9e9ef7'})} onPress={()=> navigation.navigate('Booking')}>
            <Image source={require('../images/online-booking.png')} style={styles.icon} alt="main-Image" />
            <Text style={styles.menuHeading}>Booking</Text>
          </TouchableOpacity>
        </VStack>
      </HStack>
      <Box style={{flex: 0.1,borderWidth:1,borderColor:'#91980C',width:'100%',justifyContent:'center',alignItems:'center'}}>
        <Text>Home</Text>
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
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Arial',
  },
  AboutBox:{
      backgroundColor:'#f6828c',
  },
  
  icon: {
    width: 46,
    height: 46,
  },
  menuHeading: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Arial',
  },
});

export default Home;
