import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { COLORS } from '../theme/theme';

const WelcomeScreen = ({ navigation }:any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Chuyển đến màn hình Login sau 3 giây
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:COLORS.primaryBlackHex }}>
    <Image   style={{width:100,height:100}}  source={require('../assets/app_images/avt.png')} />
    </View>
  );
};

export default WelcomeScreen;
