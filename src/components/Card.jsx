import React from "react";
import "../styles/card.scss";

export function Card(props) {
  return <div className={'card'}>
    <h2>{props.cardData.name}</h2>
    <div className={'image-container'}>
      <img src={props.cardData.imageUrl} alt={props.cardData.name} />
    </div>
    <ul>
      <li><strong>Type:</strong>{props.cardData.type}</li>
      <li><strong>From set:</strong>{props.cardData.set.name}</li>
      <li><strong>Flavor text:</strong>{props.cardData.text}</li>
      <li><strong>Rarity:</strong>{props.cardData.rarity}</li>
      <li>{props.cardData.unique ? 'Unique' : 'Not unique'}</li>
      <li>{props.cardData.collectible ? 'Collectible' : 'Not collectible'}</li>
    </ul>
  </div>
}