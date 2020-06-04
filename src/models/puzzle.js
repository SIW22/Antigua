const url = `http://localhost:3001/api/v1`

class Puzzle {
	static all = () => {
		return fetch(`${url}/puzzles`).then(res => res.json())
	}
}

export default Puzzle