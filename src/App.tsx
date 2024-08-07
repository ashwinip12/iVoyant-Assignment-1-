import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Sidebar/>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;
