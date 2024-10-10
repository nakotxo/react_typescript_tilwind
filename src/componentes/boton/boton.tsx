import React from "react";
import { useTranslation } from 'react-i18next';

interface BotonProps {
    mensaje: string;
    clase: string;
    url: string;
}

const Boton = ({ mensaje, clase, url }: BotonProps) => {
    const { t, i18n } = useTranslation(); 
    return (
        <a href={url}>
            <button className={clase}>{mensaje}</button>
        </a>
    )};
export default Boton;


