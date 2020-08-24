import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

		deletePuzzle = () => {
			PuzzleModel.delete(this.state.currentPuzzleId)
			.then (res => this.props.history.push("/puzzles"));
		}

	render() {
		return (
			<>
				<div>
					{ this.state.puzzle ? <PuzzleCard { ...this.state.puzzle} /> : 'Loading...' }
				</div>

				<Link to={{
						pathname: `/puzzles/update/${ this.state.currentPuzzleId }`,
						state: this.state.puzzle
				}}>
					<span>Edit</span>
				</Link>

				<button onClick={ this.deletePuzzle } >Delete</button>

			</>
		);
	}
}

export default PuzzleShow;