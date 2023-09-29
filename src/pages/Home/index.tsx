import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BalancePanel } from '../../components/BalancePanels';
import { ButtonAdd } from '../../components/ButtonAdd';
import { EntryList } from '../../components/EntryList';
import { EntrySumary } from '../../components/EntrySumary';

import {
  Container,
  TxtModalCurrency,
  BtnCurrency,
  TxtCurrency
} from './styles';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { getAllBalance, getAllData, getTotalByCategory } from '../../services/api';

import { theme } from '../../theme';
import { Load } from '../../components/Load';
import { ModalItem } from '../../components/ModalItem';
import { Modalize } from 'react-native-modalize';
import { Root, Popup } from 'react-native-popup-confirm-toast'
import { Text, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { changeCurrency } from '../../services/currenciesConfig';

export const HomePage = () => {

  const [refresh, setRefresh] = useState<boolean>(false);

  useFocusEffect(useCallback(() => {
    getData();
    getTotalBalance();
    getByCategory();
  }, [refresh]));

  useEffect(() => {
    getByCategory();
  }, [theme, refresh]);

  const modalItem = useRef<Modalize>();

  const [loading, setLoading] = useState(true);

  const [allData, setAllData] = useState(null);

  const [totalCurrent, setTotalCurrent] = useState<number | string>('--');

  const [totalByCategory, setTotalByCategory] = useState<{
    id: number;
    color: string;
    categoty: string;
    value: number;
  }[]>();

  const [dataItemSelected, setDataItemSelected] = useState<object>({});

  const getData = async () => {
    let data = await getAllData();

    data = await getAllData();

    setAllData(data);

    // console.log(data);
  }

  const getByCategory = async () => {
    let data = await getTotalByCategory();

    data = await getTotalByCategory();

    // console.log('Dados do Sumary: ' + data[0].value);

    console.log(data);

    setTimeout(() => {
      setLoading(false);
    }, 3500);


    setTotalByCategory(data);
  }

  const getTotalBalance = async () => {
    const totalCurrentBalance = await getAllBalance();

    setTotalCurrent(totalCurrentBalance);

  };

  const handleOpenItem = (item: object) => {
    modalItem.current?.open();
    console.log(item);
    setDataItemSelected(item);
  };

  const Navigation = useNavigation();

  const handleAddItem = () => {
    Navigation.navigate('AddPage', { valueCurrent: totalCurrent });
  }

  // const showModalConvert = () => {
  //   Popup.show({
  //     buttonEnabled: false,
  //     iconEnabled: false,
  //     background: 'rgba(0,0,0,0.65)',
  //     modalContainerStyle: { backgroundColor: theme.colors.darkMarin },
  //     bodyComponent: () => (
  //       <View>
  //         <TxtModalCurrency>Deseja converter seu saldo?</TxtModalCurrency>

  //         <BtnCurrency>
  //           <TxtCurrency>Converter</TxtCurrency>
  //         </BtnCurrency>

  //         <BtnCurrency onPress={() => Popup.hide()}>
  //           <TxtCurrency>Apenas alterar</TxtCurrency>
  //         </BtnCurrency>
  //       </View>
  //     )
  //   })
  // }

  if (loading) {
    return <Load />;
  }

  return (

    <Container>
      <Root>

        <BalancePanel onpress={() =>
          Popup.show({
            buttonEnabled: false,
            iconEnabled: false,
            background: 'rgba(0,0,0,0.65)',
            modalContainerStyle: { backgroundColor: theme.colors.darkMarin },
            bodyComponent: () => (

              <View style={{ paddingBottom: heightPercentageToDP('2.7') }}>

                <TxtModalCurrency>Escolha sua moeda favorita :)</TxtModalCurrency>

                <BtnCurrency onPress={() => {
                  changeCurrency('Real');
                  setRefresh(oldState => !oldState)
                  Popup.hide();
                }}>
                  <TxtCurrency>Real (R$)</TxtCurrency>
                </BtnCurrency>

                <BtnCurrency onPress={() => {
                  changeCurrency('Dólar');
                  setRefresh(oldState => !oldState)
                  Popup.hide();
                }}>
                  <TxtCurrency>Dólar ($)</TxtCurrency>
                </BtnCurrency>

                <BtnCurrency onPress={() => {
                  changeCurrency('Euro');
                  setRefresh(oldState => !oldState)
                  Popup.hide();
                }}>
                  <TxtCurrency>Euro (Є)</TxtCurrency>
                </BtnCurrency>

              </View>
            )
            ,
          })
        } total={totalCurrent} />

        <EntrySumary dataSumary={totalByCategory != undefined ? totalByCategory : []} />

        <ButtonAdd onpress={handleAddItem} />

        <EntryList itemData={(item) => handleOpenItem(item)} data={allData} />

        <ModalItem update={() => setRefresh(oldState => !oldState)} data={dataItemSelected} modalItem={modalItem} />

      </Root>
    </Container>

  );
}