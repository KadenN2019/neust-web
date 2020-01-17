import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "font-awesome/css/font-awesome.min.css"

import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import automotive from './automotive'
import portraits from './portraits'
import landscape from './landscape'
import engagement from './engagement'

import '../styles/App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Route exact path="/" component={Main} />
          <Route path="/automotive" component={automotive}/>
          <Route path="/portraits" component={portraits}/>
          <Route path="/landscape" component={landscape}/>
          <Route path="/engagement" component={engagement}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
