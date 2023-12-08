import React, {useEffect, useState} from 'react';
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Items from "../components/items";
import Cart from "../components/Cart";
import Cathegories from "../components/Cathegories";
import axios from "axios";
const Home = () => {
    const [selectedCath,setCath] = useState("")
    const [cart, setCart] = useState([]);
    const addToLocalStorage = (plant) => {
        const updatedCart = [...cart];
        const existingPlantIndex = updatedCart.findIndex((item) => item.id === plant.id);
        const quantityToAdd = typeof plant.quantity === 'number' ? plant.quantity : 1;

        if (existingPlantIndex !== -1) {
            updatedCart[existingPlantIndex].quantity += quantityToAdd;
        } else {
            const newPlant = { ...plant, quantity: quantityToAdd };
            updatedCart.push(newPlant);
        }

        setCart(updatedCart);
        // console.log(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };



    useEffect(() => {
        const cartStorage = localStorage.getItem('cart');
        if(cartStorage){
            setCart(JSON.parse(cartStorage));
        }
    }, []);
    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };


    return (
        <div>
            <div className="app-container">
                <div className="cont">
                    <Banner />
                    <Cart cart={cart} clearCart={clearCart} />

                    <div className="content">
                        <Cathegories selectedCat={selectedCath} setCath={setCath} />
                        <Items cat={selectedCath} addToLocalStorage={addToLocalStorage} />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;