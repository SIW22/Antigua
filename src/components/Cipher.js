import React, { useState, useEffect } from 'react';
import PuzzleModel from '../models/puzzle';
import styled from 'styled-components';
import CipherBlock from './CipherBlock';


const Cipher = () => {
	const [state, setState] = useState({});
	const [encrypted, setEncrypted] = useState([]);
  useEffect(() => {
		fetchPuzzleData()
		console.log(state)
	}, [])
	
	useEffect(() => {
		if (state) {
			handleSubstitution()
		}
	}, [state]);

  const fetchPuzzleData = () => {
    PuzzleModel.singleCipher()
    .then(data =>{
			setState({ ...data.puzzles });
		})
	}

	const alph = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z"
	];
	
	const setphal = () => {
	 const phal = [];
		alph.forEach(letter => {
			let foundRandom = false;
			while (!foundRandom) {
				let randomLetter = alph[Math.floor(Math.random() * 26)];
				if (!phal.includes(randomLetter)) {
					foundRandom = true;
					phal.push(randomLetter);
				}
			}
		})
		return phal;
	}
	
	const phal = setphal();
	
	const substitution = (letter) => {
		if (alph.includes(letter)) {
			const index = alph.indexOf(letter);
			return phal[index];
		} else {
			return letter;
		}
	};
	
	const handleSubstitution = () => {
		if (Object.keys(state).length !== 0) {
			const encrypted = state.answerKey.map((letter) => substitution(letter));
		setEncrypted(encrypted);
		}
	}

	const createForm = () => {
		if (encrypted) {
		return encrypted.map((letter, index) => {
			return <CipherBlock letter = {letter} key = {index} />
		})}
		else {
			return "Ye Olde Loading Screen..."
		}
	}

  const submitAnswer = () => {
  //   if (JSON.stringify(state.answerKey) === JSON.stringify(state.guess)) {
  //     dropZone.classList.add('dzcorrect');
  //     dropZone.classList.remove('dzincorrect');
  //     console.log('Correct');
  //     return;
  //   } else {
  //     dropZone.classList.add('dzincorrect');
  //     dropZone.classList.remove('dzcorrect');
  //     console.log('Incorrect')
  //   }
  }
  
		if (!state) return "...Loading"
		else {

		return (
			<>
        <PuzzleArea classname="puzzle-area">
          <Container className="dropzone">
						{ createForm() }
          </Container>
          <button className="puzzle-submit-btn" onClick={() => submitAnswer()}>Check Answer</button>
        </PuzzleArea>
      </>
		);
	}
}

export default Cipher;

const PuzzleArea = styled.div`
  height: 400px;
  width: 600px;
  margin-left: 100px;
  margin-top: -500px;
  display: flex;
	flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 300px;
  width: 500px;
	display: flex;
  font-size: 25px;
	flex-direction: row;
	flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  position: absolute;
`;

