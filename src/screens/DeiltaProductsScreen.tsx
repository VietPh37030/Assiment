import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DeiltaProductsScreen = ({navigation,route}:any) => {
  console.log('route =',route.params);
  return (
    <View>
      <Text>DeiltaProductsScreen</Text>
    </View>
  )
}

export default DeiltaProductsScreen

const styles = StyleSheet.create({})