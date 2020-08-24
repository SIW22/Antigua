import React from 'react';
import styled from 'styled-components';

const Congrats = () => {
	// render() {
	return (
		<div>
			<PuzzleArea classname="puzzle-area">
				<Container className="dropzone">
					<h1>Congratulations!</h1>
					<h2>Through trials and folly, <br></br>the treasures of Antigua are yours!</h2>
				</Container>
				<button className="puzzle-submit-btn">
				Play Again?</button>
			</PuzzleArea>
		</div>
	);
}

export default Congrats;

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