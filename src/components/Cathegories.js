import React, { useState } from 'react';
import PlantList from '../planlist';
import '../style/Banner.css';
const Categories = ({selectedCath,setCath}) => {
    const uniqueCategories = {};
    const plantList = PlantList();
    plantList.forEach((plant) => {
        uniqueCategories[plant.category] = true;
    });

    const allCategories = Object.keys(uniqueCategories);

    const handleCategoryChange = (event) => {
        setCath(event.target.value);
    };

    return (
        <div className='cat-content'>
            <select onChange={handleCategoryChange} value={selectedCath}>
                <option value={""}>Toutes les cat</option>
                {allCategories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Categories;
