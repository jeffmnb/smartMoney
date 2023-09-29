import Intl from 'intl';

import 'intl/locale-data/jsonp/pt-BR';
import 'intl/locale-data/jsonp/en-US';
import 'intl/locale-data/jsonp/de-DE';

export let currencySelected = 'Real';

export let optionConvert = false;

export const changeCurrency = (currency: string) => {
    currencySelected = currency;
};

export let dollarUSLocale = Intl.NumberFormat('en-US', { currency: 'USD', style: 'currency' });

export let realBRLocale = Intl.NumberFormat('pt-BR', { currency: 'BRL', style: 'currency' });

export let euroEULocale = Intl.NumberFormat("de-DE", { currency: "EUR", style: "currency" });