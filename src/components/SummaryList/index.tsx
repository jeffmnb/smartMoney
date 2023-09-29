import React from 'react';
import { View, ViewProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import {
    Container,
    Label,
    Value
} from './styles';


interface SummaryListProps extends ViewProps {
    color: string;
    label: string;
    price: Number | string;
}

export const SummaryList = ({ color, label, price }: SummaryListProps) => {
    return (
        <Container>

            <View style={{ flexDirection: 'row' }}>
                <View style={{
                    width: RFValue(15),
                    height: RFValue(15),
                    borderRadius: RFValue(10),
                    backgroundColor: color
                }} />

                <Label>{label}</Label>
            </View>

            <Value>{price}</Value>

        </Container>
    );
}