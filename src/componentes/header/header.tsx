import React from 'react';
import SelectorIdioma from '../idioma/selectorIdioma';
import Logo from '../../assets/imagenes/logo.svg';

interface headerProps {
    clase: string;
}

const Header: React.FC<headerProps> = ({clase }) => {
    return (
        <header className='header'>
            <div>
                <img src={Logo} alt="Logo" style={{height:"100px", padding:"8px"}}/>
            </div>
            <div>menu</div>
            <div>
                <SelectorIdioma />
            </div>
        </header>
    )
};

export default Header;