import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Board from './Board'
import './BoardList.css'

import CardList from './CardList'


const BoardList = ({boards, onDeleteBoard}) => {

  const [openBoard, setOpenBoard] = useState(false); 
  const [boardOpened, setBoardOpened] = useState(null); 


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
            setOpenBoard={setOpenBoard}
            setBoardOpened={setBoardOpened}
            >
          </Board>

        ))}
        {openBoard && <CardList boardOpened={boardOpened}></CardList>}

      </div>
      </>
    );
  }
  export default BoardList;