const url = `http://localhost:3001/api/v1`

class PuzzleModel {
	static all = () => {
		return fetch(`${url}/puzzles`).then(res => res.json())
	}

	static show = (puzzleId) => {
		return fetch(`${url}/puzzles/${puzzleId}`)
		.then(res => res.json())
	}

	static create = (puzzleData) => {
		return fetch(`${url}/puzzles`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(puzzleData)
		})
		.then(res => res.json())
	}

	static update = (puzzleId) => {
		return fetch(`${url}/puzzles/${puzzleId}`, {
			method: "PUT",
		})
		.then(res => res.json())
	}

	static delete = (puzzleId) => {
		return fetch(`${url}/puzzles/${puzzleId}`, {
			method: "DELETE",
		})
		.then(res => res.json())
	}
}

export default PuzzleModel