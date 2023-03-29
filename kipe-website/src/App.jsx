import './App.css';
import React from 'react';
import Header from './Header';
import { Footer, CopyRight } from './Footer';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services';

function App() {
  return (

    <div className="App">
      <Header />
      {/* <Home /> */}
      {/* <Contact /> */}
      {/* <About /> */}
      <Services />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
