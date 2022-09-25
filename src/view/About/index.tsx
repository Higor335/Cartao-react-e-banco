import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const About: React.FC = () => {
  return (<div className="app_wrapper">
 <header>
      <ul className='menu'>
        <li><Link to="/">Listar</Link></li>
        <li><Link to="/buscar">Buscar</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
      </ul>
    </header>
    <h1>Sobre esse projeto</h1>
    <br/>
    <p>Este projeto utiliza de ferramentas como o Vite, React e TS, além de uma conexão com banco de dados para fornecer uma lista de informações de diversas pessoas.</p>
    <p>Na aba "Listar" é possível observar tais informações que estão dispostas em formato de cartão de visitas, contendo dados como o Nome, e-mail, endereço e telefone de cada pessoa.
      Na aba "Buscar" é possível localizar um dado cartão, inserindo na barra de busca o Nome da pessoa, telefone ou endereço da mesma.
    </p>
    <p>Este é um projeto em desenvolvimento.</p>
  </div>);

}

export default About;