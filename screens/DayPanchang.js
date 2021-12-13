import {View, Text} from 'native-base';
import React from 'react';
import {
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Animated,
  Pressable,
  FlatList,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {NativeBaseProvider, Box, Center} from 'native-base';
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
  const [panchang, setPanchang] = React.useState([
    { key: '1', name: 'Sri Ramakrishna', date: '2020-01-01', time: '10:00' },
    { key: '2', name: 'Sri Ramakrishna', date: '2020-01-01', time: '10:00' },
    { key: '3', name: 'Sri Ramakrishna', date: '2020-01-01', time: '10:00' },
    { key: '4', name: 'Sri Ramakrishna', date: '2020-01-01', time: '10:00' },
    { key: '5', name: 'Sri Ramakrishna', date: '2020-01-01', time: '10:00' },
    { key: '6', name: 'Sri Ramakrishna', date: '2020-01-01', time: '10:00' },
    { key: '7', name: 'Sri Ramakrishna', date: '2020-01-01', time: '10:00' },
    { key: '8', name: 'Sri Ramakrishna', date: '2020-01-01', time: '10:00' },
    { key: '9', name: 'Sri Ramakrishna', date: '2020-01-01', time: '10:00' },
    { key: '10', name: 'Sri Ramakrishna', date: '2020-01-01', time: '10:00' },
    { key: '11', name: 'Sri Ramakrishna', date: '2020-01-01', time: '10:00' },
    { key: '12', name: 'Sri Ramakrishna', date: '2020-01-01', time: '10:00' },
    { key: '13', name: 'Sri Ramakrishna', date: '2020-01-01', time: '10:00' },
    { key: '14', name: 'Sri Ramakrishna', date: '2020-01-01', time: '10:00' },
    { key: '15', name: 'Sri Ramakrishna', date: '2020-01-01', time: '10:00' },
  ]);

  const [daychogadiya, setDaychogadiya] = React.useState([
    { key: '1', name: 'Sri Ramakrishna', date: '2020-01-01', start: '10:00', end: '12:00' },
    { key: '2', name: 'Sri Ramakrishna', date: '2020-01-01', start: '10:00', end: '12:00' },
    { key: '3', name: 'Sri Ramakrishna', date: '2020-01-01', start: '10:00', end: '12:00' },
  ]);

  const [nightchogadiya, setNightchogadiya] = React.useState([
    { key: '1', name: 'Sri Ramakrishna', date: '2020-01-01', start: '10:00', end: '12:00' },
    { key: '2', name: 'Sri Ramakrishna', date: '2020-01-01', start: '10:00', end: '12:00' },
  ]);

  const [events, setEvents] = React.useState([
    { key: '1', name: 'Sri Ramakrishna', date: '2020-01-01', start: '10:00', end: '12:00' },
  ]);

  const FirstRoute = () => (
    <View styles={styles.panchangContainer}>
      {panchang.length > 0 ? (
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
    <View styles={styles.panchangContainer}>
      <View style={styles.chogadiyaheading}>
      <Text style={styles.chogadiyaheadingText}>Day time Choghadiya</Text>
      </View>
      {daychogadiya.length > 0 ? (
        <FlatList
          style={{ marginBottom: 20 }} 
          data={daychogadiya}
          renderItem={({item,index}) => (
            <View style={Object.assign({},styles.list,index%2 == 0 ?  { backgroundColor:'#E98882'} : {backgroundColor:'#ACC397'})}>
              <Text style={styles.listText}>{item.name}</Text>
              <Text style={styles.listTextTime}>{item.start} - {item.end}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text>No Chogadiya Found!</Text>
      )}

      <View style={styles.chogadiyaheading}>
        <Text style={styles.chogadiyaheadingText}>Night time Choghadiya</Text>
      </View>
      {nightchogadiya.length > 0 ? (
        <FlatList
          
          data={nightchogadiya}
          renderItem={({item,index}) => (
            <View style={Object.assign({},styles.list,index%2 == 0 ?  { backgroundColor:'#E98882'} : {backgroundColor:'#ACC397'})}>
              <Text style={styles.listText}>{item.name}</Text>
              <Text style={styles.listTextTime}>{item.start} - {item.end}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text>No Chogadiya Found!</Text>
      )}

    </View>
  );

  const ThirdRoute = () => (
    <View styles={styles.panchangContainer}>
      
      {events.length > 0 ? (
        <FlatList

          data={events}
          renderItem={({item,index}) => ( 
            <View style={Object.assign({},styles.list)}>
              <Text style={styles.listText}>{item.name}</Text>
              <Text style={styles.listTextTime}>{item.start} - {item.end}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
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
                <Animated.Text style={{color:'#000',fontWeight:'bold',fontSize:18}}>{route.title}</Animated.Text>
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
        <Text style={styles.subheaderText}>Veer Samvat 2547</Text>
        <Text style={styles.subheaderText}>Aaso Kartak</Text>
      </View>
      <CalendarStrip
        style={{height: 110, paddingTop: 0, paddingBottom: 0,margin:0,backgroundColor:'#F7E6DF'}}
        selectedDate={currentDate}
        startingDate={currentDate}
        calendarHeaderStyle={{color: '#000', fontSize: 18 , fontWeight: '400'}}
        calendarHeaderFormat={'MMMM YYYY'}
        dateNameStyle={{color: '#000', fontSize: 15 , fontWeight: 'bold'}}
        dateNumberStyle={{color: '#000', fontSize: 15, fontWeight: 'bold'}}
        highlightDateNameStyle={{color: '#000', fontSize: 15, fontWeight: 'bold'}}
        highlightDateNumberStyle={{color: '#000', fontSize: 15, fontWeight: 'bold'}}
        //show only one day at a time
        daySelectionAnimation={{
          type: 'border',
          duration: 200,
          borderWidth: 1,
          borderHighlightColor: 'maroon',
        }}
        onDateSelected={date => {
          date = date.toString();
          navigation.navigate('DayPanchang', {date: date});
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
    fontFamily:'Arial',
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
    fontFamily:'Arial',
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
  }
});
