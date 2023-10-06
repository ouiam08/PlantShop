import React, { useState } from 'react';
import './assets/Banner.css';

const Cart = ({cart,clearCart}) => {
    const [open, setOpen] = useState(true);
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
                </div>
            )}
        </div>
    );
};

export default Cart;
