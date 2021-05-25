import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom"
import { slide as Menu } from 'react-burger-menu'

import Logo from '../assets/NeustLogoWhiteBasic.png'

import '../styles/header.css'

const MyContext = React.createContext();

// create the provider
const MyProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(true)
  
  return (
    <MyContext.Provider value={{
      isMenuOpen: menuOpenState,
      toggleMenu: () => setMenuOpenState(!menuOpenState),
      stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

// create a button that calls a context function to set a new open state when clicked
const Button = () => {
  const ctx = useContext(MyContext)
  return (
    <button className="button" onClick={ctx.toggleMenu}>
      <div className="burger">
        <i class="fa fa-bars"></i>
      </div>
    </button>
  )
}

// create a navigation component that wraps the burger menu
const Navigation = () => {
  const ctx = useContext(MyContext)

  return (
    <Menu 
      customBurgerIcon={false}
      isOpen={ctx.isMenuOpen}
      onStateChange={(state) => ctx.stateChangeHandler(state)}
      width={ '100vw' }
      // height={ '100vh' }
    >
      <div className="HeaderLinks">
        <Link to="/automotive">
          <div className="LinkTo">
            Automotive
          </div>
        </Link>
        <Link to="/offroad">
          <div className="LinkTo">
            Offroad Racing
          </div>
        </Link>
        <Link to="/portraits">
          <div className="LinkTo">
            Portraits
          </div>
        </Link>
        <Link to="/engagement">
          <div className="LinkTo">
            Wedding
          </div>
        </Link>
        <Link to="/landscape">
          <div className="LinkTo">
            Landscape
          </div>
        </Link>
      </div>
    </Menu>
  )
}

// default export here
function App(){
  return (
    <MyProvider>
      <div className="Header">
        <Link className="linktoMain" to="/">
          <img  className="HeaderLogo" src={Logo} alt="Neust"/>
        </Link>
        <Button/>
        <Navigation/>
      </div>


      <div className="MainHeader">
      <Link className="linktoMain" to="/">
        <img  className="HeaderLogo" src={Logo} alt="Neust"/>
      </Link>

      <div className="HeaderLinks">
        <Link to="/automotive">
          <div className="LinkTo">
            Automotive
          </div>
        </Link>
        <Link to="/offroad">
          <div className="LinkTo">
            Offroad Racing
          </div>
        </Link>
        <Link to="/portraits">
          <div className="LinkTo">
            Portraits
          </div>
        </Link>
        <Link to="/engagement">
          <div className="LinkTo">
            Wedding
          </div>
        </Link>
        <Link to="/landscape">
          <div className="LinkTo">
            Landscape
          </div>
        </Link>
      </div>
    </div>
    </MyProvider>
  )
}

export default App;