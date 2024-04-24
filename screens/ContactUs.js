import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !subject || !phone || !message) {
      Alert.alert("Validation Error", "All fields are required");
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert("Validation Error", "Please enter a valid email address");
      return;
    }

    if (!isValidPhone(phone)) {
      Alert.alert("Validation Error", "Please enter a valid phone number");
      return;
    }

    // You can proceed with form submission logic here
    const formData = { name, email, subject, phone, message };
    Alert.alert("Form Submitted", JSON.stringify(formData));
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    // Basic phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Text style={styles.heading}>Contact Us</Text> */}
        <View style={styles.card}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Phone No.</Text>
            <Text style={styles.subText}>+91 96215 58855, +91 83030 92001</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Email</Text>
            <Text style={styles.subText}>lucknowgolf@gmail.com</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Address</Text>
            <Text style={styles.subText}>1, Kalidas Marg, Lucknow - 226001</Text>
          </View>
        </View>
        {/* <View>
          <Text>Lorem ipsum sit amet</Text>
        </View> */}
        <Text style={styles.label}>Name *</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text style={styles.label}>Email *</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <Text style={styles.label}>Subject *</Text>
        <TextInput
          style={styles.input}
          value={subject}
          onChangeText={(text) => setSubject(text)}
        />
        <Text style={styles.label}>Phone *</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={(text) => setPhone(text)}
          keyboardType="phone-pad"
        />
        <Text style={styles.label}>Message *</Text>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={(text) => setMessage(text)}
          multiline
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* <LocationCard /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: "#333",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  submitButton: {
    backgroundColor: "#34be82",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    borderBottomWidth: 1,
    borderBottomColor: "#3498db",
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#7DBE80",
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 16,
    marginBottom: 16,
  },

  section: {
    marginBottom: 8,
  },
  subText:{
    color:'white'
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    marginBottom: 0,
    color: "white",
  },
});

export default ContactUs;
