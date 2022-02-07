import {VStack, Box, HStack, ScrollView, Button, View} from 'native-base';
import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default function Events({navigation}) {
  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: '#cecefb'}}>
        <VStack style={{flex: 1, backgroundColor: '#cecefb'}}>
          <Box style={styles.heading}>
            <View style={styles.headerButtonView}>
              <TouchableOpacity onPress={() => { navigation.pop() }} >
                <Image source={require('../images/icons/back.png')} style={styles.headerButtonImage} />
              </TouchableOpacity>
            </View>
            <Text style={styles.titleText}>Events</Text>
          </Box>

          <VStack style={styles.content} space={3}>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => navigation.navigate('ScheduleEvents')}>
              <Box
                style={{
                  height: 100,
                  width: '100%',
                  padding: 5,
                  backgroundColor: '#afafed',
                  borderWidth: 1,
                  borderColor: '#A8C4E5',
                }}>
                <HStack style={{flex: 1, alignItems: 'center', marginLeft: 20}}>
                  <Image
                    source={require('../images/calendar.png')}
                    style={{height: 85, width: 85}}
                  />
                 <Text
                    style={{
                      fontSize: RFValue(22),
                      fontWeight: 'bold',
                      color: '#000',
                      marginLeft: 50,
                    }}>
                    Schedule Events
                  </Text>
                </HStack>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => navigation.navigate('LiveEvent')}>
              <Box
                style={{
                  height: 100,
                  width: '100%',
                  padding: 5,
                  backgroundColor: '#afafed',
                  borderWidth: 1,
                  borderColor: '#A8C4E5',
                }}>
                <HStack style={{flex: 1, alignItems: 'center', marginLeft: 20}}>
                  <Image
                    source={require('../images/live_event.png')}
                    style={{height: 85, width: 85}}
                  />
                  <Text
                    style={{
                      fontSize: RFValue(22),
                      fontWeight: 'bold',
                      color: '#000',
                      marginLeft: 50,
                    }}>
                    Live Events
                  </Text>
                </HStack>
              </Box>
            </TouchableOpacity>
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
    borderBottomColor: '#A8C4E5',
    backgroundColor: '#cecefb',
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
    backgroundColor: '#cecefb',
    padding: 10,
    paddingTop: 40,
  },
  video: {
    width: '100%',
    height: 120,
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
