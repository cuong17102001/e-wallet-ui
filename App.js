import React, { useState } from 'react';

import { Home, SignUp } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Tabs from "./navigation/tabs";
import { IoSite } from './screens/IoSite';
import { useStore } from "./store";


import {
  StyleSheet
} from "react-native";
import { Menu } from './screens/Menu';
import { MyQrcode } from './screens/MyQrcode';
import { payment } from './screens/payment';
import { successPaypment } from './screens/successPaypment';


const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent",
  },
};

const Stack = createStackNavigator();

export default function App() {

  const users = useStore((state) => state.users)

  const [loaded] = useFonts({
    "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
    "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
  })
   
  if(!loaded){
    return null;
  }
  

  return  (
    <>
    {users != null ? 
    
    <NavigationContainer theme={theme}>
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName={'SignUp'}
    >
        {/* <Stack.Screen name="SignUp" component={SignUp} /> */}

        {/* Tabs */}
        <Stack.Screen name="HomeTabs" component={Tabs} />

        <Stack.Screen name="IoSite" component={IoSite} />

        <Stack.Screen name="Menu" component={Menu} />

        <Stack.Screen name="MyQrcode" component={MyQrcode} />

        <Stack.Screen name="Payment" component={payment} />

        <Stack.Screen name="Success" component={successPaypment} />

        {/* <Stack.Screen name="Scan" component={Scan} /> */}
    </Stack.Navigator>
</NavigationContainer> : <SignUp/>
  }
      
      </>
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
