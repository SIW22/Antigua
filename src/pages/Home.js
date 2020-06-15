import React, { Component } from 'react';
import PuzzleModel from '../models/puzzle';
import Ocean from '../components/Ocean';
import Island from '../components/Island';
import Scroll from '../components/Scroll';
import Compass from '../components/Compass';
import '../App.css';

class Home extends Component {

	state = {
		puzzle: {},
		currentPuzzleId: this.props.match.params.id,
		scrollIndex: 0
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
		// this.setState({scrollIndex:1});
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
				<Island />
				<Scroll scrollIndex={this.state.scrollIndex} />
				<Compass />

					<div className="temp-btns">

						<button className="roll-up" onClick={ this.rollupScroll }>Roll Up</button>

						<button className="roll-out" onClick={ this.rolloutScroll }>Roll Out</button>

					</div>
					{/* <button>Load Puzzle</button> */}
			</div>
		);
	}
}

export default Home;