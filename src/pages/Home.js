import React, { Component } from 'react';
import PuzzleModel from '../models/puzzle';
import Ocean from '../components/Ocean';
import '../App.css';

class Home extends Component {
	state = {
		puzzle: {},
		currentPuzzleId: this.props.match.params.id
	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData = () => {
		PuzzleModel.all()
		.then(data => this.setState({ puzzles: data.puzzles }))
		.catch(err => console.log(err))
	} 

	// fetchData = () => {
	// 	let results = PuzzleModel.all({ puzzle: 'scramble' });
	// 	console.log(results);
	// 	results.count(function(err, qty) {
	// 		if (err) {
	// 			return (err);
	// 		}
	// 		let random = Math.floor(Math.random() * qty);
	// 		console.log(random);
	// 		this.findOne().skip(random).exec()
	// 	}).bind(this) 
	// 	.then(data => this.setState({ puzzles: this.state.currentPuzzleId }))
	// 	.catch(err => console.log(err))
	// }; 
	
	// componentDidMount() {
	// 	this.randomPuzzleOfType()
	// }

	// randomPuzzleOfType = function(callback) {
	// 	this.count(function(err, count) {
	// 		if (err) {
	// 			return callback(err);
	// 		}
	// 		let random = Math.floor(Math.random() * count);
	// 		this.findOne().skip(random).exec(callback);
	// 	}.bind(this));

	// };

		// let results = PuzzleModel.all(
		// 	{ puzzleType: 'scramble' }
		// 	);
		// let random = Math.floor(Math.random() * results.length);
		// results.findOne().skip(random).exec((err, result) => {
		// 	console.log(result);
		// 	})
		// .then(data => this.setState({ currentPuzzleId: data.result }))
		// .catch(err => console.log(err))
	// }; 

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