import React from 'react';
import '../App.css';

const PuzzleCard = (props) => {
	return (
		<div className="puzzle-card">
			<h3>{ props.puzzleType }</h3>
			{/* <h3>{ props.id }</h3> */}
			<h3>{ props.clue }</h3>
			<h3>difficulty: { props.difficulty }</h3>
		</div>
	);
}

export default PuzzleCard;
