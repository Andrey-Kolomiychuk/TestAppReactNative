import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { React } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import FeedsScreen from '../screens/FeedsScreen'
import { ProfileScreen } from '../screens/ProfileScreen'
import { LoginScreen } from '../screens/LoginScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const token = 234;

const MyStack = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Feeds') {
          iconName = focused
            ? 'home'
            : 'home-outline'
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
    <Tab.Screen name="Feeds" component={ FeedsScreen } />
    <Tab.Screen name="Profile" component={ ProfileScreen } />
  </Tab.Navigator>
  );
}

const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={ LoginScreen } />
    </Stack.Navigator>
  )
}

export function AppNavigation() {
  return (
    <NavigationContainer>
       {
        token === null ?
          <AuthStack /> : <MyStack />
      }
    </NavigationContainer>
  );
}