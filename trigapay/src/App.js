import React from 'react';
import './App.css';
import Navigation from './components/navbar'
import Footer from './components/footer'
import Main from './sections/mainArea'

function App() {
  return (
    <React.Fragment>
        <Navigation/>
        <Main/>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
