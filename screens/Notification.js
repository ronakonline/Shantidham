import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';


export default function Notification() {
    return (
        <View style={styles.container}>
            <Text>Notification</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});