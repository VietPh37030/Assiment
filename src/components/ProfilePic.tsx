import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SPACING } from '../theme/theme'

const Profile = () => {
  return (
    <View style={styles.ImgContainer}>
     <Image source={require('../assets/app_images/avatar.png')} style={styles.Image}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  ImgContainer:{
    height:SPACING.space_36,
    width:SPACING.space_36,
   borderRadius:SPACING.space_12,
   borderWidth:2,
   borderColor:COLORS.secondaryDarkGreyHex,
   alignItems:'center',
   justifyContent:'center',
   backgroundColor:COLORS.secondaryDarkGreyHex,
   overflow:'hidden'
  },
  Image:{
    height:SPACING.space_36,
    width:SPACING.space_36,
  },
})