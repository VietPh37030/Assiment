import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';
interface GradientIconProps{
    name:string;
    color:string;
    size:number;
    
}
const GradientIcon:React.FC<GradientIconProps>= ({name,color,size}) => {
  return (
    <View style={styles.GradientContainer}>
    <linearGradient 
    start={{x:0,y:0}}
    end={{x:1,y:1}}
    colors={[COLORS.primaryGreyHex,COLORS.primaryBlackHex]}
    style={styles.LinearGradienBG}>
        <CustomIcon name={name} color={color} size={size} />
    </linearGradient>
    </View>
  )
}

export default GradientIcon

const styles = StyleSheet.create({
    GradientContainer:{
            borderWidth:2,
            borderColor:COLORS.secondaryDarkGreyHex,
            borderRadius:SPACING.space_12,
            alignItems:'center',
            backgroundColor:COLORS.secondaryDarkGreyHex,
            overflow:'hidden'
    },
    LinearGradienBG:{
        height:SPACING.space_36,
        width:SPACING.space_36,
        alignItems:'center',
        justifyContent:'center'
    },
})