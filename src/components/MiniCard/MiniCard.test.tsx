import React from 'react';
import { render } from '@testing-library/react';
import MiniCard from './MiniCard';

import CardsData from 'cardsData.json';
const tracks = CardsData.tracks.items;

describe('Check MiniCard component', () => {
  test('alt contains correct value', () => {
    render(<MiniCard track={tracks[0]} />);
    const testImage = document.querySelector('img') as HTMLImageElement;
    expect(testImage.alt).toContain('track image');
  });

  test('src contains correct value', () => {
    render(<MiniCard track={tracks[0]} />);
    const trackName = tracks[0].data.albumOfTrack.coverArt.sources[1].url;
    const testImage = document.querySelector('img') as HTMLImageElement;
    expect(testImage.src).toContain(trackName);
  });

  test('track name is correct', () => {
    render(<MiniCard track={tracks[0]} />);
    const trackName = tracks[0].data.name;
    const testTrackName = document.querySelector('.track_name') as HTMLImageElement;
    expect(testTrackName.innerHTML).toContain(trackName);
  });
});
