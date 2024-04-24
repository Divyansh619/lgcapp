import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import DashboardTransactionCard from '../DashboardTransactionCard';

const HomeDashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Good evening, Divyansh</Text>
        <Text style={styles.subHeaderTextOne}>Welcome to your Golf Dashboard!</Text>
        <Text style={styles.subHeaderText}>
          Here, you can view your outstanding amount, recent transactions, and bills.
        </Text>
      </View>

      {/* Balance Card */}
      <View style={styles.card}>
        <View style={styles.balanceContainer}>
          <View style={styles.balanceText}>
            <Text style={styles.balanceTitle}>Balance Available</Text>
            <Text style={styles.balanceAmount}>- ₹91000</Text>
          </View>
          <View>
            <Image
              source={require("../../assets/logo-1.png")}
              style={styles.logo}
            />
          </View>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Mr. Avinash</Text>
          <Text style={styles.memberId}>Member ID - 1234</Text>
        </View>
      </View>

      {/* Table */}
    <DashboardTransactionCard/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  containerTwo: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#888',
  },
  subHeaderTextOne: {
    fontSize: 16,
    color: '#888',
  },
  card: {
    backgroundColor: '#7DBE80',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
    marginBottom: 20,
    marginTop: 10,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  balanceText: {
    flex: 1,
  },
  balanceTitle: {
    color: 'white',
    fontSize: 16,
  },
  balanceAmount: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
  },
  userInfo: {
    paddingTop: 15,
  },
  userName: {
    color: 'white',
    fontSize: 16,
  },
  memberId: {
    color: '#fcfbdb',
    fontSize: 14,
  },
  logo: {
    height: 80,
    width: 80,
    borderRadius: 5,
  },
 
});

export default HomeDashboard;
