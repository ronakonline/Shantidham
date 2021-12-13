import {
  VStack,
  Box,
  Select,
  CheckIcon,
  ScrollView,
  TextArea,
  Input,
  Button,
  HStack,
  CheckCircleIcon,
  View,
} from 'native-base';
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Contactus({navigation}) {
  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: '#CAE7EF'}}>
        <VStack style={{flex: 1, backgroundColor: '#CAE7EF'}}>
          <Box style={styles.heading}>
            <Text style={styles.titleText}>Contact Us</Text>
          </Box>

          <VStack style={styles.content}>
            <HStack style={styles.DetailContainer}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>
                  <CheckCircleIcon name="check-circle" />
                </Text>
              </View>
              <VStack style={styles.InfoContainer}>
                <Text style={styles.BoldText}>
                  Prerna Prakashan Trust, Valsad
                </Text>
                <Text style={styles.text}>
                  Shantidham Aradhana Kendra, Tithal {'\n'} Valsad 396001
                  Gujarat, India
                </Text>
              </VStack>
            </HStack>
            <HStack style={styles.DetailContainer}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>
                  <CheckCircleIcon name="check-circle" />
                </Text>
              </View>
              <VStack style={styles.InfoContainer}>
                <Text style={styles.BoldText}>
                  Bimal Shah
                </Text>
                
              </VStack>
            </HStack>
            <HStack style={styles.DetailContainer}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>
                  <CheckCircleIcon name="check-circle" />
                </Text>
              </View>
              <VStack style={styles.InfoContainer}>
                <Text style={{ fontSize:16,fontWeight:'bold',color:'#000' }}>
                  +91 2632 255874 Mob : 93742 55874
                </Text>
                
              </VStack>
            </HStack>
            <HStack style={styles.DetailContainer}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>
                  <CheckCircleIcon name="check-circle" />
                </Text>
              </View>
              <VStack style={styles.InfoContainer}>
                <Text style={{ fontSize:16,fontWeight:'bold',color:'#000' }}>
                  jinjimaharaj@yahoo.co.in
                </Text>
                
              </VStack>
            </HStack>
            <HStack style={styles.DetailContainer}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>
                  <CheckCircleIcon name="check-circle" />
                </Text>
              </View>
              <VStack style={styles.InfoContainer}>
                <Text style={{ fontSize:16,fontWeight:'bold',color:'#000' }}>
                  Mon-Sat 10 A.M to 5 P.M {"\n"}Sun 10 A.M to 1 P.M
                </Text>
                
              </VStack>
            </HStack>
            <HStack style={styles.DetailContainer}>
              <View style={{ paddingLeft:50 }}>
                <Text style={{ fontSize:18,fontWeight:'bold',color:'#000' }}>
                 Follow Us - 
                </Text>
              </View>
              <VStack style={styles.InfoContainer}>
                
                
              </VStack>
            </HStack>
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
  },
  DetailContainer: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InfoContainer: {
    paddingRight: 10,
    height: 80,
    width: '80%',
    justifyContent: 'center',
  },
  BoldText:{
    fontSize: 20, fontWeight: 'bold', color: '#000'
  },
  iconContainer: {
    width: '20%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    fontSize: 30,
    color: '#000',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});
