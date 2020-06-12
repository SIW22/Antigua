import React, { Component } from 'react';
import PuzzleModel from '../models/puzzle';
import Ocean from '../components/Ocean';
import Scroll from '../components/Scroll';
import Compass from '../components/Compass';
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

	rolloutScroll = () => {
		let parchment1 = document.querySelector('.image');
		parchment1.classList.add('reveal');
		parchment1.classList.remove('conceal');
		let rollout = document.querySelector('.assembly');
		rollout.classList.add('rollout');
		rollout.classList.remove('rollup');
		console.log("Rollout Clicked")
	}

	rollupScroll = () => {
		let parchment2 = document.querySelector('.image');
		parchment2.classList.add('conceal');
		parchment2.classList.remove('reveal');
		let rollup = document.querySelector('.assembly');
		rollup.classList.add('rollup');
		rollup.classList.remove('rollout');
		console.log("Rollup Clicked")
	}

	render() {
		return (
			<div>
				<Ocean />
				<Scroll />

				<button onClick={ this.rolloutScroll }>Roll Out</button>

				<button onClick={ this.rollupScroll }>Roll Up</button>

				<button>Load Puzzle</button>

				<Compass />
			</div>
		);
	}
}

export default Home;