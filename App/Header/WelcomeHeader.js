import { View, Text, TextInput, StyleSheet, Image, Animated } from 'react-native';
import React, { useState } from 'react'

export default function Header() {
    return (
        <View style={styles.container}>


            <TextInput
                style={styles.searchBar}
                placeholder="Find Members via ID...."
                placeholderTextColor="white"
            />

            <View style={styles.profileView}>
                <Text style={styles.welcome}>{'Welcome Back'}</Text>
                <Text style={styles.userName}>{'James'}</Text>
            </View>
            <Image style={styles.profileImage} source={require('../../assets/images/profile.jpg')} />
            <Image style={styles.dropDown} source={require('../../assets/images/downArrow.png')} />


        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'brown'
    },
    menu: {
        height: 25,
        width: 25,
        left: 10,
        top: 20,
        tintColor: 'white'
    },
    searchBar: {
        marginTop: 12,
        marginBottom: 12,
        padding: 10,
        backgroundColor: 'clear',
        borderRadius: 15,
        borderColor: 'white',
        borderWidth: 1,
        fontSize: 14,
        color: 'white',
        left: 20,
        width: 200
    },
    profileView: {
        left: 35,
    },
    welcome: {
        color: 'white',
        top: 15
    },
    userName: {
        fontWeight: 'bold',
        color: 'white',
        top: 20,
        left: 45
    },
    profileImage: {
        height: 35,
        width: 35,
        left: 37,
        top: 18,
        borderRadius: 20
    },
    dropDown: {
        height: 15,
        width: 15,
        left: 40,
        top: 35,
        borderRadius: 20,
        tintColor: '#aaa'
    },
})