import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../../theme';

export const Container = styled.View`
    width: 100%;
    height: ${hp('31')};
    background-color: ${theme.colors.marinho};
    justify-content:center;
    align-items: center;
`;

export const BalancePanelLabel = styled.View`
    margin-top: ${hp('6.5')};
`;

export const LabelBalance = styled.Text`
    font-size: ${RFValue(15)};
    color: ${theme.colors.white};
    font-family:${theme.fonts.Bold};
    margin-bottom: ${hp('3.5')};
    text-align: center;
`;

export const LabelTotal = styled.Text`
    font-size: ${RFValue(45)};
    color: ${theme.colors.white};
    text-align: center;
`;


export const AreaCoin = styled.TouchableOpacity`
    position: absolute;
    left: ${wp('4')};
    top:${hp('6.5')};
    justify-content:center;
    align-items: center;
`;