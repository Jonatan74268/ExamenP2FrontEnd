import React from 'react';
import './App.css';
import CampeonList from './Components/CampeonList';
import CreateCampeonForm from './Components/CreateCampeonForm';
    
    function App() {
      return (
        <div className="hero-content">  
            
          <CreateCampeonForm />
          <br/>
          <hr/>
          <h1 className='title2'>Lista de campeones</h1>
          <CampeonList />
          <br/> 
          <br/>
          <br/>
        </div>
      );
    }

export default App;
