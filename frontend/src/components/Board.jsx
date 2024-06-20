import React from 'react'
import './Board.css'
import { NavLink } from 'react-router-dom';

const Board = ({ title, category, author, imageUrl, onDeleteBoard, setShowCards, setViewBoard, board}) => {
    const handleDelete = () => {
        onDeleteBoard(); 
    }

    const handleView = () => {
        setShowCards(true);
        setViewBoard(board); //viewBoard is ALL of the board, can then use dot notation in Card. 
        console.log('you wanna view a board');
    }

    return (
        <div className='board'>
            <img src={imageUrl} alt={title} className='board-image' />
            <h3>{title}</h3>
            <p>{category}</p>
            <p>{author}</p>
            <div className='btn-container'>
                <button className='view-btn' onClick={handleView}>View Board</button>
                <button className='delete-btn' onClick={handleDelete}>Delete Board</button>
                <NavLink className='view-btn' to='/viewBoard'>View Board</NavLink>
            </div>
        </div>
    );
};

export default Board; 