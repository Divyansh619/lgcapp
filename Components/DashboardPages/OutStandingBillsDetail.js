import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';  

const OutStandingBillsDetail = () => {
    return (
        <View style={styles.container}>
            <View style={styles.pdf}>
                <View style={styles.pdfContent}>
                    <Text style={styles.pdfText}>Download PDF</Text>
                    <FontAwesome name="file-pdf-o" size={20} color="red" />
                </View>
            </View>
            <View style={styles.details}>
                <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Bill No:</Text>
                    <Text style={styles.detailValue}>123456789</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Discount:</Text>
                    <Text style={styles.detailValue}>$20.00</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Amount Payable:</Text>
                    <Text style={styles.detailValue}>$180.00</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Total Amount:</Text>
                    <Text style={styles.totalAmount}>$200.00</Text>
                </View>
                <TouchableOpacity style={styles.downloadButton}>
                    <Text style={styles.buttonText}>Pay Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
    },
    pdf: {
        alignItems: 'flex-end',
        paddingRight: 15,
        marginTop: 15,
    },
    pdfContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pdfText: {
        marginRight: 5,
    },
    details: {
        padding: 15,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    detailLabel: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    detailValue: {
        fontSize: 16,
    },
    totalAmount: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#34be82',
    },
    downloadButton: {
        backgroundColor: '#34be82',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default OutStandingBillsDetail;
