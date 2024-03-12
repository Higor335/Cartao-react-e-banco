import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Card from '../Card';
import IconBusca from '../../assets/icon-busca.png'
import './styles.css';

const CardSearch: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]); 
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/users');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    if (loading) {
      fetchData();
    }
  }, [loading]);

  function handleSearchText(event: React.ChangeEvent<HTMLInputElement>) {
    setFilter(event.target.value);
  }

  function handleDelete(id: string) {
    setUsers(users => users.filter((user: any) => user.id !== id));
  }

  function displayContact() {
    if (!users || users.length === 0) return null; // Verifica se 'users' é nulo ou vazio antes de mapear

    return users
      .filter((user: any) =>
        user.name.toLowerCase().includes(filter.toLowerCase()) ||
        user.email.toLowerCase().includes(filter.toLowerCase()) ||
        user.phone.toLowerCase().includes(filter.toLowerCase()) ||
        user.address.city.toLowerCase().includes(filter.toLowerCase())
      )
      .map((usuario: any) => <Card key={usuario.id} user={usuario} del={handleDelete} />);
  }

  if (loading) {
    return <div>Carregando..</div>;
  } else {
    return (
      <div className="card_list_container">
        <div className="search_bar">
          <input
            type="text"
            value={filter}
            onChange={handleSearchText}
            placeholder="Buscar usuário..."
          />
          <img src={IconBusca} alt="Busca" />
        </div>
        {displayContact()}
      </div>
    );
  }
}

export default CardSearch;
