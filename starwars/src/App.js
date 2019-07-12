import React, { useState, useEffect} from 'react';
import axios from 'axios';
import CharacterMap from './components/CharacterMap'

import './App.css';

const App = () => {
  const [swapi, setSwapi] = useState([])

  useEffect( () => {
    axios
      .get('https://swapi.co/api/people/')
      .then( res => {
        console.log('My api', res.data.results )
        setSwapi(res.data.results)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
     <CharacterMap swapi={swapi} />
    </div>
  );
}

export default App;
