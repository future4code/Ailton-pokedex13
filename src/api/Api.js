import React from 'react';
async function Api (pokemon) {
  try {
    let urlAPI = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const responsePromises = await fetch(urlAPI);
    const response = await responsePromises.json();
    return await response;
  } catch (error) {
    console.log(error);
  }
}
export default Api;
