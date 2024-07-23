import React from 'react';
import {ChevronDownIcon, CloseIcon, Radio, ScrollView, Text, View, VStack} from 'native-base';
import {Calendar} from 'react-native-calendars';
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  Button,
  Modal,
  FormControl,
  Input,
  Center,
  NativeBaseProvider,
} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Panchang({navigation}) {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [header1, setHeader1] = React.useState('');
  const [header2, setHeader2] = React.useState('');
  var TodayMonth = new Date().getMonth() + 1;
  if (TodayMonth < 10) {
    TodayMonth = '0' + TodayMonth;
  }
  var TodayDate = new Date().getDate();
  if (TodayDate < 10) {
    TodayDate = '0' + TodayDate;
  }
  var TodayYear = new Date().getFullYear();
  const [currentMonth, setCurrentMonth] = React.useState(
    TodayYear + '-' + TodayMonth + '-' + TodayDate,
  );
  var CurrentDate = TodayYear + '-' + TodayMonth + '-' + TodayDate;
  var foundData = 0;
  var thithiString = '';
  var dayContent = {};

  const [cities, setCities] = React.useState([]);

  const FetchMonthData = async(month, year) => {
    //await AsyncStorage.removeItem('panchang_city');
    var url =
      'https://app.jinjimaharaj.com/api/get_month_data_with_city/' + month + '/' + year;
    const city = await AsyncStorage.getItem('panchang_city');
    if(city){
      console.log("value",city)
      //setValue(city)
      var city_obj = JSON.parse(city);
      setSelectedCity(city_obj)
      setValue(city_obj.id);
      url += "/" + city_obj.id
    }else{
      url += "/1"
    }
    console.log("url",url);
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson);
        setHeader1(responseJson[0].heading2);
        setHeader2(responseJson[0].heading3);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const FetchCities = (month, year) => {
    var url = 'https://app.jinjimaharaj.com/api/cities';
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        setCities(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  };

  React.useEffect(() => {
    var Month = TodayMonth;
    //if month starts with 0, remove 0
    if (Month.charAt(0) == '0') {
      Month = Month.substring(1);
    }
    setCurrentMonth(TodayYear + '-' + TodayMonth + '-' + TodayDate);
    FetchMonthData(Month, TodayYear);
    FetchCities();
  }, []);

  const getdateinfo = (dd, mm, yyyy) => {
    // get today date
    var today = new Date();
    foundData = data.find(function (element) {
      return element.dd == dd && element.mm == mm && element.yyyy == yyyy;
    });
    if (foundData) {
      thithiString =
        foundData.tithi1 + '\n' + foundData.tithi2 + ' ' + foundData.tithi3;
      dayContent = {
        thithi: thithiString,
        highlight: foundData.highlight == 'Y' ? true : false,
        event: foundData.festival != '' ? true : false,
        headeing1: foundData.heading2,
        headeing2: foundData.heading3,
        color : foundData.colorcode
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
  const [value, setValue] = React.useState(1);
  const [selectedCity,setSelectedCity] = React.useState({id:1,name:"Mumbai"})
  const [showModal, setShowModal] = React.useState(false);

  const storeCity = async() => {
    console.log("value city",value);
    var city_obj = cities.find(el => el.id == value);
    console.log("city",city_obj);
    await  AsyncStorage.setItem('panchang_city', JSON.stringify(city_obj));
    setSelectedCity(city_obj);
    setShowModal(false);
    var Month = TodayMonth;
    //if month starts with 0, remove 0
    if (Month.charAt(0) == '0') {
      Month = Month.substring(1);
    }
    FetchMonthData(Month, TodayYear);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Panchang</Text>
        <TouchableOpacity
          onPress={() => {
            setShowModal(true);
          }}>
          <View style={{flex:1,flexDirection:"row" , alignItems:"center",gap:4}}>
          <Text
            style={{
              ...styles.headerText,
              color: 'blue',
              textDecorationStyle: 'solid',
              textDecorationLine: 'underline',
            }}>
            {selectedCity.name}
          </Text>
          <ChevronDownIcon color="blue" size="5"/>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>{header2}</Text>
        <Text style={styles.subHeaderText}>{header1}</Text>
      </View>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        backdropVisible={true}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Select City</Modal.Header>
          <Modal.Body>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={value}
              onChange={nextValue => {
                console.log("value",nextValue);
                setValue(nextValue);
              }}>
              {cities.length > 0 ? (
                cities.map(el => (
                  <Radio value={el.id} my={2}>
                    {el.name}
                  </Radio>
                ))
              ) : (
                <Text>No Cities Available</Text>
              )}
            </Radio.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}>
                Close
              </Button>
              <Button
                onPress={() => {
                  storeCity();
                }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView>
          <Calendar
            style={styles.calendar}
            current={currentMonth}
            dayComponent={({date, state}) => {
              {
                getdateinfo(date.day, date.month, date.year);
              }
              return date.dateString == CurrentDate ? (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DayPanchang', {
                      date: date.dateString,
                      data: data,
                    });
                  }}
                  style={Object.assign(
                    {},
                    dayContent.highlight ?  {...styles.markedDate,backgroundColor:dayContent.color? dayContent.color : "#e3a578"} : styles.dateblock
                  )}>
                  <VStack
                    style={Object.assign(
                      {},
                      dayContent.highlight
                        ? {...styles.markedVstack,backgroundColor:dayContent.color? dayContent.color : "#e3a578"}
                        : styles.unmarkedVstack,
                    )}
                    space={0}>
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
                          color: 'red',
                          marginRight: 3,
                        }}>
                        {date.day}
                      </Text>
                    </View>

                    <View
                      style={{
                        flex:1,
                        flexGrow: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                       // backgroundColor:"blue"
                      }}>
                      <Text
                        numberOfLines={2}
                        adjustsFontSizeToFit
                        style={{
                          flex: 1,
                          flexShrink:1,
                          textAlign: 'left',
                          fontSize: RFValue(10),
                          lineHeight: 18,
                          fontWeight: '600',
                          color: state === 'disabled' ? 'gray' : '#5C1514',
                          color: 'red',
                        }}>
                        {dayContent.thithi}
                      </Text>
                    </View>
                  </VStack>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DayPanchang', {
                      date: date.dateString,
                      data: data,
                    });
                  }}
                  style={
                    dayContent.highlight ? {...styles.markedDate,backgroundColor:dayContent.color? dayContent.color : "#e3a578"} : styles.dateblock
                   
                  }>
                  <VStack
                    style={
                      dayContent.highlight
                        ? {...styles.markedVstack,backgroundColor:dayContent.color? dayContent.color : "#e3a578"}
                        : styles.unmarkedVstack
                    }
                    space={0}>
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
                          marginRight: 3,
                        }}>
                        {date.day}
                      </Text>
                    </View>

                    <View style={{flex: 1}}>
                      <Text
                        numberOfLines={2}
                        adjustsFontSizeToFit
                        // minimumFontScale={0.2}
                        //allowFontScaling
                        style={{
                          flex: 1,
                          flexShrink:1,
                          textAlign: 'left',
                          fontSize: RFValue(10),
                          lineHeight: 18,
                          fontWeight: '600',
                          color: state === 'disabled' ? 'gray' : '#5C1514',
                        }}>
                        {dayContent.thithi}
                      </Text>
                    </View>
                  </VStack>
                </TouchableOpacity>
              );
            }}
            onMonthChange={month => {
              if (month.month < 10) {
                setCurrentMonth(month.year + '-0' + month.month + '-01');
              } else {
                setCurrentMonth(month.year + '-' + month.month + '-01');
              }
              setLoading(true);
              FetchMonthData(month.month, month.year);
              setHeader1('');
              setHeader2('');
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
                  backgroundColor: '#FADAC5',
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
                  fontSize: 13,
                },
                dayTextAtIndex1: {
                  color: '#5C1514',
                  fontSize: 13,
                },
                dayTextAtIndex2: {
                  color: '#5C1514',
                  fontSize: 13,
                },
                dayTextAtIndex3: {
                  color: '#5C1514',
                  fontSize: 13,
                },
                dayTextAtIndex4: {
                  color: '#5C1514',
                  fontSize: 13,
                },
                dayTextAtIndex5: {
                  color: '#5C1514',
                  fontSize: 13,
                },
                dayTextAtIndex6: {
                  color: '#5C1514',
                  fontSize: 13,
                },
              },
              backgroundColor: '#FADAC5',
              calendarBackground: '#FADAC5',
              textSectionTitleColor: '#b6c1cd',
              textSectionTitleDisabledColor: '#5C1514',
              dayTextColor: '#5C1514',
              textDisabledColor: '#d9e1e8',
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
              textDayFontSize: 13,
              textMonthFontSize: 16,
              textDayHeaderFontWeight: 'bold',
              todayBackgroundColor: 'red',
              todayTextColor: 'blue',
              selectedDayBackgroundColor: '#5C1514',
              selectedDayTextColor: '#FADAC5',
              selectedDayBorderColor: '#5C1514',
            }}
          />
          <View style={styles.footer}>
            <Text style={styles.footerDot}>{'\u2B24'}</Text>
            <Text style={styles.footerText}>Jain Event</Text>
          </View>
        </ScrollView>
      )}
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
    flex: 1,
    backgroundColor: '#FADAC5',
    //backgroundColor:"red",
    //paddingBottom: 10,
  },
  markedDate: {
    flex: 1,
   // backgroundColor: '#e3a578',
    //backgroundColor:"red",
    // paddingBottom: 10,
  },
  dateText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor:"red"
  },
  dateMark: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#a34905',
    marginLeft: 2,
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
    color: '#a34905',
  },
  footerText: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: '#5C1514',
  },
  markedVstack: {
    paddingVertical:5,
    flex: 1,
    //width:48,
    // overflow: 'hidden',
    // alignSelf: 'center',
    backgroundColor: '#e3a578',
  },
  unmarkedVstack: {
    paddingVertical:5,
    flex: 1,
    //width: 48,
    // overflow: 'hidden',
    // alignSelf: 'center',
    backgroundColor: '#FADAC5',
  },
});
