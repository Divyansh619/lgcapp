import React, { useState, useRef, useEffect } from 'react';
import { View, Modal, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';

const NewOTPModal = ({ visible, mobile, closeModal }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [submitError, setSubmitError] = useState('');
    const [loading, setLoading] = useState(false);
    const [resendOtpError, setResendOtpError] = useState('Check your mobile for the OTP.');
    const navigation = useNavigation();

    const handleInputChange = (index, value) => {
        setSubmitError('');
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value === '' && index > 0) {
            inputRefs[index - 1].current.focus();
        } else if (index < inputRefs.length - 1 && value !== '') {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0) {
            setOtp((prevOtp) => {
                const newOtp = [...prevOtp];
                newOtp[index - 1] = '';
                return newOtp;
            });

            setTimeout(() => {
                inputRefs[index - 1].current.focus();
            }, 0);
        }
    };

    const handleResendOtp = () => {
        setSubmitError('');
        ResendOtp();
    };

    const handleSubmit = () => {
        if (otp.length < 4) {
            setSubmitError('Please Enter correct OTP.');
        } else {
            submitOTP();
        }
    };

    const ResendOtp = async () => {
        setResendOtpError('');
        setLoading('resend');

        try {
            const response = await fetch('https://stgadmin.sasone.in/api/LGCadmin/MemberLogin', {
                method: 'POST',
                headers: {
                    Authorization: 'Token 1435a113995b2c25c2376646e271312f1873a674',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    MemberMobile: mobile,
                }),
            });

            const result = await response.json();

            if (result.status_code === 200 && result.status === 'Success') {
                setResendOtpError('OTP Sent to registered mobile number.');

            } else {
                setResendOtpError('Something went wrong, Please contact support!!');
            }
        } catch (error) {
            setResendOtpError('Something went wrong, Please contact support!!');
        } finally {
            setLoading(false);
        }
    };

    const submitOTP = async () => {
        setLoading('Login');
        const enteredOtp = otp.join('');

        try {
            const response = await fetch('https://stgadmin.sasone.in/api/LGCadmin/VerifyOTP', {
                method: 'POST',
                headers: {
                    Authorization: 'Token 1435a113995b2c25c2376646e271312f1873a674',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Mobile: mobile,
                    OTP: enteredOtp,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const result = await response.json();

            if (result.status_code === 200 && result.status === 'Success' && result.message !== 'OTP Not Matched') {
                 
                await SecureStore.setItemAsync('MemberUUID', JSON.stringify(result.data.MemberUUID));
                await SecureStore.setItemAsync('MemberName', JSON.stringify(result.data.MemberName));
                await SecureStore.setItemAsync('MemberID', JSON.stringify(result.data.MemberID));
                await SecureStore.setItemAsync('LoginToken', JSON.stringify(result.data.LoginToken));
                await SecureStore.setItemAsync('LoggedIn', 'true');

                navigation.navigate('Dashboard', { id: result.data.MemberUUID });
            } else if (result.status_code === 200 && 
                result.status === 'Success' 
            && result.message === 'OTP Not Matched') {
                setSubmitError('Please Enter correct OTP.');
            } else {
                setSubmitError('Something went wrong, Please contact support!!');
            }
        } catch (error) {
            console.error('Error occurred:', error);
            setSubmitError('Something went wrong, Please contact support!!');
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        inputRefs[0].current.focus();
    }, []);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={closeModal}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.container}>
                    <View style={styles.modal}>
                        <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                            <Text>X</Text>
                        </TouchableOpacity>

                        <View style={styles.content}>
                            <Text style={styles.title}>Enter OTP</Text>
                            <Text style={styles.resendOtpError}>{resendOtpError}</Text>

                            <View style={styles.inputContainer}>
                                {otp.map((digit, index) => (
                                    <TextInput
                                        key={index}
                                        ref={inputRefs[index]}
                                        style={styles.input}
                                        keyboardType="numeric"
                                        value={digit}
                                        onChangeText={(value) => handleInputChange(index, value)}
                                        onKeyPress={(e) => handleKeyDown(index, e)}
                                        maxLength={1}
                                    />
                                ))}
                            </View>

                            <Text style={styles.submitError}>{submitError}</Text>

                            <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                                {loading === 'Login' ? (
                                    <View style={styles.loadingContainer}>
                                        <Text>Processing...</Text>
                                    </View>
                                ) : (
                                    <Text style={styles.submitButtonText}>Verify OTP</Text>
                                )}
                            </TouchableOpacity>


                            <View style={styles.resendContainer}>
                                <TouchableOpacity onPress={handleResendOtp} style={styles.resendButton}>
                                    {loading === 'resend' ? (
                                        <View style={styles.loadingContainer}>
                                            <Text>Loading...</Text>
                                        </View>
                                    ) : (
                                        <Text>Resend OTP</Text>
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: '90%',
        height: 350
    },
    closeButton: {
        alignSelf: 'flex-end',
        marginBottom: -10,
    },
    content: {
        // marginBottom: 16,
        marginTop: 30,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    resendOtpError: {
        color: 'gray',
        marginBottom: 12,
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },

    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    input: {
        width: '22%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        textAlign: 'center',
    },
    submitError: {
        color: 'red',
        marginBottom: 12,
    },
    submitButton: {
        backgroundColor: '#34BE82',
        color: "FFFF",
        paddingVertical: 12,
        borderRadius: 4,
        alignItems: 'center',
    },
    resendContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    resendButton: {
        paddingVertical: 12,
        alignItems: 'center',
    },
    loadingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default NewOTPModal;
