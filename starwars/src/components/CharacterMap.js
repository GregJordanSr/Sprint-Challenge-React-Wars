import React from 'react'
import Character from './Character';

 const CharacterMap = props => {
    return (
        <div>
            {props.swapi.map( (character, i) => 
             <Character character={character} key={i}/>
                
            )}
        </div>
    )
}
export default CharacterMap;