import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Draggable from './Draggable';

const answerKey = ['S','T','E','A','M'];
const width = 80;

const Scramble = () => {
  const tiles = ['M','A','T','E','S'];
  const [state, setState] = useState({
    order: tiles,
    dragOrder: tiles,
    draggedIndex: null
  });

  const handleDrag = useCallback(({translation, id}) => {
    const delta = Math.round(translation.x / width);
    const index = state.order.indexOf(id);
    const dragOrder = state.order.filter(index => index !== id);

    dragOrder.splice(index + delta, 0, id);

    setState(state => ({
      ...state,
      draggedIndex: id,
      dragOrder
    }))
  }, [state.order]);

  const handleDragEnd = useCallback(() => {
    setState(state => ({
      ...state,
      order: state.dragOrder,
      draggedIndex: null
    }));
  
  }, []);

  const submitAnswer = () => {
    let dropZone = document.querySelector('.dropzone');
    if (JSON.stringify(answerKey) === JSON.stringify(state.order)) {
      dropZone.style.backgroundColor = 'lightgreen';
      console.log('Correct');
      return;
    } else {
      dropZone.style.backgroundColor = '#FF739D';
      console.log('Incorrect')
    }
  }

  return (
      <>
        <Container className="dropzone">
          {tiles.map(index => {
            const isDragging = state.draggedIndex === index;
            const dragged = state.order.indexOf(index) * (width + 10);
            const left = state.dragOrder.indexOf(index) * (width + 10);
            return (
              <Draggable
                key={index}
                id={index}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                >
                <Tile 
                  isDragging={isDragging}
                  left={isDragging ? dragged : left}
                >
                  {index}
                </Tile>
              </Draggable>
            )
          })}
        </Container>
        <button onClick={() => submitAnswer()} >Submit</button>
      </>
    );
  }
  
export default Scramble;

const Container = styled.div`
  height: 100px;
  width: 460px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
`;

const Tile = styled.div.attrs(props => ({
  style: {
    left: `${props.left}px`,
    transition: props.isDragging ? 'none' : 'all 500ms'
  }
}))`
  height: 80px;
  width: ${width}px;
  margin-top: 8px;
  margin-left: 8px;
  user-select: none;
  background-color: #807060;
  border-radius: 5px;
  border: 2px solid #605040;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-size: 30px;
  left: calc(50vh - 150px);
  color: #403020;
`