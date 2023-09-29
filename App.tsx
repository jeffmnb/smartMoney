import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Routes } from './src/routes/index';

import {
  Poppins_700Bold,
  Poppins_400Regular,
  Poppins_300Light,
  useFonts
} from '@expo-google-fonts/poppins';

import { AuthProvider } from './src/services/currenciesConfig';

export default function App() {

  const [fontsValided] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_300Light
  });

  return (
    fontsValided
    &&
    <Routes />
  );
}

