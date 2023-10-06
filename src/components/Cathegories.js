import React, { useState } from 'react';
import { plantList } from './planlist';
import Items from "./items";

const Categories = ({selectedCath,setCath}) => {
    const uniqueCategories = {};

    plantList.forEach((plant) => {
        uniqueCategories[plant.category] = true;
    });

    const allCategories = Object.keys(uniqueCategories);

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setCath(selectedCategory);
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
