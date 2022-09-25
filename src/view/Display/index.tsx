import React from 'react';
import { Link } from 'react-router-dom';
import CardList from '../../Components/CardList';
// import { Container } from './styles';

const Display: React.FC = () => {
  return (<div className="app_wrapper">
    <header>
      <ul className='menu'>
        <li><Link to="/">Listar</Link></li>
        <li><Link to="/buscar">Buscar</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
      </ul>
    </header>
    <h1>Listando contatos</h1>
    <CardList></CardList>
  </div>);
}

export default Display;