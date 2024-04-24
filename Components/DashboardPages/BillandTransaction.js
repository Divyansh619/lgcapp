import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Transactions from './Transactions';
import PaidBills from './PaidBills';
import OutStandingBills from './OutStandingBills';

const BillandTransaction = () => {
    const [selectedValue, setSelectedValue] = useState('Outstanding Bills');
    const scrollDataTwo = [
        { name: 'Outstanding Bills' },
        { name: 'Paid Bills' },
        { name: 'Transaction' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.dropdownContainer}>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue(itemValue)
                    }
                >
                    {scrollDataTwo.map((item, index) => (
                        <Picker.Item
                            key={index}
                            label={item.name}
                            value={item.name}
                        />
                    ))}
                </Picker>
            </View>
            {
                selectedValue === "Outstanding Bills" ? <OutStandingBills /> :
                    selectedValue === "Paid Bills" ? <PaidBills /> :
                        selectedValue === "Transaction" ? <Transactions />
                            : ""
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        //    alignSelf:"center",
        marginTop: 20
    },
    dropdownContainer: {
        borderWidth: 1,
        borderColor: '#34be82',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 20,
        // alignSelf:"center"
    },
    dropdown: {
        fontSize: 14,
        color: '#000',
    },
    selectedValueText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default BillandTransaction;
