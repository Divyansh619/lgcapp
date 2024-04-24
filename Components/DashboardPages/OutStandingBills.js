import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OutStandingBills = ({ billNo, date, amount }) => {
    return (
        <View style={styles.card}>
            <View style={styles.leftContainer}>
                <View>
                    <Text style={styles.billNo}>1235</Text>
                    <Text style={styles.date}>Dec 24, 2023</Text>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.amount}>₹ 200</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftContainer: {
        flex: 1,
        marginRight: 8,
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    billNo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    date: {
        fontSize: 16,
        
    },
    amount: {
        fontSize: 30,
        fontWeight: "600",
        color: "#34be82",
        textAlign: 'right',
    },
});

export default OutStandingBills;
