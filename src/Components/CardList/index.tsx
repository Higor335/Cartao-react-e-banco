import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Card from '../Card';
import './styles.css';

const CardList: React.FC = () => {
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

    fetchData(); // Chama fetchData imediatamente, pois o estado loading é true
  }, []); // O useEffect só deve executar uma vez, quando o componente é montado

  const handleSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleDelete = (id: string) => {
    setUsers(users => users.filter((user: any) => user.id !== id));
  };

  const displayContacts = () => {
    let filteredUsers = users;

    if (filter) {
      filteredUsers = users.filter((user: any) =>
        user.name.toLowerCase().includes(filter.toLowerCase()) ||
        user.email.toLowerCase().includes(filter.toLowerCase()) ||
        user.phone.toLowerCase().includes(filter.toLowerCase()) ||
        user.address.city.toLowerCase().includes(filter.toLowerCase())
      );
    }

    return (
      <>
        <span className="span_result">{filteredUsers.length} resultados encontrados</span>
        {filteredUsers.map((user: any) => (
          <Card key={user.id} user={user} del={handleDelete} />
        ))}
      </>
    );
  };

  if (loading) {
    return <div>Carregando..</div>;
  } else {
    return (
      <div className="card_list_container">
        {displayContacts()}
      </div>
    );
  }
}

export default CardList;
