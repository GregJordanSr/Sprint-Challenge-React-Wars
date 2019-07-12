import React from 'react';

 const Character = props => {
   console.log("CC", props)
  return (
    <div style={{color: "white"}}>
      <h1>{props.character.name}</h1>
       <a href={props.character.url}>Click here to see your favorite character</a>
      <h1>{props.character.birth_year}</h1>
      <h1>{props.character.gender}</h1>
    </div>
  )
}

export default Character;
