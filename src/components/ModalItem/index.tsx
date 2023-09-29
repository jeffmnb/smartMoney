import React, { useRef, useState } from 'react';

import { Modalize } from 'react-native-modalize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { theme } from '../../theme';

import {
    Container,
    TitleModal,
    TitleItem,
    TxtValue,
    TxtBack,
    ButtonGallery,
    AreaDetails,
    TxtInfo,
    AreaButtons,
    ButtonTrash,
    EntryDate,
    EntryHour,
    EntryLocationTitle,
    CategoryTitle
} from './styles';

import { FontAwesome, MaterialIcons, Ionicons, AntDesign, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Alert, Image, Platform, View } from 'react-native';

import { deleteTransaction } from '../../services/api';
import { currencySelected, dollarUSLocale, euroEULocale, realBRLocale } from '../../services/currenciesConfig';

export const ModalItem = ({ modalItem, data, update }) => {

    const [galleryCheck, setGalleryCheck] = useState<boolean>(false);

    const handleDeleteTransaction = (item: object) => {
        Alert.alert('Aviso', 'Deseja excluir a transação?', [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: async () => {
                    await deleteTransaction(item);

                    modalItem.current?.close();
                    update();
                }
            }
        ]);
    }

    return (
        <Modalize scrollViewProps={{ showsVerticalScrollIndicator: false }} ref={modalItem} modalHeight={heightPercentageToDP('70')} modalStyle={{ backgroundColor: theme.colors.darkMarin, paddingHorizontal: widthPercentageToDP('2.5'), paddingTop: heightPercentageToDP('1.3') }}>

            <Container>

                <TitleItem>{data.title}</TitleItem>

                <TxtValue>- {data.value != undefined ?
                    currencySelected == 'Real'
                        ?
                        realBRLocale.format(Number(data.value)).replace(/^(\D+)/, '$1 ')
                        : currencySelected == 'Dólar'
                            ?
                            dollarUSLocale.format(Number(data.value)).replace(/^(\D+)/, '$1 ')
                            : currencySelected == 'Euro'
                            &&
                            euroEULocale.format(Number(data.value)).replace(/^(\D+)/, '$1 ')
                    : '--'}</TxtValue>

            </Container>

            <AreaDetails style={{ height: Platform.OS === 'ios' ? heightPercentageToDP('21.5') : heightPercentageToDP('24.5') }}>
                <TxtInfo>Detalhes</TxtInfo>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: widthPercentageToDP('3.5') }}>
                    <FontAwesome name="clock-o" size={RFValue(19)} color={theme.colors.white} />

                    <EntryDate>{data.date}</EntryDate>

                    <EntryHour>{data.hour}</EntryHour>
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: widthPercentageToDP('3.2'), marginTop: heightPercentageToDP('2') }}>
                    {
                        data.categoty == 'Alimentação' ?
                            <Ionicons name="fast-food" size={RFValue(19)} color={theme.colors.white} />
                            : data.categoty == 'Combustível' ?
                                <MaterialCommunityIcons name="fuel" size={RFValue(19)} color={theme.colors.white} />
                                : data.categoty == 'Investimento' ?
                                    <MaterialCommunityIcons name="piggy-bank" size={RFValue(19)} color={theme.colors.white} />
                                    : data.categoty == 'Lazer' ?
                                        <Ionicons name="game-controller" size={RFValue(19)} color={theme.colors.white} />
                                        : data.categoty == 'Outros' &&
                                        <AntDesign name="CodeSandbox" size={RFValue(19)} color={theme.colors.white} />
                    }

                    <CategoryTitle numberOfLines={1}>{` ${data.categoty}`}</CategoryTitle>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: widthPercentageToDP('3.2'), marginTop: heightPercentageToDP('2') }}>
                    <Ionicons name="location-sharp" size={RFValue(19)} color={theme.colors.white} />

                    <EntryLocationTitle numberOfLines={1}>{` ${data.location}`}</EntryLocationTitle>
                </View>
            </AreaDetails>

            <AreaButtons>

                <ButtonGallery
                    style={{
                        backgroundColor: galleryCheck ? theme.colors.marinho : theme.colors.darkMarin,
                    }}
                    onPress={() => {
                        if (data.photo === null) {
                            return Alert.alert('aviso', 'Esta transação não possui mídia')
                        }
                        setGalleryCheck(oldValue => !oldValue);
                    }}>
                    <MaterialIcons name="insert-photo" size={RFValue(28)} color={theme.colors.white} />
                </ButtonGallery>

                <ButtonTrash onPress={() => handleDeleteTransaction(data)}>
                    <FontAwesome name="trash" size={RFValue(27)} color={theme.colors.white} />
                </ButtonTrash>

            </AreaButtons>


            {
                galleryCheck
                &&
                < Image style={{ marginBottom: heightPercentageToDP(5), alignSelf: 'center', width: RFValue(200), height: RFValue(200), borderRadius: RFValue(5) }} source={{ uri: data.photo }} />
            }

            <TxtBack onPress={() => modalItem.current?.close()}>Voltar</TxtBack>

        </Modalize>
    );
}