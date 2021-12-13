import {View, Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

export default function DayPanchang({navigation, route}) {
  const currentDate = route.params.date;
  var date = moment(currentDate).format('YYYY-MM-DD');
  return (
    <View style={styles.container}>
      <CalendarStrip
        style={{height: 150, paddingTop: 20, paddingBottom: 10}}
        selectedDate={currentDate}
        startingDate={currentDate}
        calendarHeaderStyle={{color: 'red', fontSize: 20}}
        calendarHeaderFormat={'MMMM YYYY'}
        scrollable={false}
        numDaysInWeek={7}
        //show only one day at a time
        daySelectionAnimation={{
          type: 'border',
          duration: 200,
          borderWidth: 1,
          borderHighlightColor: 'red',
        }}
        onDateSelected={date => {
          date = date.toString();
          navigation.navigate('DayPanchang', {date: date});
        }}
      />
      <Text>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
