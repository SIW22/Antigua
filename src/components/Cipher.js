import React, { useState, useEffect } from 'react';
import PuzzleModel from '../models/puzzle';
import styled from 'styled-components';
import CipherBlock from './CipherBlock';


const Cipher = () => {
	const [state, setState] = useState({ encrypted: [] });

  useEffect(() => {
    fetchPuzzleData()
  }, [])

  const fetchPuzzleData = () => {
    PuzzleModel.singleCipher()
    .then(data =>{
			console.log(data.puzzles);
      setState({ ...data.puzzles })
    })
	}

	const alph = [
		"A",	"B",	"C",	"D",	"E",	"F",	"G",	"H",	"I",
		"J",	"K",	"L",	"M",	"N",	"O",	"P",	"Q",	"R",	
		"S",	"T",  "U",	"V",	"W",  "X",	"Y",	"Z"
	];

	const phal = () => {}

	const answerKey = this.state.data.puzzles.answerKey;
	
	const substitution = (letter) => {
		if (alph.includes(letter)) {
			const index = alph.indexOf(letter);
			return phal[index];
		} else {
			return letter;
		}
	};
	
	const handleSubstitution = () => {
		const encrypted = answerKey.split('').map((letter) => substitution(letter));
		// .join('');
		setState(state => ({
			...state,
			encrypted: encrypted
		}));
		console.log(encrypted);
	};
	
	const createForm = () => {
		const container = document.querySelector('.dropzone');
		handleSubstitution();
		this.state.encrypted.forEach((letter) => {
			document.createElement(({ CipherBlock }).innerHTML = letter).appendChild(container);
		});
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
          <button className="puzzle-submit-btn" onClick={() => submitAnswer()} >Check Answer</button>
        </PuzzleArea>
      </>
		);
	}
}

export default Cipher;

const PuzzleArea = styled.div`
  height: 400px;
  width: 700px;
  margin-left: 50px;
  margin-top: -450px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 300px;
  width: 500px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  position: absolute;
`;