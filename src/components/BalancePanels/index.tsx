import React from 'react';

import {
    Container,
    BalancePanelLabel,
    LabelBalance,
    LabelTotal,
    AreaCoin
} from './styles';

import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../theme';
import { BalancePanelChart } from '../BalancePanelChart';
import { Modal, Text, View } from 'react-native';

import { currencySelected, realBRLocale, dollarUSLocale, euroEULocale } from '../../services/currenciesConfig';

import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface BalancePanelProps {
    total: number | string;
    onpress: () => void;
}

export const BalancePanel = ({ total, onpress }: BalancePanelProps,) => {

    return (
        <Container>

            <LinearGradient style={{ flex: 1, justifyContent: 'space-between', width: '100%' }} colors={[theme.colors.purple, theme.colors.blue]}>

                <BalancePanelLabel>
                    <LabelBalance>Saldo atual</LabelBalance>

                    <LabelTotal>
                        {
                            currencySelected == 'Real'
                                ?
                                realBRLocale.format(total).replace(/^(\D+)/, '$1 ')
                                : currencySelected == 'Dólar'
                                    ?
                                    dollarUSLocale.format(total).replace(/^(\D+)/, '$1 ')
                                    : currencySelected == 'Euro'
                                    &&
                                    euroEULocale.format(total).replace(/^(\D+)/, '$1 ')
                        }
                    </LabelTotal>
                </BalancePanelLabel>

                <BalancePanelChart />

                <AreaCoin>
                    <Ionicons onPress={onpress} name="earth" size={RFValue(22)} color={theme.colors.white} />
                </AreaCoin>

            </LinearGradient>

        </Container >


    );
}