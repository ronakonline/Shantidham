import {
  VStack,
  Box,
  Select,
  CheckIcon,
  ScrollView,
  TextArea,
  Input,
  Button,
  Image,
  View
} from 'native-base';
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Donation({navigation}) {
  function HandleSubmitData() {
    let data = {
      type: state.type,
      description: state.description,
      name: state.dname,
      email: state.email,
      phone: state.phone,
      amount: state.amount,
      pan: state.pan,
      aadhar: state.aadhar,
    };

    //send data to server
    fetch('http://abc.com/api/donation', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  }

  const handleInputChange = (evt, name) => {
    const {text} = evt.nativeEvent;
    setState({
      ...state,
      [name]: text,
    });
    console.log(state);
  };

  const [state, setState] = React.useState({
    type: '',
    description: '',
    dname: '',
    email: '',
    phone: '',
    amount: '',
    pan: '',
    aadhar: '',
  });

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
            <Text style={styles.titleText}>Donation</Text>
          </Box>

          <VStack style={styles.content} space={3}>
            <Select
              minWidth="200"
              accessibilityLabel="Select"
              placeholder="Select"
              _selectedItem={{
                bg: '#DCEFF5',
                backgroundColor: '#DCEFF5',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              style={styles.input}>
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
            <TextArea
              style={styles.input}
              placeholder="Description"
              name="description"
              value={state.description}
              onChange={evt =>
                handleInputChange(evt, 'description')
              }></TextArea>
            <Input
              style={styles.input}
              placeholder="Name"
              name="dname"
              value={state.dname}
              onChange={evt => handleInputChange(evt, 'dname')}></Input>
            <Input
              style={styles.input}
              placeholder="Email"
              name="email"
              value={state.email}
              onChange={evt => handleInputChange(evt, 'email')}></Input>
            <Input
              style={styles.input}
              placeholder="Phone"
              name="phone"
              value={state.phone}
              onChange={evt => handleInputChange(evt, 'phone')}></Input>
            <Input
              style={styles.input}
              placeholder="Amount"
              name="amount"
              value={state.amount}
              onChange={evt => handleInputChange(evt, 'amount')}></Input>
            <Input
              style={styles.input}
              placeholder="Pan no"
              name="pan"
              value={state.pan}
              onChange={evt => handleInputChange(evt, 'pan')}></Input>
            <Input
              style={styles.input}
              placeholder="Aadhar no"
              name="aadhar"
              value={state.aadhar}
              onChange={evt => handleInputChange(evt, 'aadhar')}></Input>
            <Button style={styles.button} onPress={HandleSubmitData}>
              <Text style={styles.buttonText}>Submit</Text>
            </Button>
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
    backgroundColor: '#CAE7EF',
    borderBottomWidth: 1,
    borderBottomColor: '#CBEED6',
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
    paddingTop: 15,
  },
  input: {
    borderRadius: 0,
    padding: 10,
    fontSize: 15,
    backgroundColor: '#DCEFF5',
  },
  button: {
    width: 150,
    backgroundColor: '#7BC4D7',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});
