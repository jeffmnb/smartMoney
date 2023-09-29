import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
    Container,
    LabelBalance,
    PanelBalance,
    TxtValue,
    SelectCategory,
    TxtSelect,
    CamBottom,
    LocationBottom,
    ButtonSave,
    TxtButtonSave,
    TxtCancel,
    ButtonChoose,
    TxtButtonChoose,
    TxtDescription,
    InputDescription
} from './styles';

import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../theme';
import { ScrollView, TouchableOpacity, View, Modal, Text, Alert, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { InputBalance } from '../../components/InputBalance';

import { Entypo, Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import { Modalize } from 'react-native-modalize';
import { ButtonCategory } from '../../components/ButtonCategory';

import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native';

import { addNewIn, addNewOut, getLocation } from '../../services/api';

import { format } from 'date-fns';

import uuid from 'react-native-uuid';

import * as Location from 'expo-location';

import * as ImagePicker from 'expo-image-picker';
import { currencySelected, dollarUSLocale, euroEULocale, realBRLocale } from '../../services/currenciesConfig';


export const AddPage = () => {

    useFocusEffect(useCallback(() => {
        getCurrent();
    }, []));

    useEffect(() => {
        getPermissionCamera();
    }, []);

    const [locationCheck, setLocationCheck] = useState<boolean>(false);

    useEffect(() => {
        getPermissionLocationStatus();
    }, [locationCheck]);

    const Navigation = useNavigation();

    const Route = useRoute();

    const dataCurrent = Route.params.valueCurrent;

    const [pickedImage, setPickedImage] = useState(null);

    const [categoryChoosed, setCategoryChoosed] = useState<string>('');

    const [typeBalance, setTypeBalance] = useState<string>('Saída');

    const [textInput, setTextInput] = useState<string | number>(0);

    const [descriptionInput, setDescriptionInput] = useState<string>('');

    const [totalCurrent, setTotalCurrent] = useState<string | number>('');

    const [totalCurrentUpdated, setTotalCurrentUpdated] = useState<number | string>('');

    const [camCheck, setCamCheck] = useState<boolean>(false);

    const [location, setLocation] = useState(null);

    const [locationStreet, setLocationStreet] = useState<string>('');

    const [errorMsg, setErrorMsg] = useState(null);

    const [statusPermission, setStatusPermission] = useState(null);

    const modalActived = useRef<Modalize>();
    const modalDescription = useRef<Modalize>();


    const getPermissionCamera = async () => {
        let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            Alert.alert("For this to work app needs camera roll permissions...");
            return;
        }

        setStatusPermission(permissionResult);
        // console.log(statusPermission);

    }


    const openCamera = async () => {

        let cameraResult = await ImagePicker.launchCameraAsync({
            // ...
        });

        if (cameraResult.cancelled === true) {
            return;
        }

        setPickedImage(cameraResult.uri);
        console.log(pickedImage);
    }


    const getPermissionLocationStatus = async () => {

        if (locationCheck) {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

            const lat = location.coords.latitude;
            const long = location.coords.longitude;

            const data = await getLocation(lat, long);

            const locationAddress = `${data.Results[0].city}, ${data.Results[0].address}`;
            setLocationStreet(locationAddress);
            console.log(locationStreet);
        }
    };


    const getCurrent = () => {
        setTotalCurrent(dataCurrent);
    }

    const handleSelectCategory = () => {
        modalActived.current?.open();
    };

    const handleChooseCategory = (text: string) => {
        setCategoryChoosed(text);
        modalActived.current?.close();
    }

    const handleDescription = () => {

        if (descriptionInput == '') {
            return Alert.alert('', 'Favor informar uma descricao');
        }

        modalDescription.current?.close();


        addNewBalance();
    }

    const addNewBalance = async () => {

        if (locationCheck) {
            getPermissionLocationStatus();
        }

        if (typeBalance == 'Saída') {
            if (textInput == '' || textInput == '') {
                return Alert.alert('', 'Valor vazio :(');
            };

            if (textInput == '0') {
                return Alert.alert('', 'Valor deve ser maior que 0');
            }

            if (categoryChoosed == '') {
                return Alert.alert('', 'Favor escolher uma categoria');
            }

            modalDescription.current?.open();

            const newData = {
                id: String(uuid.v4()),
                color: categoryChoosed == 'Alimentação' ? theme.colors.red : categoryChoosed == 'Combustível' ? theme.colors.yellow : categoryChoosed == 'Investimento' ? theme.colors.green : categoryChoosed == 'Lazer' ? theme.colors.blue : theme.colors.purple,
                categoty: categoryChoosed,
                value: textInput,
                date: format(new Date, 'dd/M'),
                hour: format(new Date, 'hh:mm'),
                location: locationCheck ? locationStreet : 'Locali. desligada na transação',
                title: descriptionInput,
                photo: pickedImage
            }

            if (descriptionInput != '') {

                Navigation.navigate('Home');


                await addNewOut(newData);
            }
        } else if (typeBalance == 'Entrada') {

            if (textInput == '' || textInput == '') {
                return Alert.alert('', 'Valor vazio :(');
            };

            if (textInput == '0') {
                return Alert.alert('', 'Valor deve ser maior que 0');
            }

            await addNewIn(textInput);

            Navigation.navigate('Home');
        }


    }

    return (
        <Container>
            <ScrollView>

                <LabelBalance>Saldo atual</LabelBalance>

                <View style={{
                    width: widthPercentageToDP('60'),
                    height: heightPercentageToDP('8'),
                    alignSelf: 'center'
                }}>
                    <LinearGradient style={{ borderRadius: widthPercentageToDP('3') }} colors={[theme.colors.purple, theme.colors.blue, theme.colors.blue]}>
                        <PanelBalance>

                            <TxtValue>
                                {
                                    textInput != 0 && textInput != ''

                                        ?

                                        currencySelected == 'Real'
                                            ?
                                            realBRLocale.format(Number(Number(totalCurrentUpdated))).replace(/^(\D+)/, '$1 ')
                                            : currencySelected == 'Dólar'
                                                ?
                                                dollarUSLocale.format(Number(Number(totalCurrentUpdated))).replace(/^(\D+)/, '$1 ')
                                                : currencySelected == 'Euro'
                                                &&
                                                euroEULocale.format(Number(Number(totalCurrentUpdated))).replace(/^(\D+)/, '$1 ')


                                        :

                                        currencySelected == 'Real'
                                            ?
                                            realBRLocale.format(Number(totalCurrent)).replace(/^(\D+)/, '$1 ')
                                            : currencySelected == 'Dólar'
                                                ?
                                                dollarUSLocale.format(Number(totalCurrent)).replace(/^(\D+)/, '$1 ')
                                                : currencySelected == 'Euro'
                                                &&
                                                euroEULocale.format(Number(totalCurrent)).replace(/^(\D+)/, '$1 ')

                                }

                            </TxtValue>

                        </PanelBalance>
                    </LinearGradient>
                </View>


                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: heightPercentageToDP('6') }}>

                    <ButtonChoose onPress={() => setTypeBalance('Saída')} style={{ backgroundColor: typeBalance == 'Saída' ? theme.colors.marinho : 'transparent' }}>
                        <TxtButtonChoose>Saída</TxtButtonChoose>
                    </ButtonChoose>

                    <ButtonChoose onPress={() => setTypeBalance('Entrada')} style={{ backgroundColor: typeBalance == 'Entrada' ? theme.colors.marinho : 'transparent' }}>
                        <TxtButtonChoose>Entrada</TxtButtonChoose>
                    </ButtonChoose>

                </View>


                <InputBalance value={textInput} onchancetext={(text) => {
                    if (typeBalance == 'Saída') {
                        setTextInput(text);
                        setTotalCurrentUpdated(Number(totalCurrent) - Number(text))
                    } else {
                        setTextInput(text);
                        setTotalCurrentUpdated(Number(totalCurrent) + Number(text))
                    }

                }} />

                {
                    typeBalance == 'Saída'


                    &&

                    <>
                        <SelectCategory onPress={handleSelectCategory}>
                            <TxtSelect>{categoryChoosed != '' ? categoryChoosed : 'Categoria'}</TxtSelect>
                        </SelectCategory>

                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: RFValue(40) }}>
                            {
                                pickedImage != null ?
                                    <Image style={{ width: RFValue(58), height: RFValue(58), borderRadius: RFValue(30) }} source={{ uri: pickedImage }} />
                                    :
                                    <CamBottom onPress={openCamera} style={{ backgroundColor: camCheck ? theme.colors.marinho : 'transparent' }}>
                                        <Entypo name="camera" size={RFValue(28)} color={theme.colors.white} />
                                    </CamBottom>
                            }

                            <LocationBottom onPress={() => {
                                setLocationCheck(oldValue => !oldValue);
                            }
                            } style={{ backgroundColor: locationCheck ? theme.colors.marinho : 'transparent' }}>
                                <Ionicons name="location-sharp" size={RFValue(28)} color={theme.colors.white} />
                            </LocationBottom>
                        </View>
                    </>

                }

                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: RFValue(40) }}>
                    <ButtonSave onPress={addNewBalance}>
                        <TxtButtonSave>Adicionar</TxtButtonSave>
                    </ButtonSave>

                    <TxtCancel onPress={() => Navigation.navigate('Home')}>Cancelar</TxtCancel>
                </View>


            </ScrollView>



            <Modalize ref={modalActived} modalHeight={heightPercentageToDP('70')} modalStyle={{ backgroundColor: theme.colors.marinho, paddingHorizontal: 25, paddingTop: '10%' }}>

                <ButtonCategory onpress={() => handleChooseCategory('Alimentação')} title='Alimentação' />
                <ButtonCategory onpress={() => handleChooseCategory('Combustível')} title='Combustível' />
                <ButtonCategory onpress={() => handleChooseCategory('Investimento')} title='Investimento' />
                <ButtonCategory onpress={() => handleChooseCategory('Lazer')} title='Lazer' />
                <ButtonCategory onpress={() => handleChooseCategory('Outros')} title='Outros' />

            </Modalize>


            <Modalize ref={modalDescription} modalHeight={heightPercentageToDP('40')} modalStyle={{ flex: 1, backgroundColor: theme.colors.marinho, paddingHorizontal: 25, paddingTop: '10%' }}>

                <TxtDescription>Informe uma descrição :)</TxtDescription>

                <InputDescription onChangeText={(text) => setDescriptionInput(text)} />

                <View style={{ alignSelf: 'center', marginTop: heightPercentageToDP('5') }}>
                    <ButtonSave onPress={handleDescription}>
                        <TxtButtonSave>Adicionar</TxtButtonSave>
                    </ButtonSave>
                </View>

            </Modalize>


        </Container >
    );
}