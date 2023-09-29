import React from 'react';

import {
    Container
} from './styles';

import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../theme';

interface ButtonAddProps {
    onpress: () => void;
}

export const ButtonAdd = ({ onpress }: ButtonAddProps) => {
    return (
        <Container onPress={onpress}>
            <MaterialIcons name="add" size={RFValue(40)} color={theme.colors.white} />
        </Container>
    );
}