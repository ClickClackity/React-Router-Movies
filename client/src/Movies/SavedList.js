import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span key={movie.id} className="saved-movie">{movie.title}</span>
    ))}
    <Link to='/'>
    <button className="home-button">Home</button>
    </Link>
  </div>
);

export default SavedList;
