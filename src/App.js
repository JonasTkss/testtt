import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import Content from './components/content/Content';

import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <SideBar />
        <Content />
      </div>
    </Router>
  );
}

export default App;
