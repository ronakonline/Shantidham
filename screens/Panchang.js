import React from 'react';
import {Text, View, VStack} from 'native-base';
import {Calendar} from 'react-native-calendars';
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export default function Panchang({navigation}) {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [header1, setHeader1] = React.useState('');
  const [header2, setHeader2] = React.useState('');
  var foundData = 0;
  var thithiString = '';
  var dayContent = {};

 

  React.useEffect(() => {
    fetch('https://app.jinjimaharaj.com/api/panchangs')
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const getdateinfo = (dd, mm, yyyy) => {
    // get today date
    var today = new Date();
    foundData = data.find(function (element) {
      return element.dd == dd && element.mm == mm && element.yyyy == yyyy;
    });
    if (foundData) {
      thithiString =
        foundData.tithi1 + ' ' + foundData.tithi2 + ' ' + foundData.tithi3;
      dayContent = {
        thithi: thithiString,
        highlight: foundData.highlight == 'Y' ? true : false,
        event: foundData.festival != '' ? true : false,
        headeing1: foundData.heading2,
        headeing2: foundData.heading3,
      };

      if (
        foundData.mm == today.getMonth() + 1 &&
        foundData.yyyy == today.getFullYear()
      ) {
        setHeader1(foundData.heading2);
        setHeader2(foundData.heading3);
      }
    
    } else {
      thithiString = '\n\n';
      dayContent = {
        thithi: thithiString,
        highlight: false,
        event: false,
        headeing1: '',
        headeing2: '',
      };
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Panchang</Text>
        <Text style={styles.headerText}>Mumbai</Text>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>{header2}</Text>
        <Text style={styles.subHeaderText}>{header1}</Text>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Calendar
          style={styles.calendar}
          dayComponent={({date, state}) => {
            {
              getdateinfo(date.day, date.month, date.year);
            }
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DayPanchang', {date: date.dateString});
                }}
                
                style={ dayContent.highlight ? styles.markedDate : styles.dateblock}>
                <VStack
                  style={{width: 48, overflow: 'hidden', alignSelf: 'center'}}
                  space={2}>
                  <View style={styles.dateText}>
                    <Text style={styles.dateMark}>
                      {dayContent.event ? '\u2B24' : ''}
                    </Text>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: RFValue(14),
                        fontWeight: 'bold',
                        color: state === 'disabled' ? 'gray' : '#5C1514',
                      }}>
                      {date.day}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      numberOfLines={2}
                      adjustsFontSizeToFit
                      style={{
                        fontSize: RFValue(10),
                        lineHeight: 14,
                        fontWeight: 'bold',
                        color: state === 'disabled' ? 'gray' : '#5C1514',
                      }}>
                      {console.log(date)}
                      {dayContent.thithi}
                    </Text>
                  </View>
                </VStack>
              </TouchableOpacity>
            );
          }}
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          theme={{
            'stylesheet.calendar.main': {
              dayContainer: {
                borderColor: '#DFCBBE',
                borderWidth: 1,
                flex: 1,
                padding: 0,
              },
              emptyDayContainer: {
                borderColor: '#DFCBBE',
                borderWidth: 1,
                flex: 1,
                padding: 10,
              },
              week: {
                marginTop: 0,
                marginBottom: 0,
                flexDirection: 'row',
                justifyContent: 'space-around',
                color: '#5C1514',
              },
            },
            'stylesheet.calendar.header': {
              dayTextAtIndex0: {
                color: '#5C1514',
              },
              dayTextAtIndex1: {
                color: '#5C1514',
              },
              dayTextAtIndex2: {
                color: '#5C1514',
              },
              dayTextAtIndex3: {
                color: '#5C1514',
              },
              dayTextAtIndex4: {
                color: '#5C1514',
              },
              dayTextAtIndex5: {
                color: '#5C1514',
              },
              dayTextAtIndex6: {
                color: '#5C1514',
              },
            },
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#5C1514',
            selectedDayBackgroundColor: '#5C1514',
            selectedDayTextColor: '#5C1514',
            dayTextColor: '#5C1514',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#FADAC5',
            arrowColor: 'black',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: '#000',
            indicatorColor: '#000',
            textDayFontFamily: 'arial',
            textMonthFontFamily: 'arial',
            textDayHeaderFontFamily: 'arial',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 14,
            textMonthFontSize: 16,
            textDayHeaderFontWeight: 'bold',
            textDayStyle: {
              color: '#5C1514',
            },
            textDayHeaderFontSize: 14,
          }}
        />
      )}
      <View style={styles.footer}>
        <Text style={styles.footerDot}>{'\u2B24'}</Text>
        <Text style={styles.footerText}>Join Event</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 50,
    backgroundColor: '#FADAC5',
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 50,
    backgroundColor: '#FADAC5',
  },
  subHeaderText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  calendar: {
    width: '100%',
    backgroundColor: '#FADAC5',
    marginBottom: 10,
  },
  dateblock: {
    backgroundColor: '#FADAC5',
    paddingBottom: 10,
  },
  markedDate: {
    backgroundColor: '#E9C7AE',
    paddingBottom: 10,
  },
  dateText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateMark: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#5C1514',
  },
  container: {
    flex: 1,
    backgroundColor: '#FADAC5',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: 50,
    backgroundColor: '#FADAC5',
  },
  footerDot: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#5C1514',
  },
  footerText: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: '#5C1514',
  },
});
