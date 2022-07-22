import React, {useState}from "react";


export default function NavBar(props){
const {onSearch} = props;
  
const [pesquisa, setPesquisa] = useState('1');

const onChangeHandler = (evento) => {
  setPesquisa(evento.target.value);
}

const onButtonClickHandler = () => {
  onSearch(pesquisa);
}
  return(
    <nav className="NavBar">
      <img className="navbar-image" alt="PokéAPI" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"/>
     <input className="searchBar" placeholder="Buscar Pokemon" onChange={onChangeHandler}/> 
      <button onClick={onButtonClickHandler}>Buscar</button>
    </nav>
  );
}
