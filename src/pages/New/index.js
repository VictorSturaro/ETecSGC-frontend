import React, { useState, useMemo } from 'react';

import camera from '../../assets/camera.svg';

import './styles.css';

export default function New() {
  const [thumbnail, setThumbnail] = useState(null);
  const [descricao, setDescricao] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [dia, setDia] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail])

  function handleSubmit() {

  }

  return (
    <form onSubmit={handleSubmit}>
      <label 
        id="thumbnail" 
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? 'has-thumbnail' : ''}
        >
        <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
        <img src={camera} alt="Select img" />
      </label>

      <label htmlFor="descricao">DESCRIÇÃO *</label>
      <input 
      id="descricao"
      placeholder="Descrição do prato"
      value={descricao}
      onChange={event => setDescricao(event.target.value)}
      />

      <label htmlFor="ingredientes">INGREDIENTES *</label>
      <input 
      id="ingredientes"
      placeholder="Ingredientes do prato"
      value={ingredientes}
      onChange={event => setIngredientes(event.target.value)}
      />

      <label htmlFor="dia">DIA DA SEMANA *</label>
      <input 
      id="dia"
      placeholder="Dia da semana"
      value={dia}
      onChange={event => setDia(event.target.value)}
      />

      <button type="submit" className="btn">Editar</button>
    </form>
  )
}