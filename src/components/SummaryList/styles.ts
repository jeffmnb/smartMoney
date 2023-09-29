import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../../theme';

export const Container = styled.View`
    flex: 1;
    height: ${hp('4')};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    padding: ${RFValue(5)}px;
`;

export const Label = styled.Text`
    font-family: ${theme.fonts.Regular};
    color: ${theme.colors.white};
    margin-left: ${RFValue(8)};
`;

export const Value = styled.Text`
    font-family: ${theme.fonts.Bold};
    color: ${theme.colors.white};
    font-weight: bold;
    padding-right: ${RFValue(10)};
`;
