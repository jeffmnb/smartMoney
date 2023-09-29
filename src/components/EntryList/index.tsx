import React, { useCallback, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { EntryItem } from '../EntryItem';

import {
    Container,
    LastBalanceTitle,
    TitleNotData
} from './styles';


import { getAllData } from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';

import { dataDB } from '../../services/DB';

export const EntryList = ({ data, itemData }) => {

    let isChart = false;

    data.map((item) => {
        if (item == []) {
            isChart = false;
        } else {
            isChart = true;
        }
    });

    return (
        <Container>

            <LastBalanceTitle>Últimos lançamentos</LastBalanceTitle>

            {
                !isChart &&
                <TitleNotData>Você ainda não fez movimentos :(</TitleNotData>}

            <FlatList
                keyExtractor={(item) => String(item.id)}
                data={data}
                renderItem={({ item, index }) => (
                    <EntryItem
                        end={index == data.length}
                        middle={index > 0 && index < data.length}
                        start={index == 0}
                        title={item.title}
                        value={item.value}
                        date={item.date}
                        hour={item.hour}
                        color={item.color}
                        location={item.location}
                        onpress={() => itemData(item)
                        }
                    />
                )}
            />

        </Container>
    );
}