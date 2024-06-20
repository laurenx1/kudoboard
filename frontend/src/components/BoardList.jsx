import React, {useState} from "react";
import ReactDOM from "react-dom";
import Board from './Board'
import './BoardList.css'
import CardList from './CardList'

const BoardList = ({boards, onDeleteBoard}) => {
  const [viewBoard, setViewBoard] = useState(null);
  const [showCards, setShowCards] = useState(false);

  console.log(boards);
    return (
      <>
      <div className='board-list'>
        {boards.map((board) => (
          <Board
            key={board.id}
            board={board}
            title={board.title}
            category={board.category}
            author={board.author}
            imageUrl={board.image}
            onDeleteBoard={() => onDeleteBoard(board.id)}
            setShowCards={setShowCards}
            setViewBoard={setViewBoard}
            cards={board.cards}
            >
          </Board>

        ))}
        {showCards && <CardList setShowCards={setShowCards} viewBoard={viewBoard}></CardList>}
      </div>
      </>
    );
  }
  export default BoardList;