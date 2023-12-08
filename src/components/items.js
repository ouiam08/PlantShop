import React from 'react';
import PlantList from '../planlist';
import Item from './Item';
import '../style/Banner.css';
const Items = ({ cat,addToLocalStorage }) => {
    const plantList = PlantList();
    const filteredPlants = cat
        ? plantList.filter((plant) => plant.category === cat)
        : plantList;




    return (
        <div className='items-container'>
            {filteredPlants.map((plant) => (
                <div key={plant.id}>
                    <Item
                        name={plant.name}
                        category={plant.category}
                        id={plant.id}
                        light={plant.light}
                        water={plant.water}
                        cover={plant.cover}
                        price={plant.price}
                    />
                    <button className="button" onClick={() => addToLocalStorage(plant)}>Ajouter</button>
                </div>
            ))}
        </div>
    );
};

export default Items;
