import React, { useState, useEffect} from 'react';
import axios from 'axios';
import CharacterMap from './components/CharacterMap';
import { Header } from 'semantic-ui-react';

import './App.css';

const App = () => {
  const [swapi, setSwapi] = useState()

  useEffect( () => {
    axios
      .get('https://swapi.co/api/people/')
      .then( res => {
        console.log('My api',{swapi})
        setSwapi(res.data.results)
      })
      .catch(err => console.log(err))

      
  },  [])
if(!swapi) return <h1 style={{color: "white"}}>Loading...</h1>
console.log("My SWAPI", swapi)
  return (
    <div className="App">
    <Header size="huge" style={{color: "white"}}>React Wars</Header>
     <CharacterMap swapi={swapi} />
    </div>
  );
}

export default App;
