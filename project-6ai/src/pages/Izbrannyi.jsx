import React from 'react';
import './Izbrannyi.scss';
import { useFavorites } from '../contexts/FavoritesContext';

function Izbrannyi() {
  const { favorites, removeFromFavorites, clearFavorites } = useFavorites();

  return (
    <div className="favorites-container">
      <h2>Избранное</h2>
      {favorites.length === 0 ? (
        <p className="empty">Избранное пусто</p>
      ) : (
        <>
          <div className="favorites-grid">
            {favorites.map((item, index) => (
              <div key={index} className="favorite-item">
                <img src={item.image} alt={item.name} />
                <div className="info">
                  <h3>{item.name}</h3>
                  <p>{item.price} ₽</p>
                  <p>{item.description}</p>
                  <button onClick={() => removeFromFavorites(item.id)}>Удалить</button>
                </div>
              </div>
            ))}
          </div>
          <button className="clear-favorites" onClick={clearFavorites}>
            Очистить избранное
          </button>
        </>
      )}
    </div>
  );
}

export default Izbrannyi;