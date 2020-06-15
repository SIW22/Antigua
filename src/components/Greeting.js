import React from 'react';
import styled from 'styled-components';

const Greeting = () => {

	// const startGame = () => {
	// 	// submit content
	// }

  return (
    <div>
      <PuzzleArea classname="puzzle-area">
        <Container className="dropzone">
          <h1>Welcome to Antigua</h1>
           
          <h2>A mysterious roll of parchment <br/> ( and a boat ) <br/> has brought you to this island. <br/> Legend speaks of a treasure hidden somewhere here. </h2> 
          
          <h1>Let's Explore! </h1>
        </Container>
        <button className="puzzle-submit-btn"
        //  onClick={() => startGame()}
         >Begin Exploring!</button>
      </PuzzleArea>
    </div>
  );
}

export default Greeting;

const PuzzleArea = styled.div`
  height: 400px;
  width: 700px;
  margin-left: 50px;
  margin-top: -450px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 300px;
  width: 460px;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  position: absolute;
`;