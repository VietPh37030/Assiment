import { StatusBar, StyleSheet, TextInput, TouchableOpacity, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, BORDERRADIUS } from '../theme/theme'

const RegisterScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (password !== rePassword) {
      setError('Passwords do not match');
      return; // Kết thúc hàm nếu mật khẩu không khớp
    }

    const data = {
      name: name,
      email: email,
      password: password,
    };

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        // Xử lý kết quả từ API (nếu cần)
        console.log('Success:', data);
        // Sau khi gửi dữ liệu thành công, bạn có thể thực hiện các hành động khác ở đây, ví dụ: chuyển hướng người dùng đến màn hình đăng nhập.
        // navigation.navigate('Login');
      })
      .catch(error => {
        // Xử lý lỗi (nếu có)
        console.error('Error:', error);
      });
  };

  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <Image
        style={styles.LoginImg}
        source={require('../assets/app_images/avt.png')}
      />
      <Text style={styles.title1}>Welcome to Lungo !!</Text>
      <Text style={styles.title2}>Login to Continue</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputTExt}
          placeholder="Name"
          placeholderTextColor={COLORS.primaryLightGreyHex}
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputTExt}
          placeholder="Email"
          placeholderTextColor={COLORS.primaryLightGreyHex}
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputTExt}
          placeholder="Password"
          placeholderTextColor={COLORS.primaryLightGreyHex}
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputTExt}
          placeholder="Re-Password"
          placeholderTextColor={COLORS.primaryLightGreyHex}
          value={rePassword}
          onChangeText={text => setRePassword(text)}
        />
      </View>
      <TouchableOpacity onPress={handleRegister}>
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
          <Text style={styles.loginBtn}>Register</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={styles.title3}>You have an account? Click</Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Login')
        }}>
          <Text style={styles.title4}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
    alignItems: 'center',
    justifyContent: 'center',
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
    borderColor: COLORS.primaryWhiteHex, // Sửa borderBlockColor thành borderColor
    backgroundColor: COLORS.primaryBlackHex,
    margin: 10,
  },
  inputTExt: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14, // Sửa fontSize từ 14 thành 16
    fontWeight: '400',
    lineHeight: 26,
    letterSpacing: 0.5,
    textAlign: 'left',
    color: COLORS.primaryWhiteHex,
  },
  loginBtn: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14, // Sửa fontSize từ 14 thành 16
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
    textAlign: 'left',
    color: COLORS.primaryWhiteHex,
  },
  title3: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12, // Sửa fontSize từ 12 thành 14
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
    textAlign: 'left',
    color: COLORS.primaryWhiteHex,
  },
  title4: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12, // Sửa fontSize từ 12 thành 14
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
    textAlign: 'left',
    color: COLORS.primaryOrangeHex,
    marginLeft: 5,
  },
})
