import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import InstaStory from "react-native-insta-story";
import TransactionCard from "../Components/TransactionCard";
import MyActivity from "../Components/HomePage/MyActivity";
import { LinearGradient } from "expo-linear-gradient";
import DashboardCard from "../Components/HomePage/DashboardCard";
import TestimonialNew from "../Components/HomePage/TestimonialNew";
import { useEffect, useState } from "react";
import NoDataFound from "../Components/NoDataFound";
import { Image } from "expo-image";

const HomeNew = () => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    FetchData()
  }, [])

  const FetchData = () => {
    setLoading(true)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token 1435a113995b2c25c2376646e271312f1873a674");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "App": 1,
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("https://stgadmin.sasone.in/api/LGCfrontend/HomePage", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === "Success" && result.status_code === 200) {
          setData(result.data)
        }
        else {
          setData("")
        }
      })
      .catch(error => console.log('error', error)).finally(() => setLoading(false))
  }




  const renderFacilityItem = ({ item }) => (
    <View style={styles.facilityItem}>
      <Image source={item.FacilityImageWeb} style={styles.facilityImage} />
      <LinearGradient
        colors={["red", "green"]} 
        style={styles.facilityItem}
      >
        <Text style={styles.facilityName}>{item.FacilitySectionName}</Text>
      </LinearGradient>
    </View>
  );
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View>
        {isLoading ? (
          <ActivityIndicator size="large" style={styles.loader} color="#34be82" />
        ) : <>
          {data ? <View>
            <View style={styles.welcomeMessage}>
              <Text style={styles.welcomeMessageText}>Hello Good Morning, </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Text style={styles.welcomeName}>Avinash</Text>
              </ScrollView>
            </View>
            <View style={styles.containner}>
              <Text style={{ fontSize: 20,  marginTop:-8 , fontFamily:'Roboto-Bold'}}>Latest News</Text>
              <InstaStory storyContainerStyle={{margin:0}} storyImageStyle={{  objectFit:'contain'}} unPressedBorderColor={'#7DBE80'} data={data.LatestUpdatesApp} duration={10} />
            </View>
            <View style={styles.containner}>
              <Text style={{ fontSize: 20,fontFamily: 'Roboto-Bold', marginBottom: 8, marginTop:-8 }}>My Activity</Text>
              <MyActivity />
            </View>
            <View style={styles.containner}>
              <Text style={{ fontSize: 20, fontFamily: 'Roboto-Bold', paddingBottom: 8 }}>
                Recent Transactions
              </Text>
              <TransactionCard />
            </View>
            {data.Facilities.length > 0 && <View style={styles.containner}>
              <Text style={{ fontSize: 20, fontFamily: 'Roboto-Bold', paddingBottom: 8 }}>
                Facilities
              </Text>

              <View style={{ alignItems: "center" }}>
                <Carousel
                  data={data.Facilities}
                  renderItem={renderFacilityItem}
                  layout={"stack"}
                  sliderWidth={450}
                  itemWidth={300}
                  loop={true}
                  autoplay={true}
                  autoplayInterval={1000}
                />
              </View>
            </View>}
            <View style={{ backgroundColor: "#EDEDED", paddingVertical: 15 }}>
              <View style={{ width: "90%", alignSelf: "center" }}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <DashboardCard text={'Dashboard'} Type={"AntDesign"} icon={'apps'} />
                  <DashboardCard text="Golf Booking" Type={"AntDesign"} icon={"golf"} />
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <DashboardCard text={"Biils and Transaction"} Type={"AntDesign"} icon={"bank-transfer"} />
                  <DashboardCard text={'Service Request'} Type={"AntDesign"} icon={"headphones"} />
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <DashboardCard text={'Account Recharge'} Type={"AntDesign"} icon={"credit-card"} />
                  <DashboardCard text={'staff Directory'} Type={"AntDesign"} icon={"account-group"} />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 20, marginBottom: 10, paddingHorizontal: 16 }}>
              <Text style={{ fontSize: 20, fontFamily: 'Roboto-Bold' }}>Testimonials</Text>
              <TestimonialNew data={data.testimonial} />
            </View>
          </View> : <NoDataFound />}</>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containner: {
    width: "90%",
    alignSelf: "center",
    paddingVertical: 10,
  },
  welcomeMessage: {
    padding: 10,
    paddingHorizontal: 20,
  },
  transactionBox: {
    padding: 10,
    paddingHorizontal: 20,
    paddingBottom: 30,
    height: 200,
    width: "100%",
  },
  welcomeMessageText: {
    fontSize: 25,

    fontFamily:'Roboto-Bold'
  },
  welcomeName: {
    fontSize: 20,
    color: "green",
    fontFamily:'Roboto-Regular'
  },
  headingMain: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  balanceArea: {
    width: "100%",

    marginTop: 10,
    borderRadius: 3,
  },
  lastupdate: {
    color: "#34be82",

    fontSize: 12,
    padding: 10,
    fontStyle: "italic",
  },
  amountStatus: {
    fontSize: 25,
    fontFamily: 'Roboto-Bold',
    padding: 20,
    color: "white",
  },
  facilityItem: {
    position: "relative", // Ensure the container is a positioned container
    marginBottom: 10,
  },
  facilityImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  facilityName: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: "transparent", // Adjust background color for better readability
    padding: 10,
    color: "#fff", // Adjust text color
    textAlign: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
export default HomeNew;
