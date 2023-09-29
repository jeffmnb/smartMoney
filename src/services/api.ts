import { dataDB } from './DB';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { parse } from 'date-fns';
import { theme } from '../theme';
import axios from 'axios';

//BUSCA DOS DADOS   
export const getAllData = async () => {
    const response = await AsyncStorage.getItem('@dataDB');

    let allData = response ? JSON.parse(response) : [];

    return allData;
}

//ADICIONAR NOVA SAIDA
export const addNewOut = async (item: object) => {

    const response = await AsyncStorage.getItem('@dataDB');

    let balancesStored = response ? JSON.parse(response) : [];

    // console.log(balancesStored);

    balancesStored.push(item);

    await AsyncStorage.setItem('@dataDB', JSON.stringify(balancesStored));

    // console.log('BALANCE SALVO COM SUCESSO!');
}



//BUSCA DE SALDO   
export const getAllBalance = async () => {
    const balancesIn = await AsyncStorage.getItem('@balanceIn');

    //pega as entradas
    let allBalancesIn = balancesIn ? JSON.parse(balancesIn) : [];

    let totalBalanceIn = 0;

    for (let i = 0; i < allBalancesIn.length; i++) {
        totalBalanceIn += Number(allBalancesIn[i]);
    }

    //pega as saidas
    let balancesStored = await getAllData();

    let totalBalanceOut = 0;


    balancesStored.map((balance) => {
        totalBalanceOut += Number(balance.value);
    });


    const totalCurrent = totalBalanceIn - totalBalanceOut;

    // console.log({
    //     BalanceIn: totalBalanceIn,
    //     BalanceOut: totalBalanceOut,
    //     totalCurrent: totalCurrent
    // });


    return totalCurrent;
}


//ADICIONAR NOVA ENTRADA
export const addNewIn = async (item: string | number) => {

    //pega os valores de entrada
    let balancesInStored = await AsyncStorage.getItem('@balanceIn');

    let allBalanceIn = balancesInStored ? JSON.parse(balancesInStored) : [];

    allBalanceIn.push(item);

    await AsyncStorage.setItem('@balanceIn', JSON.stringify(allBalanceIn));

    // console.log('ENTRADA SALVO COM SUCESSO!');
}




export const getTotalByCategory = async () => {
    let allBalanceOut = await getAllData();

    let totalAlimen = 0;
    let totalCombus = 0;
    let totalAluguel = 0;
    let totalLazer = 0;
    let totalOutros = 0;


    allBalanceOut.map((balance) => {
        if (balance.categoty == 'Alimentação') {
            totalAlimen += Number(balance.value);
        };
        if (balance.categoty == 'Combustível') {
            totalCombus += Number(balance.value);
        }
        if (balance.categoty == 'Lazer') {
            totalLazer += Number(balance.value);
        }
        if (balance.categoty == 'Investimento') {
            totalAluguel += Number(balance.value);
        }
        if (balance.categoty == 'Outros') {
            totalOutros += Number(balance.value);
        }

    });

    return [
        {
            id: 1,
            color: theme.colors.red,
            categoty: 'Alimentação',
            value: totalAlimen,
        },
        {
            id: 2,
            color: theme.colors.yellow,
            categoty: 'Combustível',
            value: totalCombus,
        },
        {
            id: 3,
            color: theme.colors.green,
            categoty: 'Investimento',
            value: totalAluguel,
        },
        {
            id: 4,
            color: theme.colors.blue,
            categoty: 'Lazer',
            value: totalLazer
        },
        {
            id: 5,
            color: theme.colors.purple,
            categoty: 'Outros',
            value: totalOutros
        },
    ];

}


export const getDataToChartPanel = async () => {

    let allData = await getAllData();

    let data = [];

    allData.map((item) => {
        // console.log(item.value);
        data.push(item.value);
    })
    return data;
}


export const getLocation = async (lat, long) => {
    const options = {
        method: 'GET',
        url: 'https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi',
        params: { lat: lat, lng: long },
        headers: {
            'X-RapidAPI-Key': '6adfc6555fmsh1ea9d4687c0339fp15f9e7jsn64d99e8dbf0f',
            'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
        }
    };

    let locationStreet;

    await axios.request(options).then(function (response) {
        locationStreet = response.data;
    }).catch(function (error) {
        console.error(error);
    });

    return locationStreet;
}


export const deleteTransaction = async (item) => {
    let allData = await getAllData();

    let dataUpdated = allData.filter(data => {
        return data.id != item.id
    });

    await AsyncStorage.setItem('@dataDB', JSON.stringify(dataUpdated));
};