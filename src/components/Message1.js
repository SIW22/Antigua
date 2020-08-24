import React from 'react';
import styled from 'styled-components';

const Message1 = () => {

	// const continueGame = () => {
	// 	// submit content
	// }

  return (
    <div>
      <PuzzleArea  classname="puzzle-area">
        <Container className="dropzone">
          <h1>Well Done!</h1>
          <h2>A new location has appeared on the map!</h2>
        </Container>
        <button className="puzzle-submit-btn"
        //  onClick={() => continueGame()}
         >Onward!</button>
      </PuzzleArea>
    </div>
  );
}

export default Message1;

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