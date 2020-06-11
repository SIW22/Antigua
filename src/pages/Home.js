import React, { Component } from 'react';
import PuzzleModel from '../models/puzzle';
import Ocean from '../components/Ocean';
import '../App.css';

class Home extends Component {
	state = {
		puzzle: {},
		currentPuzzleId: this.props.match.params.id
	}

	// componentDidMount() {
	// 	this.randomPuzzleOfType()
	// }

	// randomPuzzleOfType = () => {
	// 	let results = PuzzleModel.all({ puzzleType: 'scramble' });
	// 	let random = Math.floor(Math.random() * results.length);
	// 	results.findOne().skip(random).exec((err, result) => {
	// 		console.log(result);
	// 		})
	// 	.then(data => this.setState({ currentPuzzleId: data.result }))
	// 	.catch(err => console.log(err))
	// } 

	render() {
		return (
			<div>
				<Ocean />
				<button>Load Puzzle</button>
			</div>
		);
	}
}

export default Home;
