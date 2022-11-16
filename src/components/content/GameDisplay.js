import React, { useEffect, useState } from 'react'

import { TfiTarget } from "react-icons/tfi";
import { AiOutlineUserAdd, AiOutlineStar, AiOutlineCheck, AiFillStar } from "react-icons/ai";
import { IoArrowRedoOutline } from "react-icons/io5";



import './GameDisplay.css';

function GameDisplay({ id }) {

    const [isActive, setIsActive] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [gameData, setGameData] = useState({})

    useEffect(() => {
        fetch(
            `https://api.rawg.io/api/games/${id}?key=5e6f13569a21475bb210d1577f0e3170`
        )
            .then((response) => response.json())
            .then((data) => {
                setGameData(data);
            });
    }, [id])

    return (
        <div className='visual'>
            <img src={gameData.background_image} alt="gamebackground" />
            <div className='text'>
                <h3>{gameData.name}</h3>
                <span>Developers</span>
                {/* {gameData.developers[0].name} code before API was changed*/}
                <p>{gameData.description_raw}</p>
                <div className='gradient-line'>
                    <hr />
                </div>
                <div className='game-display-icons'>
                    {isActive ? <AiOutlineCheck style={{ marginLeft: "13px", paddingRight: "1px", cursor: "pointer" }} onClick={() => setIsActive(!isActive)} /> : <TfiTarget style={{ color: "#D1D5E0", marginLeft: "14px", cursor: "pointer" }} onClick={() => { setIsActive(!isActive) }} />}
                    <AiOutlineUserAdd style={{ color: "#D1D5E0", marginLeft: "48px" }} />
                    {isActive2 ? <AiFillStar style={{ marginLeft: "47px", cursor: "pointer" }} onClick={() => { setIsActive2(!isActive2) }} /> : <AiOutlineStar style={{ color: "#D1D5E0", marginLeft: "46px", fontSize: "28px", cursor: "pointer" }} onClick={() => { setIsActive2(!isActive2) }} />}
                    <IoArrowRedoOutline style={{ color: "#D1D5E0", marginLeft: "50px", }} />
                </div>
            </div>
        </div>
    )
}

export default GameDisplay