import React, { Component } from 'react';
import styled from 'styled-components';

class Message1 extends Component {

	const continueGame = () => {
		// submit content
	}

	render() {
		return (
			<div>
				<PuzzleArea classname="puzzle-area">
          <Container className="dropzone">
						<h1>Well Done!</h1>
						<h3>A new location has appeared on the map!</h3>
          </Container>
          <button className="puzzle-submit-btn" onClick={() => continueGame()}>Onto the Next Location!</button>
        </PuzzleArea>
			</div>
		);
	}
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
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  position: absolute;
`;