import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { FiSearch } from 'react-icons/fi'
import GameDisplay from '../content/GameDisplay';
import "./SearchBar.css";


function SearchBar() {

  const [games, setGames] = useState([]);
  const [text, setText] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const apiKey = (`https://api.rawg.io/api/games?key=5e6f13569a21475bb210d1577f0e3170`);

  useEffect(() => {
    const loadGames = async () => {
      const response = await axios.get(apiKey);
      setGames(response.data.results)
    }
    loadGames();
  }, [])

  const onChangeHandler = (text) => {
    let matches = []
    if (text.length > 0) {
      matches = games.filter(games => {
        const regex = new RegExp(`${text}`, "gi");
        return games.name.match(regex)
      })
    }
    console.log('matches', matches)
    setSuggestions(matches)
    setText(text)
  }
  return (
    <div>
      <div className='arrows'>
        <span className='first'></span>
        <span className='second'></span>
      </div>
      <div className='search-input'>
        <FiSearch size={17} style={{ position: "absolute", left: "547px", top: "50px", zIndex: "99", color: "gray" }} />
        <input type="search" placeholder='&#xF002; Search ...' className='search' onChange={e => onChangeHandler(e.target.value)} value={text} />
        <div className='dropdown'>
        {suggestions && suggestions.map((suggestion, i) =>
          <div key={i} className="onclick_dropdown">
            {/* <img src={suggestion.background_image} alt="gamebackground" /> */}
            <ul>
            <img src={suggestion.background_image} alt="gamebackground" />
              <li>{suggestion.name}</li>
            </ul>
          </div>
        )}
        </div>
      </div>


    </div>
  )
}



export default SearchBar
