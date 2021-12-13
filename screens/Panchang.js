import React from 'react';
import {Text, View, VStack} from 'native-base';
import {Calendar} from 'react-native-calendars';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function Panchang({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Panchang</Text>
        <Text style={styles.headerText}>Mumbai</Text>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>Veer Samvat 2547</Text>
        <Text style={styles.subHeaderText}>Shraavan-Bhadarvo</Text>
      </View>
      <Calendar
        style={styles.calendar}
        dayComponent={({date, state}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DayPanchang', {date: date.dateString});
              }}
              style={
                date.dateString == '2021-12-17'
                  ? styles.markedDate
                  : styles.dateblock
              }>
              <VStack
                style={{width: 48, overflow: 'hidden', alignSelf: 'center'}}
                space={2}>
                <View style={styles.dateText}>
                  <Text style={styles.dateMark}>
                    {date.dateString == '2021-12-17' ? '\u2B24' : ''}
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
                      fontSize: RFValue(11),
                      lineHeight: 14,
                      fontWeight: 'bold',
                      color: state === 'disabled' ? 'gray' : '#5C1514',
                    }}>
                    {date.day % 2 == 0 ? 'Shraavan Ved 10' : 'bhadaravo Ved 10'}
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
          todayTextColor: '#5C1514',
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
