import { View, Text, StyleSheet, ScrollView, Platform, Animated, TouchableWithoutFeedback, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Header/WelcomeHeader';
import GroupBasicDetails from './Views/GroupBasicDetails';
import GroupPlanInfo from './Views/GroupPlanInfo';
import GeneralSchoolInfo from './Views/GeneralSchoolInfo';
import OtherAdministratorList from './Views/OtherAdministratorList';
import PaymentHistory from './Views/PaymentHistory';

export default function Home() {
    const data = ['eREC profile', 'Group Administrators', 'other Administrators', 'Group Users', 'General', 'Member List', 'Account Summary'];

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
    );

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [slideAnim] = useState(new Animated.Value(-250));

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        Animated.timing(slideAnim, {
            toValue: isMenuOpen ? -250 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        Animated.timing(slideAnim, {
            toValue: -250,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };


    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <Header style={styles.header} />

                    <TouchableOpacity onPress={toggleMenu}>
                        <Image style={styles.menu} source={require('../../assets/images/menu.png')} />
                    </TouchableOpacity>

                    <Text style={styles.SchoolName}>Bronx High School of Science</Text>
                    <Text style={styles.District}>District: New York </Text>

                    <Animated.View
                        style={[styles.sideMenu, { transform: [{ translateX: slideAnim }] }]}
                    >
                        <TouchableWithoutFeedback onPress={closeMenu}>
                            <View style={styles.overlay} />
                        </TouchableWithoutFeedback>

                        <View style={styles.menuContent}>
                            <Text style={styles.menuItem}>Home</Text>
                            <Text style={styles.menuItem}>How eREC works</Text>
                            <Text style={styles.menuItem}>Benefits</Text>
                            <Text style={styles.menuItem}>Security & Privacy</Text>
                            <Text style={styles.menuItem}>How Much</Text>
                        </View>
                    </Animated.View>

                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.scrollContainer}
                    />
                    <GroupBasicDetails />
                    <GroupPlanInfo />
                    <OtherAdministratorList />
                    <GeneralSchoolInfo />
                    <PaymentHistory />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flexGrow: 1,
        backgroundColor: '#E8E8E8',
        paddingTop: Platform.OS === 'android' ? 0 : 10,
        paddingBottom: Platform.OS === 'android' ? 0 : 10,
    },
    scrollContainer: {
        padding: 10,
    },
    container: {
        paddingTop: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white ',
    },
    SchoolName: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 15
    },
    District: {
        fontWeight: 'bold',
        marginTop: 10
    },
    menu: {
        height: 20,
        width: 25,
        left: -170,
        top: 10,
        tintColor: 'brown'
    },
    header: {
        padding: 10,
        height: 100,
    },
    scrollContainer: {
        paddingHorizontal: 5,
        marginTop: 20
    },
    item: {
        backgroundColor: 'transparent',
        paddingVertical: 15,
        marginHorizontal: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        borderWidth: 0.2,
        borderColor: 'brown'
    },
    itemText: {
        color: 'brown',
        fontSize: 12,
    },
    sideMenu: {
        position: 'absolute',
        top: 130,
        left: 0,
        bottom: 0,
        width: 250,
        backgroundColor: '#fff',
        zIndex: 1,
        elevation: 10,
        borderRightWidth: 1,
        borderRightColor: '#ccc',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: -150,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    menuContent: {
        flex: 1,
        paddingTop: 15,
        paddingLeft: 20,
    },
    menuItem: {
        fontSize: 18,
        marginVertical: 10,
        color: 'brown',
    },
});