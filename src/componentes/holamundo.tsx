import React from 'react';

interface HolaMundoProps {
    mensaje: string;
    clase: string;
}

const HolaMundo: React.FC<HolaMundoProps> = ({ mensaje,clase }) => {
    return <div className={clase}>{mensaje}</div>;
};

export default HolaMundo;