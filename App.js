
import react, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
// import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import LoginScreen from './src/screens/LoginScreen';

import Feeds from './src/screens/Feeds';
import DetailPage from './src/screens/DetailPage';
import Profile from './src/screens/Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Init } from './src/store/actions';
import { store } from './src/store';
import { ActivityIndicator } from 'react-native-paper';
import Colors from './src/constants/Colors';

const Stack = createNativeStackNavigator();
// const Stack2 = createSharedElementStackNavigator();

const options = {};

const MyStack = () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Feeds' component={Feeds} />
      <Stack.Screen name='Detail' component={DetailPage} 
        options ={{
          gestureEnabled: true,
          transitionSpec: {
            opene: {animation: 'timing', config: {duration: 300}},
            close: {animation: 'timing', config: {duration: 300}},
          },
          cardStyleInterpolator: ({current: {progress}}) => {
            return {
              cardStyle: {
                opacity: progress,
              }
            }
          }
        }}/>
        <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen}/>
    </Stack.Navigator>
  )
}

const RootNavigation = () => {
  const token = useSelector(state => state.AuthReducers.authToken);
  console.log(token);
  const [loading, setLoading] = useState(true); 

  const dispatch = useDispatch();
  const init = async() => {
    await dispatch(Init());
    setLoading(false);
  }

  useEffect(() => {
    init()
  }, [])

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size='large' color={Colors.primary}/>
      </View>
    )
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" backgroundColor='black'/>
      {
        token === null ?
      <AuthStack/> : <MyStack/>
      }
      
    </NavigationContainer>
  );
}


export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation/>
    </Provider>
  );
}

