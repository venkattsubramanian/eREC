import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function OtherAdministratorList() {
  const [isActive, setIsActive] = useState(true);
  return (
    <View style={styles.container}>


      <View style={styles.View}>
        <Image style={styles.image} source={require('../../../assets/images/group.png')} />
        <Text style={styles.Header}>Other Administrators List</Text>
        <View style={styles.switchView}>

        </View>
      </View>

      <View style={styles.line1}></View>

      <View style={styles.textViews}>

        <View style={styles.textHeads}>
          <Text style={styles.HeaderText}>Admin User Name</Text>
          <Text style={styles.SubText}>Jane Doe</Text>
          <Text style={styles.HeaderText}>Title</Text>
          <Text style={styles.SubText}>HOD</Text>
        </View>

        <View style={styles.textHeads}>
          <Text style={styles.HeaderText}>eREC Role</Text>
          <Text style={styles.SubText}>Dept.of science</Text>
          <Text style={styles.HeaderText}>Username / Email</Text>
          <Text style={styles.SubText}>name@group.com</Text>
        </View>
      </View>

      <Text style={styles.actionText}>Actions</Text>
      <View style={styles.action}>
        <TouchableOpacity>
          <View style={styles.inviteButton}>
            <Text style={styles.inviteText}>View</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.inviteButton}>
            <Text style={styles.inviteText}>Edit</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.inviteButton}>
            <Text style={styles.inviteText}>Delete</Text>
          </View>
        </TouchableOpacity>

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
    marginTop: 2
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
  action: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  HeaderText: {
    color: 'black',
    fontWeight: 'bold',
    padding: 8,
    fontSize: 14,
    marginTop: 5,
  },
  actionText: {
    color: 'black',
    fontWeight: 'bold',
    padding: 8,
    fontSize: 14,
    marginTop: 5,
    left: 10
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
    paddingRight: 10
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
  },
  inviteText: {
    color: 'brown',
    fontWeight: 'bold',
    padding: 5,
    left: 7
  },
  inviteButton: {
    borderRadius: 5,
    height: 30,
    width: 60,
    left: 25,
    borderColor: '#D4D4D4',
    borderWidth: 0.5
  }
})