import {
  VStack,
  Box,
  Select,
  CheckIcon,
  ScrollView,
  TextArea,
  Input,
  Button
} from 'native-base';
import React from 'react';
import {Text, StyleSheet,  TouchableOpacity} from 'react-native';

export default function Donation({navigation}) {
  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: '#CAE7EF'}}>
        <VStack style={{flex: 1, backgroundColor: '#CAE7EF'}}>
          <Box style={styles.heading}>
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
              style={styles.input}
             >
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
            <TextArea style={styles.input} placeholder='Description'></TextArea>
            <Input style={styles.input} placeholder='Name'></Input>
            <Input style={styles.input} placeholder='Email'></Input>
            <Input style={styles.input} placeholder='Phone'></Input>
            <Input style={styles.input} placeholder='Amount'></Input>
            <Input style={styles.input} placeholder='Pan no'></Input>
            <Input style={styles.input} placeholder='Aadhar no'></Input>
            <Button style={styles.button}><Text style={styles.buttonText}>Submit</Text></Button>
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
        width:150,
        backgroundColor:'#7BC4D7'
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
});
