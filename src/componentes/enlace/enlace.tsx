import React from "react";
import { useTranslation } from 'react-i18next';

interface EnlaceProps {
    mensaje: string;
    clase: string;
    url: string;
    externo:boolean;
}

const Boton = ({ mensaje, clase, url, externo }: EnlaceProps) => {
    const { t, i18n } = useTranslation(); 
    return (
        <a href = {url} className = {clase} target={externo?"_blank":"_self"}>
            <p>{t(mensaje)}</p>
        </a>
    )};
export default Boton;


