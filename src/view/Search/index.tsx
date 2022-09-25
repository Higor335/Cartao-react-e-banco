import React from 'react';
import { Link } from 'react-router-dom';
import CardSearch from '../../Components/CardSearch';

// import { Container } from './styles';

const Search: React.FC = () => {
  return (<div className="app_wrapper">
    <header>
      <ul className='menu'>
        <li><Link to="/">Listar</Link></li>
        <li><Link to="/buscar">Buscar</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
      </ul>
    </header>
    <h1>Buscando contatos</h1>
    <CardSearch />
  </div>);

}

export default Search;