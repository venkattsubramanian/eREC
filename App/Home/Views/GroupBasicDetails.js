import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function GroupBasicDetails() {
    return (
        <View style={styles.container}>

            <View style={styles.View}>
                <Image style={styles.image} source={require('../../../assets/images/radio.png')} />
                <Text style={styles.Header}>Group Basic Details </Text>
            </View>

            <View style={styles.line1}></View>

            <View style={styles.textViews}>

                <View style={styles.textHeads}>
                    <Text style={styles.HeaderText}>Group Admin Name </Text>
                    <Text style={styles.SubText}>Jane Doe </Text>
                    <Text style={styles.HeaderText}>Account Status </Text>
                    <Text style={styles.SubTexColor}>In-Active</Text>
                    <Text style={styles.HeaderText}>Last Sign In</Text>
                    <Text style={styles.SubText}>Jul 30, 2024</Text>
                </View>

                <View style={styles.textHeads}>
                    <Text style={styles.HeaderText}>eREC Group ID </Text>
                    <Text style={styles.SubText}>999999</Text>
                    <Text style={styles.HeaderText}>Account Type</Text>
                    <Text style={styles.SubText}>School - Public</Text>
                    <Text style={styles.HeaderText}>Expiry Date</Text>
                    <Text style={styles.SubText}>-</Text>
                </View>

            </View>
            <View style={styles.line1}></View>


            <View style={styles.inviteView}>

                <View style={styles.inviteTextView}>
                    <Text style={styles.HeaderText}>Invite New eREC Members</Text>
                    <Text style={styles.SubText}>Invite Parents / Guardians / Employes to join your eREC account</Text>
                </View>

                <TouchableOpacity>
                    <View style={styles.inviteButton}>

                        <Text style={styles.inviteText}>Invite Now</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3A3A3A',
        height: 390,
        width: '95%',
        borderRadius: 15,
        marginTop: 20
    },
    Header: {
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
        fontSize: 20
    },
    image: {
        height: 25,
        width: 25,
        left: 5,
        top: 10
    },
    View: {
        flexDirection: 'row'
    },
    line1: {
        height: 1,
        marginTop: 8,
        backgroundColor: '#6C6C6C'
    },
    textViews: {
        flexDirection: 'row',
        color: 'white'
    },
    textHeads: {
        padding: 10
    },
    HeaderText: {
        color: 'white',
        fontWeight: 'bold',
        padding: 8,
        fontSize: 15,
        marginTop: 5
    },
    SubText: {
        color: 'white',
        left: 10,
        fontSize: 14,
        paddingRight: 100
    },
    SubTexColor: {
        color: '#FFCD28',
        left: 10,
        fontSize: 14,
    },
    inviteView: {
        flexDirection: 'row',
        width: '95%',
        backgroundColor: '#6C6C6C',
        borderRadius: 10,
        left: 10,
        marginTop: 10,
        height: 90,
    },
    inviteTextView: {
        left: 10,
    },
    inviteText: {
        color: 'brown',
        fontWeight: 'bold',
        padding: 2,
        left: 7,
        fontSize: 15
    },
    inviteButton: {
        borderRadius: 5,
        height: 50,
        width: 60,
        marginTop: 25,
        right: 65,
        backgroundColor: 'white'
    }
})