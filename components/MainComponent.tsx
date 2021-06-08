import {Platform, Text, View} from "react-native";
import {Constants} from "react-native-unimodules";
import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./HomeComponent";
import {DishDetail} from "./DishDetailComponent";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
export default function Main() {


    return (
        <View style={{flex: 1}}>
            <MainNavigator/>
        </View>
    );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <BottomTab.Navigator  initialRouteName={"Home"}>
                <BottomTab.Screen name={"Home"} component={Home}/>
                <BottomTab.Screen name={"DishDetail"} options={{title: 'Dish Detail'}} component={DishDetail}/>
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}

