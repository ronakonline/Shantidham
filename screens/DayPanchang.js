import {View, Text, ScrollView} from 'native-base';
import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Animated,
  Pressable,
  FlatList,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Box} from 'native-base';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

export default function DayPanchang({navigation, route}) {
  const currentDate = route.params.date;
  var date = moment(currentDate).format('YYYY-MM-DD');
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Panchang'},
    {key: 'second', title: 'Chogadiya'},
    {key: 'third', title: 'Events'},
  ]);
  const [panchang, setPanchang] = React.useState([]);

  const [daychogadiya, setDaychogadiya] = React.useState([
    {
      key: '1',
      name: 'Sri Ramakrishna',
      date: '2020-01-01',
      start: '10:00',
      end: '12:00',
    },
    {
      key: '2',
      name: 'Sri Ramakrishna',
      date: '2020-01-01',
      start: '10:00',
      end: '12:00',
    },
    {
      key: '3',
      name: 'Sri Ramakrishna',
      date: '2020-01-01',
      start: '10:00',
      end: '12:00',
    },
  ]);

  const [nightchogadiya, setNightchogadiya] = React.useState([
    {
      key: '1',
      name: 'Sri Ramakrishna',
      date: '2020-01-01',
      start: '10:00',
      end: '12:00',
    },
    {
      key: '2',
      name: 'Sri Ramakrishna',
      date: '2020-01-01',
      start: '10:00',
      end: '12:00',
    },
  ]);

  const [heading, setHeading] = React.useState('');
  const [heading2, setHeading2] = React.useState('');

  const [events, setEvents] = React.useState('');
  const [currentdd, setCurrentdd] = React.useState(moment(date).format('DD'));
  const [currentmm, setCurrentmm] = React.useState(moment(date).format('MM'));
  const [currentyy, setCurrentyy] = React.useState(moment(date).format('YYYY'));

  const [loading, setLoading] = React.useState(true);
  var data = 0;

  React.useEffect(() => {
    getdata(currentdd, currentmm, currentyy);
  }, []);

  const getdata = async (dd, mm, yy) => {
    if (dd.charAt(0) == '0') {
      dd = dd.substring(1);
    }
    if (mm.charAt(0) == '0') {
      mm = mm.substring(1);
    }
    fetch(
      'https://app.jinjimaharaj.com/api/get_day_data/' +
        dd +
        '/' +
        mm +
        '/' +
        yy,
    )
      .then(response => response.json())
      .then(json => {
        data = json;
        setPanchang(json.panchang);
        setDaychogadiya(json.chogdiyaDay);
        setNightchogadiya(json.chogdiyaNight);
        setEvents(json.eventsContent);
        setHeading(json.heading2);
        setHeading2(json.heading3);
        setLoading(false);
      });
  };

  const FirstRoute = () => (
    <View styles={styles.panchangContainer}>
      {loading ? (
        <Text>Fetching data...</Text>
      ) : panchang.length > 0 ? (
        <FlatList
          data={panchang}
          renderItem={({item}) => (
            <View style={styles.list}>
              <Text style={styles.listText}>{item.name}</Text>
              <Text style={styles.listTextTime}>{item.time}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text>No Panchang Found!</Text>
      )}
    </View>
  );

  const SecondRoute = () => (
    <>
      <ScrollView style={{flex: 1}}>
        <View style={styles.chogadiyaheading}>
          <Text style={styles.chogadiyaheadingText}>Day Choghdiya</Text>
        </View>
        {loading ? (
          <Text>Fetching data...</Text>
        ) : daychogadiya.length > 0 ? (
          daychogadiya.map((item, index) => (
            <View style={Object.assign({}, styles.chogadiyadata,{ backgroundColor: item.colorcode })} key={index}>
              <Text style={styles.chogadiyaheadingText}>{item.name}</Text>
              <Text style={styles.chogadiyaheadingText}>{item.time}</Text>
            </View>
          ))
        ) : (
          <Text>No Day Choghdiya Found!</Text>
        )}
         <View style={Object.assign({},styles.chogadiyaheading,{marginTop:20})}>
          <Text style={styles.chogadiyaheadingText}>Night Choghdiya</Text>
        </View>
        {loading ? (
          <Text>Fetching data...</Text>
        ) : nightchogadiya.length > 0 ? (
          nightchogadiya.map((item, index) => (
            <View style={Object.assign({}, styles.chogadiyadata,{ backgroundColor: item.colorcode })} key={index}>
              <Text style={styles.chogadiyaheadingText}>{item.name}</Text>
              <Text style={styles.chogadiyaheadingText}>{item.time}</Text>
            </View>
          ))
        ) : (
          <Text>No Day Choghdiya Found!</Text>
        )}
      </ScrollView>
    </>
  );

  const ThirdRoute = () => (
    <View styles={styles.panchangContainer}>
      {loading ? (
        <Text>Fetching data...</Text>
      ) : events.length > 0 ? (
        <View style={Object.assign({}, styles.list)}>
          <Text style={styles.listText}>{events}</Text>
        </View>
      ) : (
        <Text>No Events Found!</Text>
      )}
    </View>
  );

  const initialLayout = {width: Dimensions.get('window').width};

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });
          const backgroundColor = index === i ? '#F8C1A0' : '#F7E6DF';
          return (
            <Box
              backgroundColor={backgroundColor}
              style={styles.tab}
              flex={1}
              alignItems="center"
              p="3"
              cursor="pointer">
              <Pressable
                onPress={() => {
                  console.log(i);
                  setIndex(i);
                }}>
                <Animated.Text
                  style={{color: '#000', fontWeight: 'bold', fontSize: 18}}>
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Panchang</Text>
        <Text style={styles.headerText}>Mumbai</Text>
      </View>
      <View style={styles.subheader}>
        <Text style={styles.subheaderText}>{heading}</Text>
        <Text style={styles.subheaderText}>{heading2}</Text>
      </View>
      <CalendarStrip
        style={{
          height: 110,
          paddingTop: 0,
          paddingBottom: 0,
          margin: 0,
          backgroundColor: '#F7E6DF',
        }}
        selectedDate={currentDate}
        startingDate={currentDate}
        calendarHeaderStyle={{color: '#000', fontSize: 18, fontWeight: '400'}}
        calendarHeaderFormat={'MMMM YYYY'}
        dateNameStyle={{color: '#000', fontSize: 15, fontWeight: 'bold'}}
        dateNumberStyle={{color: '#000', fontSize: 15, fontWeight: 'bold'}}
        highlightDateNameStyle={{
          color: '#000',
          fontSize: 15,
          fontWeight: 'bold',
        }}
        highlightDateNumberStyle={{
          color: '#000',
          fontSize: 15,
          fontWeight: 'bold',
        }}
        //show only one day at a time
        daySelectionAnimation={{
          type: 'border',
          duration: 200,
          borderWidth: 1,
          borderHighlightColor: 'maroon',
        }}
        onDateSelected={date => {
          setLoading(true);
          getdata(
            moment(date).format('DD'),
            moment(date).format('MM'),
            moment(date).format('YYYY'),
          );
        }}
      />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.tabView}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7E6DF',
  },
  list: {
    padding: 10,
    backgroundColor: '#F5DAC9',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#F1CBBC',
  },
  listText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  listTextTime: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  panchangContainer: {
    flex: 1,
    backgroundColor: '#F7E6DF',
    color: '#000',
  },
  chogadiyaheading: {
    padding: 10,
    backgroundColor: '#F7C8AA',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'black',
  },
  chogadiyadata: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F7E6DF',
  },
  chogadiyaheadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EAC5C0',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    color: '#000',
  },
  subheader: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    paddingTop: 10,
    margin: 0,
  },
  subheaderText: {
    fontSize: 18,
    fontFamily: 'Arial',
    color: '#000',
  },
  tabView: {
    flex: 1,
    backgroundColor: '#F7E6DF',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#F1CBBC',
  },
  tab: {
    borderWidth: 1,
    borderColor: '#F1CBBC',
  },
});
