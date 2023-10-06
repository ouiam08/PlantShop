import React from 'react';
import './assets/Banner.css'
import watering from './assets/assets/water.svg'
import sun from './assets/assets/sun.svg'
const Item = ({name,
                  light,
                  water,
                  cover,
                  price}) => {
    const generateIcons = (count, classN, type) => {
        const icons = [];

        for (let i = 0; i < count; i++) {
            icons.push(<img key={i} src={type} className={classN} alt={`Icon ${i}`} />);
        }

        return icons;
    };
    return (

        <div className='item-cont'>
            <span className="circle">{price} €</span>
            <img className='img-item' src={cover}/>
            <p>{name}</p>
            <div className="icon-container">
                {generateIcons(water, 'image-icons-water', watering)}
            </div>
            <div className="icon-container">
                {generateIcons(light, 'image-icons', sun)}
            </div>



        </div>
    );
};

export default Item;