import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../../theme';

export const Container = styled.View`
    background-color: ${theme.colors.marinho};
    margin-top: ${hp('1.3')};
    margin-left: ${RFValue(6)};
    margin-right: ${RFValue(6)};
    border-radius: ${RFValue(5)};
    justify-content: space-between;
    padding-bottom: ${RFValue(5)};
`;

export const EntrySummaryChart = styled.View`
    
    flex: 1;
    height: ${hp('19.8')};
`;

export const EntrySummaryPanel = styled.View`
    flex: 1.65;
    width: ${wp('60')};
    height: ${hp('19.8')};
`;

export const CategoryTitle = styled.Text`
    margin-bottom: ${hp('2.5')};
    font-family: ${theme.fonts.Bold};
    color: ${theme.colors.white};
    font-size: ${RFValue(13)};
    padding-top:${RFValue(12)};
    padding-left:${RFValue(12)};
`;