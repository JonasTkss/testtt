import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SearchBar from '../searchBar/SearchBar';

import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi"

import './Header.css'

function Header() {

    // // const [gameData, setGameData] = useState({});
    // const [filteredResults, setFilteredResults] = useState([]);
    // const [searchParam, setSearchParam] = useState("");


    // useEffect(() => {
    //     fetch(
    //         "https://api.rawg.io/api/games?key=5e6f13569a21475bb210d1577f0e3170"
    //     )
    //     .then((response) => {
    //         setGameData(response.data);
    //     });
    // }, [])

    // const searchGames = (searchValue) => {
    //     setSearchParam(searchValue)
    //     if (searchParam !== ""){
    //         const filteredData = gameData.filter((game) => {
    //             return Object.values(game).join("").toLowerCase().includes(searchParam.toLocaleLowerCase());
    //         })
    //         setFilteredResults(filteredData)
    //     }
    //     else setFilteredResults(gameData)
    // }

    return (
        <div className='wrapper'>
            <div>
                <SearchBar />
            </div>
            <div className='user'>
                <div className='info'>
                    <p>Neroin</p>
                    <span>Alexander Juul Jakobsen</span>
                </div>
                <div className='pfp-circle'>
                    <span></span>
                </div>
                <div className='bell-icon'>
                </div>
                <div className='notification-icon'>
                </div>
            </div>

        </div>
    )
}

export default Header