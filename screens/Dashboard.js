import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeDashboard from '../Components/DashboardPages/HomeDashboard';
import GolfBooking from '../Components/DashboardPages/GolfBooking';
import BillandTransaction from '../Components/DashboardPages/BillandTransaction';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeClick, setactiveClick] = useState("Dashboard");
    const scrollData = [
        { name: 'Dashboard' },
        { name: 'Golf booking' },
        { name: 'Bill & Transacation' },
        { name: 'Account Recharge' },
        { name: 'Service Request' },
    ];



    const handleTabPress = (index) => {
        setActiveTab(index);

    };

    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                    {scrollData.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                handleTabPress(index);
                                setactiveClick(item.name)
                            }}
                            style={[
                                styles.tab,
                                activeTab === index ? styles.activeTab : null,
                                index === 0 ? styles.firstTab : null,
                                index === scrollData.length - 1 ? styles.lastTab : null,
                            ]}
                        >
                            <Text style={[styles.tabText, activeTab === index ? styles.activeTabText : null]}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            {activeClick === "Dashboard" ? <HomeDashboard /> :
                activeClick === "Golf booking" ? <GolfBooking /> :
                    activeClick === "Bill & Transacation" ? <BillandTransaction /> :
                        ""}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 20,
        // borderBottomWidth: 1,
        // borderBottomColor: '#DDD', 
    },
    scrollContainer: {
        flexGrow: 1,
    },
    tab: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginHorizontal: 4,
        borderRadius: 20,
    },
    activeTab: {
        backgroundColor: '#34BE82',
    },
    firstTab: {
        marginLeft: 12,
    },
    lastTab: {
        marginRight: 12,
    },
    tabText: {
        color: '#333',
    },
    activeTabText: {
        color: '#fff',
    },
});

export default Dashboard;
