import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

import CardsData from 'cardsData.json';
const tracks = CardsData.tracks.items;

describe('Check Card component', () => {
  test('alt contains correct value', () => {
    render(<Card track={tracks[0]} isOpen={true} close={() => {}} />);
    const testImage = document.querySelector('img') as HTMLImageElement;
    expect(testImage.alt).toContain('track image');
  });

  test('src contains correct value', () => {
    render(<Card track={tracks[0]} isOpen={true} close={() => {}} />);
    const trackName = tracks[0].data.albumOfTrack.coverArt.sources[0].url;
    const testImage = document.querySelector('img') as HTMLImageElement;
    expect(testImage.src).toContain(trackName);
  });

  test('track name is correct', () => {
    render(<Card track={tracks[0]} isOpen={true} close={() => {}} />);
    const trackName = tracks[0].data.name;
    const testTrackName = document.querySelector('.track_name') as HTMLImageElement;
    expect(testTrackName.innerHTML).toContain(trackName);
  });

  test('track artist is correct', () => {
    render(<Card track={tracks[0]} isOpen={true} close={() => {}} />);
    const artistName = tracks[0].data.artists.items[0].profile.name;
    const testArtistName = document.querySelector('.artists_name') as HTMLImageElement;
    expect(testArtistName.innerHTML).toContain(artistName);
  });

  test('Album contains correct link', () => {
    render(<Card track={tracks[0]} isOpen={true} close={() => {}} />);
    const albumLink = tracks[0].data.albumOfTrack.uri;
    const testAlbumLink = document.querySelector('.album_link') as HTMLImageElement;
    expect(testAlbumLink.getAttribute('href')).toContain(albumLink);
  });

  test('Track duration is correct', () => {
    render(<Card track={tracks[0]} isOpen={true} close={() => {}} />);
    const trackDuration = new Date(tracks[0].data.duration.totalMilliseconds)
      .toISOString()
      .slice(14, 19);
    const testTrackDuration = document.querySelector('.track_duration') as HTMLImageElement;
    expect(testTrackDuration.innerHTML).toContain(trackDuration);
  });
});
