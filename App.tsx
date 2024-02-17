import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import PayScreen from './src/screens/PaymentScreen'
import DeiltaProductsScreen from './src/screens/DetailsScreen'
import TabNavigation from './src/navigators/TabNavigation'
import WelcomeScreen from './src/screens/WelcomeScreen'
RegisterScreen
import Login from './src/screens/Login'
import RegisterScreen from './src/screens/RegisterScreen'
WelcomeScreen
Login
PayScreen
DeiltaProductsScreen
TabNavigation
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator  screenOptions={{headerShown:false}}>
     <Stack.Screen name='Welcome' component={WelcomeScreen} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Tab' component={TabNavigation}  options={{animation:'slide_from_bottom'}}></Stack.Screen>
      <Stack.Screen name='Details' component={DeiltaProductsScreen}  options={{animation:'slide_from_bottom'}}></Stack.Screen>
      <Stack.Screen name='Payment' component={PayScreen}  options={{animation:'slide_from_bottom'}}></Stack.Screen>
      <Stack.Screen name='Register' component={RegisterScreen}  options={{animation:'slide_from_bottom'}}></Stack.Screen>
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})