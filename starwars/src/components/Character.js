import React from 'react';

 const Character = props => {
   console.log(props)
  return (
    <div>
      <h1 className="Header">React Wars</h1>
      <h1>{props.swapi.name}</h1>
      <img src={props.swapi.url} alt="Star Wars Characters"/>
      <h1>{props.swapi.birth_year}</h1>
      <h1>{props.swapi.gender}</h1>
    </div>
  )
}

export default Character;
