import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../../theme';

export const Container = styled.TouchableOpacity`
    width: ${RFValue(55)};
    height:${RFValue(55)};
    border-radius: ${RFValue(30)};
    background-color: ${theme.colors.green};
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    top: ${hp('27.8')};
    position: absolute;
    right: 15;
`;
