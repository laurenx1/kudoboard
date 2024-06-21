import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Board from './Board'
import './BoardList.css'

// import CardList from './CardList'
import { useNavigate } from "react-router-dom";


const BoardList = ({boards, onDeleteBoard}) => {


  const navigate = useNavigate();

  const handleViewBoard = (boardId) => {
    navigate(`/viewBoard/${boardId}`);
  }


  console.log(boards);
    return (
      <>
      <div className='board-list'>
        {boards.map((board, index) => (
          <Board
            key={board.id}
            whichBoard = {board}
            title={board.title}
            category={board.category}
            author={board.author}
            imageUrl={board.image}
            onDeleteBoard={() => onDeleteBoard(board.id)}
            handleViewBoard={handleViewBoard}
            >
          </Board>

        ))}

      </div>
      </>
    );
  };
  
  export default BoardList;