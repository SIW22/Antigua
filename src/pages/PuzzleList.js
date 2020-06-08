import React, { Component } from 'react';
import PuzzleModel from '../models/puzzle'
import PuzzleCard from '../components/PuzzleCard'
import { Link } from 'react-router-dom'

class PuzzleList extends Component {
	state = {
		puzzles: []
	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData = () => {
		PuzzleModel.all()
		.then(data => this.setState({ puzzles: data.puzzles }))
		.catch(err => console.log(err))
	} 

	render() {
		let puzzleList = this.state.puzzles.map((puzzle, index) => {
			return (
				<Link key={ index } to={`/puzzles/${ puzzle.id}`}>
					<PuzzleCard { ...puzzle } />
				</Link>
			);
		})
		return (
			<div>
				{ this.state.puzzles ? puzzleList : 'Loading...'}
			</div>
		);
	}
}

export default PuzzleList;
