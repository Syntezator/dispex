import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Company } from './components/Company';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className='row'>
            <img src={logo} className="App-logo" alt="logo" /> 
            
          </div>
        </div>   
      </header>
      <section>
        <div className="container">
          <Company />
        </div>
      </section>
    </div>
  );
}

export default App;
