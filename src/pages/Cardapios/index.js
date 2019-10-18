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

      console.log(response);
      setCardapios(response.data);
    }

    loadCardapios();
  }, []);

  return (
    <>
      <ul className="cardapio-list">
        {cardapios.map(cardapio => (
          <li key={cardapio._id}>
            <header style={{ backgroundImage: `url(${cardapio.thumbnail_url})` }} />
            <strong>{cardapio.dia}</strong>
            <table>
              <tr>
                <td>
                 <button className="btn-modification">Editar</button>
                </td>
                <td>
                 <button className="btn-modification">Excluir</button>
                </td>
              </tr>
            </table>
          </li>
        ))}
      </ul>

      <Link to="/new">
        <button className="btn">Novo Cardápio</button>
      </Link>
    </>
  )
}