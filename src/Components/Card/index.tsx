import React from 'react';
import { MdLocationOn, MdPhone } from 'react-icons/md';
import './styles.css';

interface User {
  id: string;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
  phone: string;
}

interface CardProps {
  user: User;
  del: (id: string) => void;
}

const Card: React.FC<CardProps> = ({ user, del }) => {
  return (
    <div className="card">
      <div className="card_left">
        <div className="card_title">{user.name}</div>
        <div className="card_subtitle">{user.email}</div>
        <button className="delete" onClick={() => del(user.id)}>delete</button>
      </div>
      <div className="card_right">
        <div className="address_container">
          <MdLocationOn size={30} className='location'/>
          <div className="address">
            <span>{user.address.street}</span>
            <span>{user.address.suite}</span>
            <span>{user.address.city}</span>
          </div>
        </div>
        <div className="address_container">
          <MdPhone size={30} className='phone'/>
          <div className="address">
            {user.phone}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
