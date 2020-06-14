import React, { Component } from 'react';
import styled from 'styled-components';

class Greeting extends Component {

	const startGame = () => {
		// submit content
	}

	render() {
		return (
			<div>
				<PuzzleArea classname="puzzle-area">
          <Container className="dropzone">
						<h1>Welcome to Antigua</h1>
						<h3>A mysterious roll of parchment (and a boat) has brought you to this island. Legend speaks of a treasure hidden somewhere here. Let's Explore! </h3>
          </Container>
          <button className="puzzle-submit-btn" onClick={() => startGame()}>Begin Exploring!</button>
        </PuzzleArea>
			</div>
		);
	}
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
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  position: absolute;
`;