import React from "react";
import "../styles/card.scss";

export default function Card(props) {
  return <div className={'card'} style={{backgroundImage: `url(${props.cardData.imageUrl})`}}>
    <div className={'card-inner'}>
      <h2>{props.cardData.name}</h2>
      <ul>
        {props.cardData.type && <li><strong>Type:</strong>{props.cardData.type}</li>}
        {(props.cardData.set && props.cardData.set.name) && <li><strong>From set:</strong>{props.cardData.set.name}</li>}
        {props.cardData.text && <li><strong>Text:</strong>{props.cardData.text}</li>}
        {props.cardData.rarity && <li><strong>Rarity:</strong>{props.cardData.rarity}</li>}
        {props.cardData.unique && <li><strong>{props.cardData.unique ? 'Unique' : 'Not unique'}</strong></li>}
        {props.cardData.collectible && <li><strong>{props.cardData.collectible ? 'Collectible' : 'Not collectible'}</strong></li>}
      </ul>
    </div>
  </div>
}
