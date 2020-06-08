import React from 'react';

const PuzzleCard = (props) => {
	return (
		<div>
			<h3>{ props.puzzleType }</h3>
			<h3>Difficulty Level: { props.difficulty }</h3>
		</div>
	);
}

export default PuzzleCard;
