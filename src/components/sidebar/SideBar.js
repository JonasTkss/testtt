import React from 'react';

import { FaTwitter, FaTiktok, FaFacebookF, FaInstagram, FaTwitch } from 'react-icons/fa';

import './SideBar.css';


function SideBar() {
  return (
    <div className='sidebar'>
      <div className='logo'>
      </div>
      <div className='left-menu'>
        <div className='title'>
          <h6>ACTIVITIES</h6>
        </div>
        <ul>
          <li id='games'><a href="#">Games</a></li>
          <li id='tourneys'><a href="#">Tournaments</a></li>
          <li id='teams'><a href="#">Teams</a></li>
        </ul>
        <div className='title2'>
          <h6>OTHER</h6>
        </div>
        <ul>
          <li id='news'><a href="#">News</a></li>
          <li id='partners'><a href="#">Partners</a></li>
          <li id='about'><a href="#">About</a></li>
          <li id='help'><a href="#">Help</a></li>
        </ul>
      </div>
      <div className='create-button'>
        <button className='create'>
          <p>CREATE</p>
        </button>
        <div className='socials'>
          <span><FaTwitter size={'15px'} /> <FaTiktok size={'15px'} /> <FaFacebookF size={'15px'} /> <FaInstagram size={'16px'} /> <FaTwitch size={'15px'} /></span>
        </div>
      </div>
    </div>
  )
}

export default SideBar