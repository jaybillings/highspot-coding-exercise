import React from "react";
import "../styles/card.scss";

export default function Card(props) {
  return <div className={'card'} style={{backgroundImage: `url(${props.cardData.imageUrl})`}}>

    <div className={'card-inner'}>
      <h2>{props.cardData.name}</h2>
      <ul>
        <li><strong>Type:</strong>{props.cardData.type}</li>
        <li><strong>From set:</strong>{props.cardData.set.name}</li>
        {props.cardData.text && <li><strong>Text:</strong>{props.cardData.text}</li>}
        <li><strong>Rarity:</strong>{props.cardData.rarity}</li>
        <li><strong>{props.cardData.unique ? 'Unique' : 'Not unique'}</strong></li>
        <li><strong>{props.cardData.collectible ? 'Collectible' : 'Not collectible'}</strong></li>
      </ul>

    </div>
  </div>
}