import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native';
import {  AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import SideDrawer from '../screens/SideDrawer';

import Captains from '../screens/Captains';
import LGCHistory from '../screens/LGCHistory';
import ClubAffliation from '../screens/ClubAffliation';
import ContactUs from '../screens/ContactUs';
import Secratries from '../screens/Secratries';
import OurTeam from '../screens/OurTeam';
import MemberShip from '../screens/Membership';
import ManagingComitee from '../screens/ManagingComitee';
import LoginScreen from '../screens/LoginScreen';
import LatestUpdate from '../screens/LatestUpdate';
import HoleInOne from '../screens/HoleInOne';
import DressCode from '../screens/DressCode';
import CourseRule from '../screens/CourseRule';
import HomeNew from '../screens/HomeNew';
import Facilities from '../screens/Facilities';
import { Image } from 'expo-image';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export const Root = () => {
  return (
    <Drawer.Navigator drawerStyle={{ backgroundColor: '#f8f8f8' }}
      drawerContent={(props) => <SideDrawer {...props} />}
    >
      <Drawer.Screen name="Home" headerShown={false} component={TabNav} options={{
        drawerLabel: 'First page Option', title: <Image
          style={{
            height: 30,
            width: 150,
            // borderRadius: 50,
            // marginBottom:10,
            // resizeMode: "contain"
          }}
          source={require("../assets/LogoIcon.png")}
        />, drawerIcon: ({ tintColor }) => (
          <Image
            style={{
              height: 30,
              width:150,
              // borderRadius: 50,
              // marginBottom:10,
              // resizeMode: "contain"
            }}
            source={require("../assets/LogoIcon.png")}
          />
        ),
      }} />
    </Drawer.Navigator>
  );
}

export const TabNav = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Main" component={Dashboard} options={{
        headerShown: false,
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="ManagingComitee" component={ManagingComitee} options={{
        headerShown: false,
        tabBarLabel: 'ManagingComitee',
        tabBarIcon: ({ color }) => (
          <AntDesign name="addusergroup" size={26} color={color} />
        ),
      }} />
    </Tab.Navigator>
  );
}

export const  MainStack = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator>
          <Stack.Screen name="HomePage" component={Root} options={{ headerShown: false }} />
          {/* <Stack.Screen name="Dashboard" component={Dashboard}  /> */}
          <Stack.Screen name="Captains" component={Captains} options={{title:"Captains" }} />
          <Stack.Screen name="ClubAffliation" component={ClubAffliation} options={{ title:"Club Affliation" }} />
          <Stack.Screen name="ContactUs" component={ContactUs}   options={{ title:"Contact Us" }}/>
          <Stack.Screen name="CourseRule" component={CourseRule}  options={{ title:"Course Rule" }}/>  
          <Stack.Screen name="DressCode" component={DressCode}  options={{ title:"Dress Code" }}/>
          <Stack.Screen name="HoleInOne" component={HoleInOne}  options={{ title:"Hole In One" }}/>
          <Stack.Screen name="LatestUpdate" component={LatestUpdate}  options={{ title:"Latest News" }}/>
          <Stack.Screen name="LGCHistory" component={LGCHistory}  options={{ title:"History" }}/>
          <Stack.Screen name="LoginScreen" component={LoginScreen}  options={{ title:"Member Login" }}/>
          <Stack.Screen name="ManagingComitee" component={ManagingComitee} options={{ title:"Managing Commitee" }} />
          <Stack.Screen name="Membership" component={MemberShip} />
          <Stack.Screen name="OurTeam" component={OurTeam}  options={{ title:"Our Team" }}/>
          <Stack.Screen name="Secratries" component={Secratries} />
          <Stack.Screen name="Login" component={Login} options={{title:"Login" }} />
          <Stack.Screen name="facilities" component={Facilities} options={{ title:"Facilities" }}/>
        </Stack.Navigator>
    </SafeAreaView>

  );
}


