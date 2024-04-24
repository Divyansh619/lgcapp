import React from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TransactionDetailPage = ({ visible, onClose }) => {
    // Dummy transaction data (replace with your actual data)
    const transactionData = {
        sno: 1,
        date: 'Jan 8, 2024',
        time: '10:30 AM',
        orderNo: 'ABC123',
        credit: 500,
        debit: 300,
        mode: 'Online',
        remark: 'Payment for services',
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableOpacity
                activeOpacity={1}
                style={styles.modalContainer}
                onPress={onClose}
            >
                <TouchableOpacity activeOpacity={1} style={styles.modalContent}>


                    <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
                        <Ionicons name="close" size={20} color="red" />
                    </TouchableOpacity>

                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Transaction Log"</Text>
                        <View style={styles.separator} />
                    </View>
                    <View style={styles.card}>
                        <View style={styles.leftSide}>
                            <Text style={styles.label}>S.No.</Text>
                            <Text style={styles.label}>Date</Text>
                            <Text style={styles.label}>Time</Text>
                            <Text style={styles.label}>Order No.</Text>
                            <Text style={styles.label}>Cr(Rs.)</Text>
                            <Text style={styles.label}>Dr(Rs.)</Text>
                            <Text style={styles.label}>Mode</Text>
                            <Text style={styles.label}>Remark</Text>
                        </View>
                        <View style={styles.rightSide}>
                            <Text style={styles.value}>{transactionData.sno}</Text>
                            <Text style={styles.value}>{transactionData.date}</Text>
                            <Text style={styles.value}>{transactionData.time}</Text>
                            <Text style={styles.value}>{transactionData.orderNo}</Text>
                            <Text style={styles.value}>{transactionData.credit}</Text>
                            <Text style={styles.value}>{transactionData.debit}</Text>
                            <Text style={styles.value}>{transactionData.mode}</Text>
                            <Text style={styles.value}>{transactionData.remark}</Text>
                        </View>
                    </View>
                    {/* <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity> */}
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    titleContainer: {
        marginTop: 10
    },
    closeIcon: {
        position: 'absolute',
        top: 5,
        right: 5,
        padding: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        margin: 10,
        width: '90%',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#34be82',
        marginBottom: 10,
    },
    card: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#34be82',
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginBottom: 5,
    },
    leftSide: {
        flex: 1,
        padding: 10,
        backgroundColor: '#34be82',
        color: 'white',
    },
    rightSide: {
        flex: 2,
        padding: 10,
        paddingTop: 12,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        color: "white",
        paddingBottom: 10,
    },
    value: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        paddingBottom: 10,
    },
    closeButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default TransactionDetailPage;
