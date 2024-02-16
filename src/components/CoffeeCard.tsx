import {
  Dimensions,
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import CustomIcon from './CustomIcon';
import GradientBGIcon from './GradientBGIcon';
import BGIcon from './BGIcon';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;

interface CoffeCardProps {
  id: string;
  index: number;
  type: string;
  roasted: string;
  imagelink_square: ImageProps;
  name: string;
  special_ingredient: string;
  average_rating: number;
  price: any;
  buttonPressHandler: any;
}

const CoffeeCard: React.FC<CoffeCardProps> = ({
  id,
  index,
  type,
  roasted,
  imagelink_square,
  name,
  special_ingredient,
  average_rating,
  price,
  buttonPressHandler,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.CardLinearContainer}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
      <ImageBackground
        source={imagelink_square} // Assuming imageLink_square is a URI string
        style={styles.CardImgBG}
        resizeMode="cover">
        <View style={styles.CardRatingContainer}>
          <CustomIcon
            name={'star'}
            color={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_16}
          />
          <Text style={styles.CardRatingText}>{average_rating}</Text>
        </View>
        {/* Content of your CoffeeCard */}
      </ImageBackground>
      <Text style={styles.CardTitle}>{name}</Text>
      <Text style={styles.CardSubTitle}>{special_ingredient}</Text>
      <View style={styles.CardFooterRow}>
        <Text style={styles.CardPriceCurrency}>$
        <Text style={styles.CardPrice}>
           <Text >{price.price}</Text>
        </Text>
       
        </Text>
        <TouchableOpacity onPress={()=>{

        }}>
            <BGIcon
              color={COLORS.primaryWhiteHex}
              name={'add'}
              BGColor={COLORS.primaryOrangeHex}
              size={FONTSIZE.size_10}
            />
          </TouchableOpacity>
      </View>
    </LinearGradient>
    
  );
};

export default CoffeeCard;

const styles = StyleSheet.create({
  CardLinearContainer: {
    padding:SPACING.space_15,
    borderRadius:BORDERRADIUS.radius_25,
  },
  CardImgBG: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
  },
  CardRatingContainer: {
    flexDirection:'row',
    backgroundColor: COLORS.primaryBlackRGBA,
    justifyContent: 'center',
    alignItems: 'center',
    gap:SPACING.space_10,
    paddingHorizontal:SPACING.space_15,
    position:'absolute',
    borderBottomLeftRadius:BORDERRADIUS.radius_20,
    borderTopRightRadius:BORDERRADIUS.radius_20,
    top:0,
    right:0,
  },
  CardRatingText: {
    fontFamily:FONTFAMILY.poppins_medium,
    color:COLORS.primaryWhiteHex,
    lineHeight:22,
    fontSize:FONTSIZE.size_14,
  },
  CardFooterRow:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:SPACING.space_2,
  },
  CardTitle:{
    fontFamily:FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_14,
    lineHeight:24,

  },
  CardSubTitle:{
    fontFamily:FONTFAMILY.poppins_light,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_10,

  },
  CardPriceCurrency:{  
    fontFamily:FONTFAMILY.poppins_semibold,
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_18,},
  CardPrice:{ color: COLORS.primaryWhiteHex,},
});
