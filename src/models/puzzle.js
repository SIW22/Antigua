const url = `http://localhost:3001/api/v1`

class PuzzleModel {
	static all = () => {
		return fetch(`${url}/puzzles`).then(res => res.json())
	}

	static show = (puzzleId) => {
		return fetch(`${url}/puzzles/${puzzleId}`)
		.then(res => res.json())
	}

	static singleScramble = (puzzleId) => {
		return fetch(`${url}/puzzles/scramble`)
		.then(res => res.json())
	}

	static singleCipher = (puzzleId) => {
		return fetch(`${url}/puzzles/cipher`)
		.then(res => res.json())
	}

	static singleSymbol = (puzzleId) => {
		return fetch(`${url}/puzzles/symbol`)
		.then(res => res.json())
	}

	static singleTileLoc = (puzzleId) => {
		return fetch(`${url}/puzzles/tileloc`)
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

	static update = (puzzleId, puzzleData) => {
		return fetch(`${url}/puzzles/${puzzleId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(puzzleData)
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