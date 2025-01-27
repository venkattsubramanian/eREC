import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function GeneralSchoolInfo() {
  return (
    <View style={styles.container}>


      <View style={styles.View}>
        <Image style={styles.image} source={require('../../../assets/images/location.png')} />
        <Text style={styles.Header}>General School Information</Text>
        <Text style={styles.numberText}>Edit Details</Text>
      </View>
      <View style={styles.line1}></View>

      <Text style={styles.primaryText}>Primary Address</Text>
      <Text style={styles.SubPrimaryText}>Bronx High School of Science, 1234 Main Street, City Hall Park, New York city, New York, Zip code-10007</Text>

      <View style={styles.textViews}>

        <View style={styles.textHeads}>
          <Text style={styles.HeaderText} numberOfLines={2}>Primary Phone Number</Text>
          <Text style={styles.SubText}>212-456-7890</Text>
          <Text style={styles.HeaderText}>FAX number</Text>
          <Text style={styles.SubText}>314-123-4567</Text>
        </View>

        <View style={styles.textHeads}>
          <Text style={styles.HeaderText} numberOfLines={2}>Secondary Phone</Text>
          <Text style={styles.SubText}>314-123-4567</Text>
          <Text style={styles.HeaderText}>Website URL</Text>
          <Text style={styles.SubText}>www.School.com</Text>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 290,
    width: '95%',
    borderRadius: 15,
    marginTop: 20
  },
  Header: {
    color: 'brown',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 15,
    right: 20,
  },
  image: {
    height: 20,
    width: 20,
    left: 0,
    top: 12,
    padding: 2
  },
  View: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  numberText: {
    color: 'brown',
    right: 8,
    marginTop: 12,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 12,
  },
  line1: {
    height: 1,
    marginTop: 8,
    backgroundColor: '#D4D4D4'
  },
  textViews: {
    flexDirection: 'row',
    color: 'white',
    alignItems: 'flex-start',
  },
  textHeads: {
    padding: 10
  },
  HeaderText: {
    color: 'black',
    fontWeight: 'bold',
    padding: 8,
    fontSize: 14,
    marginTop: 5,
  },
  SubText: {
    color: 'black',
    left: 10,
    fontSize: 13,
  },
  primaryText: {
    color: 'black',
    fontWeight: 'bold',
    padding: 8,
    fontSize: 15,
    marginTop: 5,
    left: 10
  },
  SubPrimaryText: {
    color: 'black',
    left: 20,
    fontSize: 14,
    paddingRight: 20
  },
  SubTexColor: {
    color: 'orange',
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
    left: 7
  },
  inviteButton: {
    borderRadius: 5,
    height: 40,
    width: 60,
    marginTop: 25,
    right: 65,
    backgroundColor: 'white'
  }
})