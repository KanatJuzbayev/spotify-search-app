import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

import CardsData from 'cardsData.json';
const tracks = CardsData.tracks.items;

describe('Home', () => {
  it('render Home component', () => {
    render(<Home />);
    screen.debug();
    expect(screen.queryByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('All tracks is rendered', () => {
    const { container } = render(<Home />);
    const cards = container.getElementsByClassName('card');
    expect(cards).toHaveLength(tracks.length);
  });
});
