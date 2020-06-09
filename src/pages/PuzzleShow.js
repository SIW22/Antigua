import React, { Component } from 'react';
import PuzzleCard from '../components/PuzzleCard';
import PuzzleModel from '../models/puzzle';

class PuzzleShow extends Component {
	state = {
		puzzle: {},
		currentPuzzleId: this.props.match.params.id
		}

		componentDidMount() {
			this.fetchData()
		}

		fetchData = () => {
			PuzzleModel.show(this.state.currentPuzzleId)
			.then(data => this.setState({ puzzle: data.puzzle }))
		}

	render() {
		return (
			<div>
				{ this.state.puzzle ? <PuzzleCard { ...this.state.puzzle} /> : 'Loading...' }
			</div>
		);
	}
}

export default PuzzleShow;
