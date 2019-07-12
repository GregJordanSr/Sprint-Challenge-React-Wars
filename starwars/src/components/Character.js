import React from 'react';
import { Container, Card } from 'semantic-ui-react';

 const Character = props => {
   console.log("CC", props)
  return (
    <Container>
        <br/>
        <br/>
        
          <Card align style={{color: "black", margin:"auto", background: "#59D5E1", opacity: 0.8}}
            header={props.character.name}
            description={props.character.birth_year}
            meta={props.character.gender}
            color="red"
          />
    </Container>
  )
}

export default Character;
