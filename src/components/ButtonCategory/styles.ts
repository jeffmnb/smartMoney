import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../../theme';

export const Container = styled.TouchableOpacity`
    width:${wp('50')};
    height:${hp('8')};
    border-radius:${wp('3')};
    align-self:center ;
    background-color:${theme.colors.darkMarin} ;
    justify-content: center;
    align-items: center;
    margin-bottom: ${hp('3')};
`;

export const TxtButton = styled.Text`
    font-family:${theme.fonts.Bold};
    color:${theme.colors.white};
    font-size:${RFValue(19)};
`;    