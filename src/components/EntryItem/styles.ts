import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../../theme';

export const Container = styled.TouchableOpacity`
    width: ${wp('86')};
    height: ${RFValue(55)};
    /* background-color: red; */
    align-self:center;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    /* margin-bottom: 5; */
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.Regular};
    font-size: ${RFValue(14)};
    color: ${theme.colors.white};
`;

export const EntryDate = styled.Text`   
    margin-left: ${RFValue(5)};
    font-family: ${theme.fonts.Regular};
    color: ${theme.colors.white};
    font-size: ${RFValue(11.5)};
    margin-right: ${RFValue(5)};
`;

export const EntryHour = styled.Text`
    font-family: ${theme.fonts.Regular};
    color: ${theme.colors.white};
    font-size: ${RFValue(11.5)};
    margin-right: ${RFValue(5)};
`;

export const EntryLocationTitle = styled.Text`
    font-family: ${theme.fonts.Regular};
    color: ${theme.colors.white};
    font-size: ${RFValue(11.5)};
    width: ${RFValue(100)};
`;

export const PriceItem = styled.Text`
    font-family: ${theme.fonts.Bold};
    font-weight: bold;
    color: ${theme.colors.white};
    font-size: ${RFValue(14)}px;
    position: absolute;
    right: 0;
    bottom: ${RFValue(24)}px;
`;

export const Ball = styled.View`
    width: ${RFValue(20)};
    height: ${RFValue(20)};
    border-radius: ${RFValue(10)};
    border-width: 2;
    border-color:${theme.colors.darkMarin} ;
`;