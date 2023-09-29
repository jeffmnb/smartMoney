import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../../theme';


export const Container = styled.View`
    width: ${wp('95')};
    height:${hp('16')};
    background-color:${theme.colors.marinho};
    border-radius: ${RFValue(5)};
    justify-content: space-around;
    align-items: center;
`;

export const TitleModal = styled.Text`
    margin-top: ${hp('0.3')};
    margin-bottom: ${hp('2.5')};
    font-family: ${theme.fonts.Bold};
    color: ${theme.colors.white};
    font-size: ${RFValue(14)};
`;

export const TitleItem = styled.Text`
     text-align: center;
    font-family: ${theme.fonts.Bold};
    color: ${theme.colors.white};
    font-size: ${RFValue(24)};
`;

export const TxtValue = styled.Text`
    text-align: center;
    font-family: ${theme.fonts.Bold};
    color: ${theme.colors.white};
    font-size: ${RFValue(28)};
`;


export const TxtBack = styled.Text`
  font-family:${theme.fonts.Bold};
  font-size:${RFValue(14)};
  color:${theme.colors.white};
  align-self: center;
  margin-bottom: ${hp('6')};
`;

export const ButtonGallery = styled.TouchableOpacity`
    width:${RFValue(60)};
    height:${RFValue(60)};
    border-radius:${RFValue(30)};
    justify-content: center;
    align-items: center;
    border-width: ${RFValue(2)};
    border-color:${theme.colors.marinho};
    align-self: center;
    margin-top:${hp('7%')};
`;

export const AreaDetails = styled.View`
    width: ${wp('95')};
    background-color:${theme.colors.marinho};
    border-radius: ${RFValue(5)};
    margin-top: ${hp('1.3')};
`;

export const TxtInfo = styled.Text`
    margin-bottom: ${hp('2.5')};
    font-family: ${theme.fonts.Bold};
    color: ${theme.colors.white};
    font-size: ${RFValue(16)};
    padding-top:${RFValue(12)};
    padding-left:${RFValue(12)};
`;

export const AreaButtons = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom:${hp('6')};
`;

export const ButtonTrash = styled.TouchableOpacity`
    width:${RFValue(60)};
    height:${RFValue(60)};
    border-radius:${RFValue(30)};
    justify-content: center;
    align-items: center;
    border-width: ${RFValue(2)};
    border-color:${theme.colors.marinho};
    align-self: center;
    margin-top:${hp('7%')};
`;

export const EntryDate = styled.Text`   
    margin-left: ${RFValue(5)};
    font-family: ${theme.fonts.Regular};
    color: ${theme.colors.white};
    font-size: ${RFValue(15)};
    margin-right: ${RFValue(5)};
`;

export const EntryHour = styled.Text`
    font-family: ${theme.fonts.Regular};
    color: ${theme.colors.white};
    font-size: ${RFValue(15)};
    margin-left: ${RFValue(5)};
`;

export const EntryLocationTitle = styled.Text`
    font-family: ${theme.fonts.Regular};
    color: ${theme.colors.white};
    font-size: ${RFValue(15)};
    width:${wp('80')};
`;

export const CategoryTitle = styled.Text`
    font-family: ${theme.fonts.Regular};
    color: ${theme.colors.white};
    font-size: ${RFValue(15)};
`;