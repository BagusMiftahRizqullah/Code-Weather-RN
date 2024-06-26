import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StyleSheet, Text, LogBox} from 'react-native';
// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// Screen
import {
  SplashScreen,
  Home,
  Search,
  Setting,
  CuzUnit,
  DifWeather,
} from './Screen';
import {navigationRef} from '../src/Function/Nav';
const Stack = createStackNavigator();

const Root = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="SearchScreen" component={Search} />
        <Stack.Screen name="SettingScreen" component={Setting} />
        <Stack.Screen name="SettingUnit" component={CuzUnit} />
        <Stack.Screen name="SettingWeather" component={DifWeather} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
