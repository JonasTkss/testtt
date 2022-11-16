import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Content.css";
import GameDisplay from "./GameDisplay";

function Content() {

  const apiKey = (`https://api.rawg.io/api/games?key=5e6f13569a21475bb210d1577f0e3170&page_size=8`);
  // const creatorsApiKey = (`https://api.rawg.io/api/publishers?key=5e6f13569a21475bb210d1577f0e3170&page_size=8`)
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(apiKey)
      .then((results) => results.json())
      .then((data) => {
        setGames(data.results)
      })


  }, [])


  return (
    <div className="content-wrapper">
      <div className="first-section">
        <div className="first-title">
          <h1>Games</h1>
        </div>
        <div className="hashtagbutton">
          <ul>
            <li>#All</li>
            <li>#Recent</li>
            <li>#Upcoming</li>
            <li>#Top100</li>
          </ul>
        </div>
        <div className="game-grid">
          <div className="second-title">
            <h3>Most anticipated</h3>
          </div>
        </div>
      </div>
      <div className="game-display">

        {games.map((game) =>
          <div className="container">
            <GameDisplay id={game.id} key={game.id} />
          </div>
        )}


        {/* {
                games.map(game => {
                  return (
                    <div key={game.id}>
                      <img src={game.background_image} />
                      <h3>{game.name}</h3>
                    </div>
                  )
                })
              } */}
      </div>
    </div>
  )
}

export default Content