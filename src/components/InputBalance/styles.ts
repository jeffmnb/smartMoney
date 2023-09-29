import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../../theme';

export const Container = styled.View`
    width:${wp('75')};
    height:${hp('11')};
    background-color: ${theme.colors.marinho};
    padding-left:${RFValue(20)};
    align-self: center;
    margin-top:${hp('6')};
    border-radius:${wp('3')};
    justify-content: space-between;
    align-items: center;
    flex-direction:row;  
`;

export const TextInputBalance = styled.TextInput`
    height:${hp('11')};
    width:${wp('58')};
    font-size:${RFValue(30)};
    color: ${theme.colors.white};
    font-family:${theme.fonts.Bold};
    text-align: right;
    padding-right:${wp('5')};
`;