import {HStack, ScrollView, View, ArrowBackIcon, Button} from 'native-base';
import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default function ScheduleEvents({navigation}) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://app.jinjimaharaj.com/api/liveevents')
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
        <TouchableOpacity
          style={{position: 'absolute'}}
          onPress={() => navigation.goBack()}>
          <ArrowBackIcon />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.text}>Live Events</Text>
        </View>
      </HStack>
      <ScrollView style={{backgroundColor: '#B1D0E0'}}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : // if data length 0 print no event
        data.length === 0 ? (
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: RFValue(16),
                fontWeight: 'bold',
                color: '#1A374D',
              }}>
              No live streams available for a while
            </Text>
          </View>
        ) : (
          data.map((item, index) =>
            item.is_live_on == 1 ? (
              <View style={styles.container} key={index}>
                <View>
                  <View style={styles.title}>
                    <Text style={styles.titleText}>{item.title}</Text>
                  </View>
                  <Text
                    style={styles.description}
                    adjustsFontSizeToFit
                    numberOfLines={12}>
                    {item.desc}
                  </Text>
                  <View
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {/* if button_text or button_link is null then button is not visible */}
                    {item.button_name == '' || item.button_link == '' ? null : (
                      <Button
                        style={{
                          width: '40%',
                          borderRadius: 30,
                          height: 50,
                          backgroundColor: '#FF0000',
                        }}
                        onPress={() => Linking.openURL(item.button_link)}>
                        <Text
                          style={{
                            fontSize: RFValue(18),
                            color: '#fff',
                            fontWeight: 'bold',
                          }}>
                          {item.button_name}
                        </Text>
                      </Button>
                    )}
                  </View>
                </View>
              </View>
            ) : null,
          )
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    alignItems: 'center',
    backgroundColor: '#B1D0E0',
    borderBottomWidth: 1,
    borderBottomColor: '#A8C4E5',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  container: {
    width: '100%',
    backgroundColor: '#B1D0E0',
    marginBottom: 50,
  },
  title: {
    padding: 13,
    alignItems: 'center',
    backgroundColor: '#6998AB',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    color: '#1A374D',
  },
  description: {
    padding: 20,
    fontFamily: 'Arial',
    color: '#1A374D',
    fontSize: 22,
  },
});
