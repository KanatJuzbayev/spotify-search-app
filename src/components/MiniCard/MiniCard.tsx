import React, { useState } from 'react';
import './MiniCard.css';
import Card from '../Card/Card';
import { CardData } from 'types';

interface MiniCardProps {
  track: CardData;
}

export default function MiniCard(props: MiniCardProps) {
  const [cardOpen, setCardOpen] = useState(false);

  function onClick() {
    setCardOpen(true);
  }

  function closeCard(event: React.MouseEvent) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      setCardOpen(false);
    }
  }

  return (
    <>
      <div className="mini-card" onClick={onClick}>
        <div className="img_back">
          <img
            className="mini-track_image"
            src={props.track.data.albumOfTrack.coverArt.sources[1].url}
            alt="track image"
          />
        </div>
        <div className="mini-card_content">
          <div className="mini-track">
            <h4 className="mini-track_name">{props.track.data.name}</h4>
            <span className="mini-icon__spotify"></span>
          </div>
        </div>
      </div>
      {cardOpen && <Card track={props.track} close={closeCard} />}
    </>
  );
}
