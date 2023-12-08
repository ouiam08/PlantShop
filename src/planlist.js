import React, { useState, useEffect } from 'react';
import axios from 'axios';

import monstera from './assets/assets/monstera.jpg';
import lyrata from './assets/assets/lyrata.jpg';
import pothos from './assets/assets/pothos.jpg';
import succulent from './assets/assets/succulent.jpg';
import olivier from './assets/assets/olivier.jpg';
import basil from './assets/assets/basil.jpg';
import mint from './assets/assets/mint.jpg';
import calathea from './assets/assets/calathea.jpg';
import cactus from './assets/assets/cactus.jpg';

const PlantList = () => {
  const [plantList, setPlantList] = useState([]);

  const apiUrl = 'http://localhost:8081/api/plants';

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        const updatedPlantList = response.data.map(plant => {
          return {
            ...plant,
            cover: getPlantImage(plant.name),
          };
        });
        setPlantList(updatedPlantList);
      })
      .catch(error => {
        console.error('Error during Axios request:', error);
      });
  }, []);

  function getPlantImage(plantName) {
    switch (plantName) {
      case 'monstera':
        return monstera;
      case 'ficus lyrata':
        return lyrata;
      case 'pothos argenté':
        return pothos;
      case 'calathea':
        return calathea;
      case 'olivier':
        return olivier;
      case 'cactus':
        return cactus;
      case 'basilique':
        return basil;
      case 'succulente':
        return succulent;
      case 'menthe':
        return mint;
      default:
        return '';
    }
  }
  return plantList;
}

export default PlantList;
