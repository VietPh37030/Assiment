import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import PayScreen from './src/screens/PayScreen'
import DeiltaProductsScreen from './src/screens/DeiltaProductsScreen'
import TabNavigation from './src/navigators/TabNavigation'
PayScreen
DeiltaProductsScreen
TabNavigation
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator  screenOptions={{headerShown:false}}>
      <Stack.Screen name='Tab' component={TabNavigation}  options={{animation:'slide_from_bottom'}}></Stack.Screen>
      <Stack.Screen name='Deilta' component={DeiltaProductsScreen}  options={{animation:'slide_from_bottom'}}></Stack.Screen>
      <Stack.Screen name='Payment' component={PayScreen}  options={{animation:'slide_from_bottom'}}></Stack.Screen>
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})