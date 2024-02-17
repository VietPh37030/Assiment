import { StyleSheet } from "react-native";

const st = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    logo: {
        resizeMode: 'contain',
        width: 100,
        height: 100,
        marginTop: 40
    },

    welcome: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 26,
        letterSpacing: 0.50,
        marginTop: 10
    },

    loginToCountinue: {
        color: '#828282',
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 26,
        letterSpacing: 0.50,
    },

    emailPass: {
        borderRadius: 8,
        borderWidth: 1,
        width: '90%',
        marginTop: 31,
        paddingLeft: 17,
        paddingVertical: 11,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 26,
        letterSpacing: 0.50,
        color: '#828282',
    },

    pass: {
        width: '100%',
        alignItems: 'center',
        marginTop: 16
    },

    icon: {
        position: 'absolute',
        right: 40,
        top: 12
    },

    iconImage: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
    },

    btnSignIn: {
        backgroundColor: '#D17842',
        height: 57,
        marginTop: 41,
        width: '90%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    signInText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 26,
        letterSpacing: 0.50,
    },

    signInGG: {
        height: 57,
        width: '90%',
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginTop: 9,
        flexDirection: 'row'
    },

    ggIcon: {
        marginLeft: 25
    },

    signInGGText: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 26,
        letterSpacing: 0.50,
        color: '#121212',
        marginLeft: '20%'
    },

    bottomText: {
        color: '#828282',
        fontWeight: '700',
        lineHeight: 26,
        letterSpacing: 0.50
    },

    registerReset: {
        marginTop: 31,
        flexDirection: 'row'
    }


})

export default st