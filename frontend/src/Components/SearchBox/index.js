import React from 'react'
import './index.css'

import redBlack from '../../assets/bern-red-black.png'

const SearchBox = () => {
  return (
    <div>
      <img id="search-field__bern-colors" src={redBlack} alt="bern colors"/>
      <input id="search-field__input" type="text" placeholder="Suche"/>
    </div>
  )
}

export default SearchBox;