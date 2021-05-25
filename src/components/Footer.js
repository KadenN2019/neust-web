import React from 'react';
import '../styles/footer.css'
import { Link } from "react-router-dom"
import LogoSymbol from '../assets/Neust-Symbol2.png'


function App() {
  return (
    <div className="footer">
      <div className="FooterLinks">
        <a className="LinkSocial" href="https://www.instagram.com/_neust_/" target="_blank">
          <i class="fa fa-instagram"></i>
        </a>
        {/* <a className="LinkSocial" href="https://twitter.com/" target="_blank">
          <i class="fa fa-twitter"></i>
        </a> */}
        <a className="LinkSocial" href="mailto:kadenn2019@gmail.com" target="_blank">
        <i class="fa fa-envelope"></i>
        </a>
      </div>
      <div className="FooterLinks">
        <a className="LinkToWeb" href="https://kadenn2019.github.io/" target="_blank">
          Powered by Kaden Neuman
        </a>
      </div>
    </div>
  );
}

export default App;
