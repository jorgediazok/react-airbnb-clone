import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './SearchResult.css';

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="searchResult">
      <img src={img} alt="image" />
      <FavoriteBorderIcon className="searchResult__heart" />

      <div className="searchResult__info">
        <div className="searchResult__infoTop"></div>
        <div className="searchResult__infoBottom"></div>
      </div>
    </div>
  );
}

export default SearchResult;
