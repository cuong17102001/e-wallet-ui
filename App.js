import React from 'react';

import { SignUp } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Tabs from "./navigation/tabs";
import { IoSite } from './screens/IoSite';


import {
  StyleSheet
} from "react-native";


const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent",
  },
};

const Stack = createStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
    "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
  })

  if(!loaded){
    return null;
  }
  return (
      <NavigationContainer theme={theme}>
          <Stack.Navigator
              screenOptions={{
                  headerShown: false
              }}
              initialRouteName={'SignUp'}
          >
              <Stack.Screen name="SignUp" component={SignUp} />

              {/* Tabs */}
              <Stack.Screen name="HomeTabs" component={Tabs} />

              <Stack.Screen name="IoSite" component={IoSite} />

              {/* <Stack.Screen name="Scan" component={Scan} /> */}
          </Stack.Navigator>
      </NavigationContainer>
  )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
