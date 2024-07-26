import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
