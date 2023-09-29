import React, { useCallback, useEffect, useState } from 'react';

import {
    Container
} from './styles';

import { LineChart, Grid, AreaChart, BarChart, StackedAreaChart } from 'react-native-svg-charts'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import * as shape from 'd3-shape'
import { useFocusEffect } from '@react-navigation/native';
import { getAllData, getDataToChartPanel } from '../../services/api';
import { Platform, Text } from 'react-native';
import { theme } from '../../theme';

export const BalancePanelChart = () => {

    const [teste, setTeste] = useState([]);

    useEffect(() => {
        getDataChart();
    }, [teste]);

    const getDataChart = async () => {
        const data = await getDataToChartPanel();
        setTeste(data);
    };

    return (
        <Container>

            {/* <LineChart
                style={{ height: 200, }}
                data={teste}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 138, }}
                numberOfTicks={0}
            >
                <Grid width={100} />
            </LineChart> */}


            <AreaChart
                animate
                animationDuration={1000}
                style={{ height: Platform.OS === 'ios' ? heightPercentageToDP('15.15') : heightPercentageToDP('13.5'), width: widthPercentageToDP('81') }}
                data={teste}
                contentInset={{ top: heightPercentageToDP('2'), bottom: heightPercentageToDP('7.5') }}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(134, 65, 244, 0.5)' }}
                numberOfTicks={0}
            >
                <Grid />
            </AreaChart>

        </Container>
    );
}