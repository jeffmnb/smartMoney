import React from 'react';

import {
    Container,
    TxtButton
} from './styles';

interface ButtonCategoryProps {
    title: string;
    onpress: () => void;
}

export const ButtonCategory = ({ title, onpress }: ButtonCategoryProps) => {
    return (
        <Container onPress={onpress}>
            <TxtButton>{title}</TxtButton>
        </Container>
    );
}