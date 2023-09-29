import React from 'react';
import { Text, View } from 'react-native';

import {
    Container,
    Title,
    EntryDate,
    EntryHour,
    EntryLocationTitle,
    PriceItem,
    Ball
} from './styles';

import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../theme';
import { color } from 'react-native-reanimated';
import { currencySelected, dollarUSLocale, euroEULocale, realBRLocale } from '../../services/currenciesConfig';

interface EntryItemProps {
    start: boolean;
    middle: boolean;
    end: boolean;
    title: string;
    value: number;
    color: string;
    date?: string;
    hour?: string;
    location: string;
    onpress: () => void;
}

export const EntryItem = ({ start, end, middle, color, title, value, date, hour, location, onpress }: EntryItemProps) => {
    return (
        <Container onPress={onpress}>

            <View style={{ width: 50, height: '100%', justifyContent: 'center', alignItems: 'center' }} >


                {
                    start
                    &&
                    <>

                        <View style={{ width: RFValue(2), height: RFValue(7), backgroundColor: 'transparent' }} />


                        <Ball style={{ backgroundColor: color }} />

                    </>
                }


                {
                    middle
                    &&
                    <>
                        <View style={{ width: RFValue(2), height: RFValue(35), backgroundColor: theme.colors.darkMarin }} />

                        <Ball style={{ backgroundColor: color }} />

                        <View style={{ width: RFValue(2), height: RFValue(30), backgroundColor: theme.colors.darkMarin }} />
                    </>
                }

                {
                    end
                    &&
                    <>
                        <View style={{ width: RFValue(2), height: RFValue(25), backgroundColor: theme.colors.darkMarin }} />

                        <Ball style={{ backgroundColor: color }} />

                        <View style={{ width: RFValue(2), height: RFValue(15), backgroundColor: 'transparent' }} />

                    </>
                }

            </View>

            <View style={{ height: RFValue(50), marginLeft: RFValue(10), justifyContent: 'space-around', alignItems: 'flex-start' }}>

                <Title>{title}</Title>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name="clock-o" size={RFValue(14.5)} color={theme.colors.white} />

                        <EntryDate>{date}</EntryDate>

                        <EntryHour>{hour}</EntryHour>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="location-sharp" size={RFValue(16)} color={theme.colors.white} />

                        <EntryLocationTitle numberOfLines={1}>{location}</EntryLocationTitle>
                    </View>
                </View>

            </View>

            <PriceItem>
                {
                    currencySelected == 'Real'
                        ?
                        realBRLocale.format(Number(value)).replace(/^(\D+)/, '$1 ')
                        : currencySelected == 'Dólar'
                            ?
                            dollarUSLocale.format(Number(value)).replace(/^(\D+)/, '$1 ')
                            : currencySelected == 'Euro'
                            &&
                            euroEULocale.format(Number(value)).replace(/^(\D+)/, '$1 ')
                }
            </PriceItem>

        </Container>
    );
}