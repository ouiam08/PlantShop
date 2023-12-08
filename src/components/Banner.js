import React from 'react';
import Logo from "../assets/assets/logo.png"
import '../style/Banner.css';const Banner = () => {
    const deconnexion = ()=>{
        localStorage.removeItem("clientData")
        window.location = "/auth"
    }
    return (
        <div className="banner">
            <img className="img" src={Logo}/>
            <p className="text">La maison jungle</p>
            <button className='ml-2 rounded text-black bg-green-200 border ' onClick={deconnexion}>Déconnexion</button>
        </div>
    );
};

export default Banner;