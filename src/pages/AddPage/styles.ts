import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../../theme';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.darkMarin};
`;

export const LabelBalance = styled.Text`
    font-family:${theme.fonts.Bold};
    font-size: ${RFValue(19)};
    color: ${theme.colors.white};
    align-self: center;
    margin-top:${hp('7')};
    margin-bottom:${hp('2')};
`;

export const PanelBalance = styled.View`
    align-self: center;
    width: ${wp('65')};
    height: ${hp('7.5')};
    border-radius:${wp('3')};
    justify-content:center;
    align-items: center;
`;

export const TxtValue = styled.Text`
    font-family:${theme.fonts.Regular};
    font-size: ${RFValue(29)};
    color: ${theme.colors.white};
`;

export const SelectCategory = styled.TouchableOpacity`
    margin-top:${hp('5')};
    align-self:center;
    width:${wp('75')};
    height:${hp('10.5')};
    border-radius:${wp('3')};
    background-color: ${theme.colors.marinho};
    justify-content:center;
    align-items:center;
`;

export const TxtSelect = styled.Text`
        font-family:${theme.fonts.Regular};
        font-size:${RFValue(22)};
        color:${theme.colors.white};
`;

export const CamBottom = styled.TouchableOpacity`
    width:${RFValue(60)};
    height:${RFValue(60)};
    border-radius:${RFValue(30)};
    justify-content: center;
    align-items: center;
    border-width: ${RFValue(2)};
    border-color:${theme.colors.marinho};
`;

export const LocationBottom = styled.TouchableOpacity`
    width:${RFValue(60)};
    height:${RFValue(60)};
    border-radius:${RFValue(30)};
    justify-content: center;
    align-items: center;
    margin-left:${RFValue(30)};
    border-width: ${RFValue(2)};
    border-color:${theme.colors.marinho};
`;

export const ButtonSave = styled.TouchableOpacity`
    width: ${wp('40')};
    height:${hp('6')};
    border-radius:${wp('20')};
    border-width: ${RFValue(2)};
    border-color:${theme.colors.green};
    justify-content:center;
    align-items: center;
`;

export const TxtButtonSave = styled.Text`
    font-family:${theme.fonts.Regular};
    color:${theme.colors.green};
    font-size:${RFValue(15)};
`;

export const TxtCancel = styled.Text`
    font-family:${theme.fonts.Bold};
    color:${theme.colors.white};
    font-size:${RFValue(15)};
    margin-left:${wp('12')};
`;

export const ButtonChoose = styled.TouchableOpacity`
    width: ${wp('31')};
    height:${hp('5.8')};
    border-radius:${wp('20')};
    border-width: ${RFValue(2)};
    border-color:${theme.colors.marinho};
    justify-content:center;
    align-items: center;
`;

export const TxtButtonChoose = styled.Text`
    font-family:${theme.fonts.Regular};
    color:${theme.colors.white};
    font-size:${RFValue(15)};
`;

export const TxtDescription = styled.Text`
    text-align: center;
    font-family:${theme.fonts.Bold};
    color:${theme.colors.white};
    font-size:${RFValue(19)};
`;

export const InputDescription = styled.TextInput`
    align-self:center;
    width:${wp('75')};
    height:${hp('7')};
    border-radius:${wp('3')};
    margin-top:${hp('3')};
    background-color:${theme.colors.darkMarin};
    padding-left:${wp('5')};
    font-family:${theme.fonts.Regular};
    color:${theme.colors.white};
    font-size:${RFValue(15)};
`;