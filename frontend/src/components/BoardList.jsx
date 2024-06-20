import React, {useState} from "react";
import ReactDOM from "react-dom";
import Board from './Board'
import './BoardList.css'


const BoardList = ({boards, onDeleteBoard}) => {


  console.log(boards);
    return (
      <>
      <div className='board-list'>
        {boards.map((board, index) => (
          <Board
            key={board.id}
            title={board.title}
            category={board.category}
            author={board.author}
            imageUrl={board.image}
            onDeleteBoard={() => onDeleteBoard(board.id)}

            >
          </Board>

        ))}

      </div>
      </>
    );
  }
  export default BoardList;