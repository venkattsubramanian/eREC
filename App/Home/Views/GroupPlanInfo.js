import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function GroupPlanInfo() {
    return (
        <View style={styles.container}>

            <View style={styles.View}>
                <Image style={styles.image} source={require('../../../assets/images/user.png')} />
                <Text style={styles.Header}>Group plan / Promotion Information</Text>
            </View>


            <View style={styles.inviteView}>

                <View style={styles.inviteTextView}>
                    <Text style={styles.HeaderText}>Pay Your Balance Due of $450.00</Text>
                    <Text style={styles.SubText}>Please pay it before the Plan expires, to contineue the eREC service</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.inviteButton}>
                        <Text style={styles.inviteText}>Pay $450.00</Text>
                    </View>
                </TouchableOpacity>

            </View>
            <Text style={styles.bottomText}>Need Help on Payments? Contact Support Teams:</Text>
            <Text style={styles.numberText}>888-514-eREC (3732)</Text>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 220,
        width: '95%',
        borderRadius: 15,
        marginTop: 20
    },
    Header: {
        color: 'brown',
        fontWeight: 'bold',
        padding: 10,
        fontSize: 15
    },
    image: {
        height: 20,
        width: 20,
        left: 7,
        top: 12,
        padding: 2
    },
    View: {
        flexDirection: 'row'
    },
    HeaderText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 15,
        fontStyle: 'italic'
    },
    SubText: {
        color: 'black',
        left: 3,
        fontSize: 14,
        paddingRight: 100,
        marginTop: 5,
        fontStyle: 'italic'
    },
    bottomText: {
        padding: 10
    },
    numberText: {
        color: 'brown',
        left: 10,
        marginTop: -5,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    inviteView: {
        flexDirection: 'row',
        width: '95%',
        backgroundColor: '#FFCD28',
        borderRadius: 10,
        left: 10,
        marginTop: 10,
        height: 90,
    },
    inviteTextView: {
        left: 10,
    },
    inviteText: {
        color: 'white',
        fontWeight: 'bold',
        padding: 2,
        textAlign: 'center'
    },
    inviteButton: {
        borderRadius: 5,
        height: 40,
        width: 80,
        marginTop: 25,
        right: 85,
        backgroundColor: 'brown'
    }
})