import React from 'react';
import Navbar from './components/Navbar';
import HomepageContent from './components/HomepageContent';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomepageContent />
      <Footer />
    </div>
  );
}

export default App;