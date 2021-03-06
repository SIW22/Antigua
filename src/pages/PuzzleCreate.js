import React, { Component } from 'react';
import PuzzleModel from '../models/puzzle';

class PuzzleCreate extends Component {
	state = {
		puzzleType: '',
		imageFile: '',
		answerKey: '',
		clue: '',
		difficulty: 0,
		completed: false
	}

	handleSubmit = (event) => {
		event.preventDefault()
		console.log(this.state)
		PuzzleModel.create(this.state)
			.then(data => {
				this.props.history.push('/puzzles')
			})
	}

	handleChange = (event) => {
		console.log("selection");
		if (event.target.type === "checkbox") {
			this.setState({
				completed: !this.state.completed
			})
		} else {
			this.setState({
				[event.target.name]: event.target.value
			})
		}
	}

	render() {
		return (
			<div>
				<h2>Create New Puzzle</h2>
				<form onSubmit={this.handleSubmit}>
					<div className="form-input">
						<select 
							type="text"
							name="puzzleType"
							id="Puzzletype"
							placeholder="Select a Puzzle Type"
							value={this.state.puzzleType}
							onChange={this.handleChange}	
							>
							<option value="symbolMatch">Symbol Match</option>
							<option value="scramble">Scramble</option>
							<option value="tilePlacement">Tile Placement</option>
							<option value="cipher">Cipher</option>
						</select>
					</div>
					<div className="form-input">
						<input 
							type="text"
							name="imageFile"
							id="imageFile"
							placeholder="link to images"
							value={this.state.imageFile}
							onChange={this.handleChange}	
							/>
					</div>
					<div className="form-input">
						<input 
							type="text"
							name="answerKey"
							id="answerKey"
							placeholder="answer"
							value={this.state.answerKey}
							onChange={this.handleChange}	
							/>
					</div>
					<div className="form-input">
						<input 
							type="text"
							name="clue"
							id="clue"
							placeholder="clue"
							value={this.state.clue}
							onChange={this.handleChange}	
							/>
					</div>
					<div className="form-input">
						<input 
							type="number"
							name="difficulty"
							id="difficulty"
							value={this.state.difficulty}
							onChange={this.handleChange}	
							/>
					</div>
					<div className="form-input">
						<label htmlFor="completed">Completed</label>
						<input 
							type="checkbox"
							name="completed"
							id="completed"
							unchecked={this.state.completed ? 'checked' : 'unchecked'}
							onChange={this.handleChange}
						/>
					</div>
					<br />
					<input type="Submit" defaultValue="Save" />
				</form>
			</div>
		);
	}
}

export default PuzzleCreate;
