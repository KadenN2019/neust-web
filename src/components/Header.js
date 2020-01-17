import React from 'react';
import Logo from '../assets/NeustLogoWhiteBasic.png'
import '../styles/header.css'

import { Link } from "react-router-dom"

function App() {
  return (
    <div className="Header">
      <Link className="linktoMain" to="/">
        <img  className="HeaderLogo" src={Logo} alt="Neust"/>
      </Link>
      <div className="HeaderLinks">
        <Link to="/automotive">
          <div className="LinkTo">
            Automotive
          </div>
        </Link>
        <Link to="/portraits">
          <div className="LinkTo">
            Portraits
          </div>
        </Link>
        <Link to="/landscape">
          <div className="LinkTo">
            Landscape
          </div>
        </Link>
        <Link to="/engagement">
          <div className="LinkTo">
            Engagement
          </div>
        </Link>
      </div>
    </div>
  );
}

export default App;
