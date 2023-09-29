import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../../theme';

export const Container = styled.View`
    flex:1;
    background-color: ${theme.colors.darkMarin};
`;

export const TxtModalCurrency = styled.Text`
    font-family:${theme.fonts.Bold};
    font-size:${RFValue(16)};
    color:${theme.colors.white};
    text-align:center;
    margin-bottom:${hp('2')};
`;

export const BtnCurrency = styled.TouchableOpacity`
    width:${wp('50')};
    height: ${hp('6')};
    border-radius: ${wp('2')};
    background-color: ${theme.colors.marinho};
    align-self: center;
    justify-content: center;
    align-items: center;
    margin-top:${hp('3')};
`;

export const TxtCurrency = styled.Text`
    font-family:${theme.fonts.Regular};
    font-size:${RFValue(16)};
    color:${theme.colors.white};
`;