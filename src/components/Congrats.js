import React, { Component, Link } from 'react';
import styled from 'styled-components';

class Congrats extends Component {
	render() {
		return (
			<div>
				<PuzzleArea>
					<Container>
						<h1>Congratulations!</h1>
						<h3>Through trials and folly, <br></br>the treasures of Antigua are yours!</h3>
					</Container>
					<button className="puzzle-submit-btn"><Link>Play Again?</Link></button>
				</PuzzleArea>
			</div>
		);
	}
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
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  position: absolute;
`;