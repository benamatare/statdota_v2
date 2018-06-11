import React from 'react';
import Search from './searchbar.js';
import '../css/header.css';

const Header = () => {
  return (
   <div className="top-nav">
     <a> Home </a>
     <a> Heroes </a>
     <a> <Search /></a>
   </div>
)};
export default Header;
