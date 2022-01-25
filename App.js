import React from 'react';
import {NativeBaseProvider, Text, Box, Image} from 'native-base';
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
import PachchhkanScreen from './screens/Pachchhkan';
import ArticleScreen from './screens/Article';
import ArticleDetailScreen from './screens/ArticleDetail';
import QuoteGalleryScreen from './screens/QuoteGallery';
import PachchhkanLisScreen from './screens/PachchhkanList';
import EventsScreen from './screens/Events';
import ScheduleEventsScreen from './screens/ScheduleEvents';
import LiveEventScreen from './screens/LiveEvents';
import SplashScreen from 'react-native-splash-screen';
import Notification from './screens/Notification';
import DvdList from './screens/DvdList';
import DvdDetail from './screens/DvdDetail';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaProvider>
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
                fontFamily: 'Arial',
              },
              headerLeft: () => (
                <TouchableOpacity
                  style={{marginLeft: 10}}
                  onPress={() => navigation.navigate('Home')}>
                  <Image
                    source={require('./images/home.png')}
                    alt="Home"
                    height={8}
                    width={8}
                  />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity style={{marginRight: 10}}
                  onPress={() => navigation.navigate('Notification')}>
                
                  <Image
                    source={require('./images/notification.png')}
                    alt="Search"
                    height={8}
                    width={8}
                  />
                </TouchableOpacity>
              ),
              //set header background color to blue
              headerStyle: {
                backgroundColor: '#fff',
              },
            })}>
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Notification" component={Notification} />
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
            <Stack.Screen
              name="Pachchhkan"
              component={PachchhkanScreen}
            />
            <Stack.Screen name="Article" component={ArticleScreen} />
            <Stack.Screen
              name="ArticleDetail"
              component={ArticleDetailScreen}
            />
            <Stack.Screen name="QuoteGallery" component={QuoteGalleryScreen} />
            <Stack.Screen
              name="PachchhkanList"
              component={PachchhkanLisScreen}
            />
            <Stack.Screen name="Events" component={EventsScreen} />
            <Stack.Screen
              name="ScheduleEvents"
              component={ScheduleEventsScreen}
            />
            <Stack.Screen name="LiveEvent" component={LiveEventScreen} />
            <Stack.Screen name="DvdList" component={DvdList} />
            <Stack.Screen name="DvdDetail" component={DvdDetail} />
          </Stack.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
