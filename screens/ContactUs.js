import {
  VStack,
  Box,
  Select,
  CheckIcon,
  ScrollView,
  TextArea,
  Input,
  Button,
  HStack,
  CheckCircleIcon,
  View,
} from 'native-base';
import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image, Linking} from 'react-native';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from 'react-native-fontawesome';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export default function Contactus({navigation}) {
  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: '#CAE7EF'}}>
        <VStack style={{flex: 1, backgroundColor: '#CAE7EF'}}>
          <Box style={styles.heading}>
            <View style={styles.headerButtonView}>
              <TouchableOpacity onPress={() => { navigation.pop() }} >
                <Image source={require('../images/icons/back.png')} style={styles.headerButtonImage} />
              </TouchableOpacity>
            </View>
            <Text style={styles.titleText}>Contact Us</Text>
          </Box>
          <View
            style={{
              flex: 1,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
              Prerna Prakashan Trust, Valsad
            </Text>
          </View>
          <View style={styles.content}>
            <HStack style={styles.DetailContainer}>
              <View style={styles.iconContainer}>
                {/* <Text style={styles.icon}>
                  <FontAwesome
                    icon={SolidIcons.locationArrow}
                    style={{fontSize: 24}}
                  />
                </Text> */}
                <Image
                    source={require('../images/icons/location.png')}
                    style={{width: 32, height:32}}
                    alt="map"
                  />
              </View>
              <VStack style={styles.InfoContainer}>
                <Text
                  style={{
                    fontSize: RFValue(16),
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  Shantidham Aradhana Kendra, Tithal {'\n'}Valsad 396001
                  Gujarat, India
                </Text>
              </VStack>
            </HStack>

            <HStack style={styles.DetailContainer}>
              <View style={styles.iconContainer}>
              
                  {/* <FontAwesome icon={SolidIcons.phone} style={{fontSize: 24}} /> */}
                  <Image
                    source={require('../images/icons/phone.png')}
                    style={{width: 32, height:32}}
                    alt="map"
                  />
              
              </View>
              <VStack style={styles.InfoContainer}>
                <Text
                  style={{
                    fontSize: RFValue(15),
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  +91 2632 255874 Mob : 93742 55874
                </Text>
              </VStack>
            </HStack>
            <HStack style={styles.DetailContainer}>
              <View style={styles.iconContainer}>
                {/* <Text style={styles.icon}>
                  <FontAwesome
                    icon={SolidIcons.envelope}
                    style={{fontSize: 24}}
                  />
                </Text> */}
                 <Image
                    source={require('../images/icons/mail.png')}
                    style={{width: 32, height:32}}
                    alt="map"
                  />
              </View>
              <VStack style={styles.InfoContainer}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#3030f0',textDecorationLine:'underline'}}>
                  jinjimaharaj@yahoo.co.in
                </Text>
              </VStack>
            </HStack>
            <HStack style={styles.DetailContainer}>
              <View style={styles.iconContainer}>
                {/* <Text style={styles.icon}>
                  <FontAwesome icon={SolidIcons.globe} style={{fontSize: 24}} />
                </Text> */}
                 <Image
                    source={require('../images/icons/globe.png')}
                    style={{width: 32, height:32}}
                    alt="map"
                  />
              </View>
              <VStack style={styles.InfoContainer}>
                <TouchableOpacity
                  onPress={() => Linking.openURL('https://jinjimaharaj.com/')}>
                  <Text
                    style={{fontSize: 16, fontWeight: 'bold', color: '#3030f0',textDecorationLine:'underline'}}>
                    https://jinjimaharaj.com/
                  </Text>
                </TouchableOpacity>
              </VStack>
            </HStack>
            <HStack style={styles.DetailContainer}>
              <View style={styles.iconContainer}>
                {/* <Text style={styles.icon}>
                  <FontAwesome
                    icon={RegularIcons.clock}
                    style={{fontSize: 24}}
                  />
                </Text> */}
                 <Image
                    source={require('../images/icons/clock.png')}
                    style={{width: 32, height:32}}
                    alt="map"
                  />
              </View>
              <VStack style={styles.InfoContainer}>
                <HStack>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      fontFamily: 'Arial',
                      color: '#000',
                    }}>
                    Monday - Sunday
                  </Text>
                </HStack>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                    color: '#000',
                  }}>
                  8:30 AM to 1:00 PM {'\n'}3:00 PM to 8:00 PM
                </Text>
              </VStack>
            </HStack>
            <HStack style={styles.DetailContainer}>
              <View style={{paddingLeft: 80, paddingRight: 20, marginLeft: 42}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                    color: '#000',
                  }}>
                  Follow Us -
                </Text>
              </View>
              <VStack style={styles.InfoContainer}>
                <HStack space={3}>
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL('https://www.facebook.com/Jinchandraji/')
                    }>
                    <Image
                    source={require('../images/icons/facebook.png')}
                    style={{width: 48, height:48}}
                    alt="map"
                  />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL('https://www.instagram.com/jinjimaharaj/')
                    }>
                    <Image
                    source={require('../images/icons/instagram.png')}
                    style={{width: 48, height:48}}
                    alt="map"
                  />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL(
                        'https://www.youtube.com/channel/UCTWUaWuTK7GJyJiWbUofm3g',
                      )
                    }>
                    <Image
                    source={require('../images/icons/youtube.png')}
                    style={{width: 48, height:48}}
                    alt="map"
                  />
                  </TouchableOpacity>
                </HStack>
              </VStack>
            </HStack>
          </View>
        </VStack>
        <View
          style={{
            flex: 1,
            height: 200,
            width: '100%',
            paddingHorizontal: 20,
            marginTop: 20,
            marginBottom:20
          }}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.google.com/maps/place/Shantidham+Aradhana+Kendra/@20.590862,72.8986753,17z/data=!3m1!4b1!4m5!3m4!1s0x3be0c2b36f9b4309:0x4f120a9c8d0dd5e7!8m2!3d20.5909633!4d72.9008661',
              )
            }>
            <Image
              source={require('../images/map.png')}
              style={{width: '100%', height: '100%'}}
              alt="map"
            />
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#CAE7EF',
    borderBottomWidth: 1,
    borderBottomColor: '#BBE4DC',
    backgroundColor: '#CAE7EF',
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
  content: {
    flex: 1,
    backgroundColor: '#CAE7EF',
    padding: 10,
  },

  DetailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  InfoContainer: {
    paddingRight: 10,
    width: '80%',
    justifyContent: 'center',
  },
  BoldText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    color: '#000',
  },
  iconContainer: {
    width: '20%',
    justifyContent: 'center',
    // alignItems: 'auto',
    paddingRight: 20,
  },
  icon: {
    fontSize: 30,
    color: '#000',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Arial',
    color: '#000',
  },
});
