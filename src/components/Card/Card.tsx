import React from 'react';
import { CardData } from 'types';
import './Card.css';

interface CardProps {
  track: CardData;
  isOpen: boolean;
  close: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}

export default function Card(props: CardProps) {
  return (
    <div className={`modal_wrapper ${props.isOpen ? 'open' : 'close'}`} onClick={props.close}>
      <div className="card">
        <span className="close_card" onClick={props.close}></span>
        <img
          className="track_image"
          src={props.track.data.albumOfTrack.coverArt.sources[0].url}
          alt="track image"
        />
        <div className="card_content">
          <div className="track">
            <h4 className="track_name">{props.track.data.name}</h4>
            <a href={props.track.data.uri}>
              <span className="icon__spotify"></span>
            </a>
          </div>
          <h5 className="artists_name">{props.track.data.artists.items[0].profile.name}</h5>
          <h5 className="album_name">
            Album:{' '}
            <a target="_self" className="album_link" href={props.track.data.albumOfTrack.uri}>
              {props.track.data.albumOfTrack.name}
            </a>
          </h5>
          <h5 className="track_duration">
            {'Duration: '}
            {new Date(props.track.data.duration.totalMilliseconds).toISOString().slice(14, 19)}
          </h5>
        </div>
      </div>
    </div>
  );
}
