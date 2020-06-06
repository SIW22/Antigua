import React, { Component } from 'react';

class PuzzleCreate extends Component {
	state = {
		puzzleType: '',
		imageFile: '',
		answerKey: '',
		difficulty: 0,
		completed: false
	}

	handleSubmit = (event) => {
		event.preventDefault()

		PuzzleModel.create(this.state)
			.then(data => {
				this.props.history.push('/puzzles')
			})
	}

	handleChange = (event) => {
		if (event.target.type !== "text") {
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
				<h2>New Puzzle</h2>
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
							<option value="Cypher">Cypher</option>
							</select>
					</div>
					<div className="form-input">
						<input 
							type="text"
							name="imageFile"
							id="imageFile"
							value={this.state.imageFile}
							onChange={this.handleChange}	
							/>
					</div>
					<div className="form-input">
						<input 
							type="text"
							name="answerKey"
							id="answerKey"
							value={this.state.answerKey}
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
							unchecked={this.state.completed}
							onChange={this.handleChange}
						/>
					</div>
					<input type="Submit" value="Save" />
				</form>
			</div>
		);
	}
}

export default PuzzleCreate;
