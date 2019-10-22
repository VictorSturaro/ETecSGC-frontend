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
                    <strong>{cardapio.dia}</strong>
                    <header style={{ backgroundImage: `url(${cardapio.thumbnail_url})` }} />
                    <h1>{cardapio.descricao}</h1>
                    <strong>{cardapio.ingredientes}</strong>
                    <hr></hr>
                </li>
            ))}
        </ul>
        <Link to="/editar">
          <button className='btnEditar'>Editar</button>
        </Link>
        <Link to="/new">
          <button className='btnEditar'>Cadastrar</button>
        </Link>
        <Link to="/contagem">
          <button className='btnEditar'>Contagem</button>
        </Link>
    </>
  )
}