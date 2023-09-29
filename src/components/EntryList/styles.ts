import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../../theme';

export const Container = styled.View`
    background-color: ${theme.colors.marinho};
    height: ${hp('37.2')};
    margin-top: ${hp('1.3')};
    margin-bottom: ${hp('1.3')};
    margin-left: ${RFValue(6)};
    margin-right: ${RFValue(6)};
    border-radius: ${RFValue(5)};
    justify-content: space-between;
    padding-bottom: ${RFValue(5)};
`;

export const LastBalanceTitle = styled.Text`
    margin-bottom: ${hp('2.5')};
    font-family: ${theme.fonts.Bold};
    color: ${theme.colors.white};
    font-size: ${RFValue(13)};
    padding-top:${RFValue(12)};
    padding-left:${RFValue(12)};
`;

export const TitleNotData = styled.Text`
    font-family: ${theme.fonts.Regular};
    text-align: center;
    font-size:${RFValue(16)};
    color:${theme.colors.white};
    margin-top:${hp('10')};
`;