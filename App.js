import React from 'react';
import {NativeBaseProvider, Text, Box,Image} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native';
import RegisterScreen from './screens/Register';
import HomeScreen from './screens/Home';
import BookingScreen from './screens/Booking';
import VideoListScreen from './screens/VideoList';
import VideoScreen from './screens/Video';
import GalleryListScreen from './screens/GalleryList';
import GalleryScreen from './screens/Gallery';
import DonationScreen from './screens/Donation';
import ArticleListScreen from './screens/ArticleList';
import AboutusScreen from './screens/Aboutus';
import About from './screens/About';
import PanchangScreen from './screens/Panchang';
import DayPanchangScreen from './screens/DayPanchang';
import ContactusScreen from './screens/ContactUs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator
          initialRouteName="Register"
          screenOptions={({navigation}) => ({
            headerTitleAlign: 'center',
            title: 'SHANTIDHAM',
            //set header title color to red
            headerTitleStyle: {
              color: '#640003',
              fontSize: 24,
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{marginLeft: 10}}
                onPress={() => navigation.navigate('Home')}>
                <Image source={require('./images/home.png')} alt="Home" height={8} width={8} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <Box style={{marginRight: 10}}>
                <Image source={require('./images/notification.png')} alt="Search" height={8} width={8} />
              </Box>
            ),
            //set header background color to blue
            headerStyle: {
              backgroundColor: '#fff',
            },
          })}>
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Booking" component={BookingScreen} />
          <Stack.Screen name="VideoList" component={VideoListScreen} />
          <Stack.Screen name="Video" component={VideoScreen} />
          <Stack.Screen name="GalleryList" component={GalleryListScreen} />
          <Stack.Screen name="Gallery" component={GalleryScreen} />
          <Stack.Screen name="Donation" component={DonationScreen} />
          <Stack.Screen name="ArticleList" component={ArticleListScreen} />
          <Stack.Screen name="Aboutus" component={AboutusScreen} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Panchang" component={PanchangScreen} />
          <Stack.Screen name="DayPanchang" component={DayPanchangScreen} />
          <Stack.Screen name="Contactus" component={ContactusScreen} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
