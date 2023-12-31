import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from './Screens/Settings';
import Profile from './Screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login';
import FirstRunWizard from './Screens/FirstRunWizard';
import { useGlobalState } from './store';

//TODO: find out the correct typing for this
type RootStackParamList = {
  Login: undefined;
  FirstRunWizard: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const user = useGlobalState().get();

  const getTabBarIcon = (route, focused, color, size) => {
    switch (route.name) {
      case 'Profile':
        return (
          <Ionicons
            name={focused ? 'md-person-sharp' : 'md-person-outline'}
            size={size}
            color={color}
          />
        );
      case 'Settings':
        return (
          <Ionicons
            name={focused ? 'ios-settings' : 'ios-settings-outline'}
            size={size}
            color={color}
          />
        );
    }
  };

  if (user.email === '') {
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
          tabBarIcon: ({ focused, color, size }) => getTabBarIcon(route, focused, color, size),
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'tomato',
        })}
      >
        <Tab.Screen name="Profile" component={Profile} options={{ headerTitle: 'Profile' }} />

        <Tab.Screen name="Settings" component={Settings} options={{ headerTitle: 'Settings' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
