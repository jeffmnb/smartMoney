import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';

import {
    Container,
    EntrySummaryChart,
    EntrySummaryPanel,
    CategoryTitle
} from './styles';

import { FlatList, Text, View } from 'react-native';
import { SummaryList } from '../SummaryList';

import { PieChart } from 'react-native-svg-charts'
import { theme } from '../../theme';
import { currencySelected, dollarUSLocale, euroEULocale, realBRLocale } from '../../services/currenciesConfig';


export const EntrySumary = ({ dataSumary }) => {


    // const data = [
    //     {
    //         id: 1,
    //         color: theme.colors.blue,
    //         value: 200,
    //     },
    //     {
    //         id: 2,
    //         color: theme.colors.red,
    //         value: 49,
    //     }

    // ];


    let pieData = dataSumary.map((item) => ({
        value: item.value,
        svg: {
            fill: item.color,
        },
        key: item.id,
    }))

    let isChart = 0;


    pieData.map((item) => {
        console.log(item.value);

        isChart += item.value;
    });



    return (
        <Container>

            <CategoryTitle>Categorias</CategoryTitle>

            <View style={{ flexDirection: 'row' }}>

                {
                    isChart > 0
                        ?
                        <EntrySummaryChart>
                            {/* <View style={{ width: 117, height: 117, backgroundColor: 'red', borderRadius: 65, marginTop: 25, marginLeft: 12 }} /> */}

                            <PieChart style={{ height: 117, width: 117, marginTop: 25, marginLeft: 12 }} data={pieData} />

                        </EntrySummaryChart>

                        :

                        <View style={{ width: 117, height: 117, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.darkMarin, borderRadius: 65, marginTop: 25, marginLeft: 12, marginRight: 10 }}>
                            <Text style={{ color: theme.colors.white }}>ND</Text>
                        </View>


                }

                <EntrySummaryPanel>

                    <FlatList
                        keyExtractor={(item) => String(item.id)}
                        data={dataSumary}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <SummaryList
                                color={item.color}
                                label={item.categoty}
                                price={
                                    currencySelected == 'Real'
                                        ?
                                        realBRLocale.format(Number(item.value)).replace(/^(\D+)/, '$1 ')
                                        : currencySelected == 'Dólar'
                                            ?
                                            dollarUSLocale.format(Number(item.value)).replace(/^(\D+)/, '$1 ')
                                            : currencySelected == 'Euro'
                                            &&
                                            euroEULocale.format(Number(item.value)).replace(/^(\D+)/, '$1 ')
                                } />
                        )}
                    />

                </EntrySummaryPanel>

            </View>
        </Container>
    );
}