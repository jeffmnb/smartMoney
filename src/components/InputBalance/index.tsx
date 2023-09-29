import React, { useState } from 'react';

import {
    Container,
    TextInputBalance
} from './styles';

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../theme';

import CurrencyInput from 'react-native-currency-input';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { currencySelected } from '../../services/currenciesConfig';
import { Text } from 'react-native';

export const InputBalance = ({ onchancetext, value }) => {

    return (
        <Container>
            {
                currencySelected == 'Real'
                    ?
                    <Text style={{ fontSize: RFValue(32), fontFamily: theme.fonts.Bold, color: theme.colors.white }}>R$</Text>
                    :

                    < FontAwesome
                        style={{ paddingRight: 20 }}
                        name={
                            currencySelected == 'Dólar' ? 'dollar'
                                : currencySelected == 'Euro' && 'euro'
                        }
                        size={RFValue(32)} color={theme.colors.white}
                    />}

            <CurrencyInput
                style={{
                    height: heightPercentageToDP('11'),
                    width: widthPercentageToDP('58'),
                    fontSize: RFValue(30),
                    color: theme.colors.white,
                    fontFamily: theme.fonts.Bold,
                    textAlign: 'right',
                    paddingRight: widthPercentageToDP('5'),
                }}
                value={value}
                onChangeValue={onchancetext}
                delimiter="."
                separator=","
                precision={2}
                minValue={0}
            />

            {/* <TextInputBalance keyboardType='numeric' onChangeText={onchancetext} /> */}
        </Container>
    );
}