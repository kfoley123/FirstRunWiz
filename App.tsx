import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./Screens/Settings";
import Profile from "./Screens/Profile";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Screens/Login";
import FirstRunWizard from "./Screens/FirstRunWizard";

type RootStackParamList = {
    Login: undefined;
    FirstRunWizard: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();
// TODO: replace "dog" with data from storage when available
const dog = true;

export default function App() {
    const getTabBarIcon = (route, focused, color, size) => {
        switch (route.name) {
            case "Profile":
                return (
                    <Ionicons
                        name={focused ? "md-person-sharp" : "md-person-outline"}
                        size={size}
                        color={color}
                    />
                );
            case "Settings":
                return (
                    <Ionicons
                        name={focused ? "ios-settings" : "ios-settings-outline"}
                        size={size}
                        color={color}
                    />
                );
        }
    };
    // TODO: replace "dog" with data from storage when available
    if (dog === true) {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }}
                    ></Stack.Screen>
                    <Stack.Screen
                        name="FirstRunWizard"
                        component={FirstRunWizard}
                        options={{
                            headerShown: false,
                        }}
                    ></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: true,
                    tabBarIcon: ({ focused, color, size }) =>
                        getTabBarIcon(route, focused, color, size),
                    tabBarInactiveTintColor: "gray",
                    tabBarActiveTintColor: "tomato",
                })}
            >
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{ headerTitle: "Profile" }}
                />

                <Tab.Screen
                    name="Settings"
                    component={Settings}
                    options={{ headerTitle: "Settings" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
