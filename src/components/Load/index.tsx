import React from 'react';

import {
    Container
} from './styles';

import LottieView from 'lottie-react-native';

import Loading from '../../assets/load.json';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export const Load = () => {
    return (
        <Container>
            <LottieView source={Loading} style={{ width: widthPercentageToDP('90') }} autoPlay loop />
        </Container>
    );
}