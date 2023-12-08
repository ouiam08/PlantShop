import React, { useState } from 'react';
import '../style/Banner.css';
import axios from "axios";

const Cart = ({cart,clearCart}) => {
    const [open, setOpen] = useState(true);
    const order = async () => {
        try {
            const clientData = JSON.parse(localStorage.getItem('clientData'));
            console.log(clientData);

            const plantList = JSON.parse(localStorage.getItem('cart'));
            console.log(plantList);

            const orderData = {
                plantList: plantList.map(plant => ({
                    plant: { _id: plant._id },
                    quantity: plant.quantity,
                })),
                total: cartTotal,
                client: clientData._id,
            };

            console.log("order data", orderData);

            const response = await axios.post('http://localhost:8081/api/orders', orderData);

            console.log('Order placed:', response.data);
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };
    const toggleCart = () => {
        setOpen(!open);
    };

    const cartTotal = cart ? cart.reduce((total, item) => total + (item.price* item.quantity || 0), 0) : 0;
    return (
        <div className={`cart ${open ? 'open' : ''}`}>
            <button onClick={toggleCart} className="ml-11">{open ? "Fermer" : "Ouvrir"}</button>
            {open && (
                <div>
                    <div className='text-white m-1'>
                        <h1 className='text-xl'>Panier</h1>
                        {cart && cart.length > 0 ? (
                            <ul >
                                {cart.map((item) => (
                                    <li key={item.id}> + {item.quantity} {item.name} {item.price} €</li>
                                ))}
                            </ul>
                        ) : (
                            <p >No item </p>
                        )}
                    </div>
                    <div className='text-white mt-4'>
                        <h1 className='text-xl'>Total : {cartTotal}  €</h1>

                    </div>
                    <button className='mt-8 rounded text-white bg-amber-600 border ' onClick={clearCart}>Vider la liste</button>
                    <button className='m-2 rounded text-black bg-green-200 border ' onClick={order}>commander</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
