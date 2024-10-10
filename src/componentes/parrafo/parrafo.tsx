import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';
import { withTranslation, WithTranslation } from 'react-i18next';

interface IProps  {
    text: string;
    clase: string;
}

const Parrafo = ({ text, clase }: IProps) => {
    const { t } = useTranslation();
    
    return (
        <p className = {clase}> {t(text)}</p>
    )
}

export default withTranslation()(Parrafo);