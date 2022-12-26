import React from 'react';
import './Home.css';
import SearchBar from '../SearchBar/SearchBar';
import Card from 'components/Card/Card';

export default function Home() {
  return (
    <section>
      <h3 className="page-title">Home page</h3>
      <h4 className="block-title">Here you can find songs from Spotify</h4>
      <SearchBar />
    </section>
  );
}
