import React from 'react';
import calictus from '../assets/assets/cactus.jpg'
import basil from '../assets/assets/basil.jpg'
import '../style/Banner.css';const Footer = () => {
    return (
        <div className='footer'>
            <p className='footer-content'>Pour les passionné-e-s de plantes <img  className='img' src={calictus}/> <img className='img' src={basil}/></p>
            <p>Laissez-nous votre email</p>
            <input placeholder="Entrer votre email" className='input'/>
        </div>
    );
};

export default Footer;