import React, { useState, useCallback, useEffect } from 'react';
import PuzzleModel from '../models/puzzle';


const Cypher = () => {
	const [state, setState] = useState({ tiles: [] });

  useEffect(() => {
    fetchPuzzleData()
  }, [])

  const fetchPuzzleData = () => {
    PuzzleModel.singleCypher()
    .then(data =>{
      console.log(data.puzzles);
      setState({ ...data.puzzles, state.guess })
    })
	}

	const alph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	
	let encrypted = document.getElementById('encrypted');
	
	caeser = (letter) => {
		const shift = Math.floor(Math.random() * 26);
		if (alph.includes(letter)) {
			const position = alph.indexOf(letter);
			const newPosition = (position + shift) % 26;
			return alph[newPosition]
		}
		else {
			return letter
		}
	}
 
	handleCypher = (event) => {
		event.preventDefault();
		encrypted = [...data.answerKey].map(letter => caeser(letter)).join('');
	}



  const submitAnswer = () => {
    if (JSON.stringify(state.answerKey) === JSON.stringify(state.guess)) {
      dropZone.classList.add('dzcorrect');
      dropZone.classList.remove('dzincorrect');
      console.log('Correct');
      return;
    } else {
      dropZone.classList.add('dzincorrect');
      dropZone.classList.remove('dzcorrect');
      console.log('Incorrect')
    }
  }
  
		if (!state) return "...Loading"
		else {

		return (
			<div>
				
			</div>
		);
	}
}

export default Cypher;
