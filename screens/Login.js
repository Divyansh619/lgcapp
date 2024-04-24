import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import OtpModal from '../Components/OTPModal';
import { Image } from 'react-native-elements';
import NewOTPModal from '../Components/NewOTPModal';

const Login = ({ data }) => {
  const [isModalOtpOpen, setIsModalOtpOpen] = useState(false);
  const [mobile, setMobile] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };


  const Login = () => {
    setLoading(true);
    // Check if mobile is empty before making the API call
    if (mobile.trim() === "") {
      setSubmitError("Mobile number cannot be empty.");
      setModalVisible(true);
      setLoading(false);
      return;
    }

    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 1435a113995b2c25c2376646e271312f1873a674"
    );

    var formdata = new FormData();
    formdata.append("MemberMobile", mobile);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://stgadmin.sasone.in/api/LGCadmin/MemberLogin", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (
          result.status_code === 200 &&
          result.status === "Success" &&
          result.message === "Member Not Exist"
        ) {
          setSubmitError("Please login with the registered mobile number.");
          setModalVisible(true);
        } else if (result.status_code === 200 && result.status === "Success") {
          setModalVisible(true);
        } else {
          setSubmitError("Something went wrong!!");
          setModalVisible(true);
        }
      })
      .catch((error) => {
        setSubmitSuccess(false);
        setSubmitError("Something went wrong!!");
        setModalVisible(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onClose = () => {
    setIsModalOtpOpen(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // if mobile is empty before calling Login
    if (mobile.trim() === "") {
      setSubmitError("Mobile number cannot be empty.");
      setModalVisible(true);
      return;
    }
    Login();
  };
  const handleMobileChange = (value) => {
    setSubmitError("")
    const cleanedMobile = value.replace(/\D/g, '').slice(0, 10);
    setMobile(cleanedMobile);
  };
 
  return (
    <View style={styles.container}>

     {modalVisible && mobile &&  <NewOTPModal
        visible={modalVisible}
        mobile={mobile}
        closeModal={closeModal}
        
      />}
     
      <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/LogoIcon1.png')}
            style={styles.logo}
          />
        </View>
        <Text style={styles.heading}>Member Login</Text>
        <Text style={styles.subHeading}>Golf awaits. Login now.</Text>
        <TextInput
          style={[styles.input, submitError !== '' && styles.errorInput]}
          placeholder="Phone Number"
          keyboardType="numeric"
          maxLength={10}
          value={mobile}
          onChangeText={handleMobileChange}
        />
        {submitError ? (
          <Text style={styles.errorText}>{submitError}</Text>
        ) : null}
        <TouchableOpacity
          style={styles.button}
          onPress={onSubmit}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Processing...' : 'Send OTP'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  innerContainer: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 5,
    margin: 15
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,

  },
  logoContainer: {
    alignItems: 'center',

  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#333333',
  },
  errorInput: {
    borderColor: '#FF4D4F',
  },
  button: {
    backgroundColor: '#34BE82',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  errorText: {
    color: '#FF4D4F',
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Login;
