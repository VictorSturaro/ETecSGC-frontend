import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function Cardapios() {
  const [cardapios, setCardapios] = useState([]);

  useEffect(() => {
    async function loadCardapios() {
      const user_id = localStorage.getItem('User');
      const response = await api.get('/profile', {
        headers: { user_id }
      });

      setCardapios(response.data);
    }

    loadCardapios();
  }, []);

  return (
    <>
      <ul className="cardapio-list">
          <li>
            <header />
            <strong>Segunda-feira</strong>
          </li>
          <Link to="/new">
            <button className="btn">Editar</button>
          </Link>
          <li>
            <header />
            <strong>Terça-feira</strong>
          </li>
          <Link to="/new">
            <button className="btn">Editar</button>
          </Link>
          <li>
            <header />
            <strong>Quarta-feira</strong>
          </li>
          <Link to="/new">
            <button className="btn">Editar</button>
          </Link>
          <li>
            <header />
            <strong>Quinta-feira</strong>
          </li>
          <Link to="/new">
            <button className="btn">Editar</button>
          </Link>
          <li>
            <header />
            <strong>Sexta-feira</strong>
          </li>
          <Link to="/new">
            <button className="btn">Editar</button>
          </Link>
      </ul>
    </>
  )
}