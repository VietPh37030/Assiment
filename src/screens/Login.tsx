import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE} from '../theme/theme';
import CustomIcon from '../components/CustomIcon';

const Login = ({navigation}: any) => {
  return (
    <View style={styles.LoginConatainer}>
      <Image
        style={styles.LoginImg}
        source={require('../assets/app_images/avt.png')}
      />
      <Text style={styles.title1}>Welcome to Lungo !!</Text>
      <Text style={styles.title2}>Login to Continue</Text>
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <TextInput
            style={styles.inputTExt}
            placeholder="Emai"
            placeholderTextColor={COLORS.primaryLightGreyHex}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.inputContainer,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}>
        <TouchableOpacity>
          <TextInput
            style={styles.inputPass}
            placeholder="Password"
            placeholderTextColor={COLORS.primaryLightGreyHex}
          />
        </TouchableOpacity>
        <CustomIcon
          name="like"
          size={FONTSIZE.size_16}
          color={COLORS.primaryOrangeHex}
        />
      </View>

      <TouchableOpacity >
        <View
          style={{
            marginTop: 10,
            backgroundColor: COLORS.primaryOrangeHex,
            width: 348,
            height: 57,
            borderRadius: BORDERRADIUS.radius_20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.loginBtn}>Sign In</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Tab');
      }}>
        <View
          style={{
            marginTop: 10,
            backgroundColor: COLORS.primaryWhiteHex,
            width: 348,
            height: 57,
            borderRadius: BORDERRADIUS.radius_20,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 95,
          }}>
          <Image source={require('../assets/app_images/gg.png')} />
          <Text style={styles.loginWGG}>Sign in with Google</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={styles.title3}>Don't have account? Click</Text>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Register')
        }}>
          <Text style={styles.title4}>Register</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={styles.title3}>Forget Password? Click</Text>
        <TouchableOpacity>
          <Text style={styles.title4}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  LoginConatainer: {
    backgroundColor: COLORS.primaryBlackHex,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginImg: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title1: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
    textAlign: 'left',
  },
  title2: {
    color: COLORS.primaryGreyHex,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
    textAlign: 'left',
  },
  inputContainer: {
    width: 350,
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderBlockColor: '#252A32',
    margin: 10,
  },
  inputTExt: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 26,
    letterSpacing: 0.5,
    textAlign: 'left',
    color: COLORS.primaryWhiteHex,
  },
  inputPass: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 26,
    letterSpacing: 0.5,
    textAlign: 'left',
    color: COLORS.primaryWhiteHex,
  },
  loginBtn: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
    textAlign: 'left',
    color: COLORS.primaryWhiteHex,
  },
  loginWGG: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
    color: COLORS.primaryBlackHex,
  },
  title3: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
    textAlign: 'left',
    color: COLORS.primaryWhiteHex,
  },
  title4: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
    textAlign: 'left',
    color: COLORS.primaryOrangeHex,
    marginLeft: 5,
  },
});
