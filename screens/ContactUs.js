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
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  Platform,
  ActivityIndicator,
} from 'react-native';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from 'react-native-fontawesome';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {useEffect, useState} from 'react';

export default function Contactus({navigation}) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://app.jinjimaharaj.com/api/settings')
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
      <ScrollView style={{flex: 1, backgroundColor: '#CAE7EF'}}>
        {loading ? (
          <ActivityIndicator></ActivityIndicator>
        ) : (
          <>
            <VStack style={{flex: 1, backgroundColor: '#CAE7EF'}}>
              <Box style={styles.heading}>
                <View style={styles.headerButtonView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.pop();
                    }}>
                    <Image
                      source={require('../images/icons/back.png')}
                      style={styles.headerButtonImage}
                    />
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
                  {data?.title}
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
                      style={{width: 32, height: 32}}
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
                        {data?.address_1}
                    </Text>
                    <Text
                      style={{
                        fontSize: RFValue(16),
                        fontWeight: 'bold',
                        color: '#000',
                      }}>
                     {data?.address_2}
                    </Text>
                    <Text
                      style={{
                        fontSize: RFValue(16),
                        fontWeight: 'bold',
                        color: '#000',
                      }}>
                      {data?.address_3}
                    </Text>
                  </VStack>
                </HStack>

                <HStack style={styles.DetailContainer}>
                  <View style={styles.iconContainer}>
                    {/* <FontAwesome icon={SolidIcons.phone} style={{fontSize: 24}} /> */}
                    <Image
                      source={require('../images/icons/phone.png')}
                      style={{width: 32, height: 32}}
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
                      <Text
                        onPress={() => {
                          Linking.openURL(
                            Platform.OS == 'ios'
                              ? 'telprompt:'+data?.office
                              : 'tel:'+data?.office,
                          );
                        }}>
                        Office : {data?.office}
                      </Text>
                    </Text>
                    <Text
                      style={{
                        fontSize: RFValue(15),
                        fontWeight: 'bold',
                        color: '#000',
                      }}
                      onPress={() => {
                        Linking.openURL(
                          Platform.OS == 'ios'
                            ? 'telprompt:'+data?.mobile
                            : 'tel:'+data?.mobile,
                        );
                      }}>
                      Mobile : {data?.mobile}
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
                      style={{width: 32, height: 32}}
                      alt="map"
                    />
                  </View>
                  <VStack style={styles.InfoContainer}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#3030f0',
                        textDecorationLine: 'underline',
                      }}
                      onPress={() => {
                        Linking.openURL('mailto:'+data?.email);
                      }}>
                      {data?.email}
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
                      style={{width: 32, height: 32}}
                      alt="map"
                    />
                  </View>
                  <VStack style={styles.InfoContainer}>
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL(data?.website)
                      }>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: '#3030f0',
                          textDecorationLine: 'underline',
                        }}>
                          {data?.website_title}
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
                      style={{width: 32, height: 32}}
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
                      {data?.work_time_1} {'\n'}{data?.work_time_2}
                    </Text>
                  </VStack>
                </HStack>
                <HStack style={styles.DetailContainer}>
                  <View
                    style={{paddingLeft: 80, paddingRight: 20, marginLeft: 0}}>
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
                          Linking.openURL(
                            data?.facebook
                          )
                        }>
                        <Image
                          source={{uri:'https://jinjimaharaj.com/frontend/img/003-facebook.png'}}
                          style={{width: 48, height: 48}}
                          alt="map"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          Linking.openURL(
                            data?.intsagram
                          )
                        }>
                        <Image
                          source={{uri:'https://jinjimaharaj.com/frontend/img/002-instagram.png'}}
                          style={{width: 48, height: 48}}
                          alt="map"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          Linking.openURL(
                            data?.youtube
                          )
                        }>
                        <Image
                          source={{uri:'https://jinjimaharaj.com/frontend/img/001-youtube.png'}}
                          style={{width: 48, height: 48}}
                          alt="map"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          Linking.openURL(
                            data?.twitter
                          )
                        }>
                        <Image
                          source={{uri:'https://jinjimaharaj.com/frontend/img/003-twitter.png'}}
                          style={{width: 48, height: 48}}
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
                marginBottom: 20,
              }}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                   data?.map_img_click
                  )
                }>
                <Image
                  source={require('../images/map.png')}
                  style={{width: '100%', height: '100%'}}
                  alt="map"
                />
              </TouchableOpacity>
            </View>
          </>
        )}
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
    aspectRatio: 1,
    height: 30,
    alignSelf: 'center',
    position: 'absolute',
    left: 10,
  },
  headerButtonImage: {
    aspectRatio: 1,
    height: '100%',
    padding: 10,
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
