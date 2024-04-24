import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HoleInOneTable = ({ data }) => {
  const dateHandler = (date) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const monthNameLong = dateObj.toLocaleString("en-US", { month: "short" });
    const year = dateObj.getFullYear();
    return (day <= 9 ? "0" : "") + day + "-" + monthNameLong + "-" + year;
  };
  return (
    <View style={styles.container}>
      {/* Table Header */}
      {/* <View style={styles.tableRow}>
        <Text style={styles.headerCell}>S.No</Text>
        <Text style={styles.headerCell}>Name of Member</Text>
        <Text style={styles.headerCell}>Hole No.</Text>
        <Text style={styles.headerCell}>Date</Text>
      </View> */}

      {/* Table Body */}
      {data.map((row, index) => (
        <View key={index} style={styles.tableRow}>
          {/* <Text style={styles.cell}>{index+1}</Text> */}
  <View>
    <View style={{display:'flex', flexDirection:'row'}}>
    {/* <Text style={{ fontWeight:'bold'}}>Name : </Text> */}
    <Text style={styles.headerCell}>{row.MemberName}</Text>
      </View>
      <View style={{display:'flex', flexDirection:'row'}}>
    <Text style={styles.cell}>Hole No. : </Text>
    <Text style={styles.cell}>{row.HoleNo}</Text>
      </View>
  </View>
          <Text style={styles.cell}>{dateHandler(row.Date)}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%', // Make the width full screen
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderStyle:'dotted',
        borderBottomColor: '#AAD9BB',
        paddingVertical: 8,
      },
      headerCell: {
        // flex: 1, // Each cell takes up equal width
        fontSize: 18,
        // fontWeight: 'bold',
 
      },
      cell: {
        // flex: 1, // Each cell takes up equal width
        fontSize: 16,
        color: '#555',
      },
});

export default HoleInOneTable;
