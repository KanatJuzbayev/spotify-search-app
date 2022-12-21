import React from 'react';
import './SearchBar.css';
import MiniCard from '../MiniCard/MiniCard';

import { fetchData } from 'store/searchActions';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { searchActions } from 'store/searchSlice';

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.search.searchTerm);
  const status = useAppSelector((state) => state.search.status);
  const response = useAppSelector((state) => state.search.response);

  function changeValue(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(searchActions.setSearchTerm(e.target.value));
  }

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    dispatch(searchActions.resetResponse());

    if (validate(value).isValid) {
      dispatch(searchActions.setStatus('Downloading...'));
      dispatch(fetchData(value));
    } else {
      dispatch(searchActions.setStatus(validate(value).error));
    }
  }

  function validate(value: string) {
    return value.length > 2 ? { isValid: true } : { error: 'Query must be more than one letter' };
  }

  return (
    <>
      <form action="" className="search_bar" onSubmit={onSubmit}>
        <input
          className="search_input"
          type="text"
          placeholder="Search ..."
          onChange={changeValue}
          value={value}
        />
        <button className="search_button" type="submit">
          <span className="ico-search"></span>
        </button>
      </form>
      <div className="layout-4-column cards-wrapper">
        {response ? (
          response.tracks.items.map((track, i) => {
            return <MiniCard track={track} key={i} />;
          })
        ) : (
          <p>{status}</p>
        )}
      </div>
    </>
  );
}
