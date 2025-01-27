import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context';
import Home from './App/Home/Home';

export default function App() {

return (
<SafeAreaView style={styles.safeArea}>
 <Home/>
</SafeAreaView>
)
}

const styles= StyleSheet.create({
    safeArea: {
        flexGrow: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? 10 : 0,
    },
    });