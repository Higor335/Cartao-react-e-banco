import React from 'react';
import { MdLocationOn, MdPhone } from 'react-icons/md'
import './styles.css'

interface CardInterface {
  user: any;
  del: (id: string) => void;
}
const Card: React.FC = ({ user, del }: CardInterface) => {
  return (
    <>
      <div className="card">
        <div className="card_left">
          <div className="card_title">{user.name}</div>
          <div className="card_subtitle">{user.email}</div>
          <button className="delete" onClick={() => del(user.id)}>delete</button>
        </div>
        <div className="card_right">
          <div className="address_container">
            <MdLocationOn size={30} />
            <div className="address">
              <span>{user.address.street}</span>
              <span>{user.address.suite}</span>
              <span>{user.address.city}</span>
            </div>
          </div>
          <div className="address_container">
            <MdPhone size={30} />
            <div className="address">
              {/* <a href={`https://api.whatsapp.com/send?phone=${5567999991234}&text=&source=&data=&app_absent=`}>{user.phone}</a> */}
              {user.phone}
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Card;