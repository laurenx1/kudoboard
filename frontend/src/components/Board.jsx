import React from 'react'
import './Board.css'

const Board = ({ title, category, author, imageUrl, onDeleteBoard, whichBoard, handleViewBoard}) => {
    const handleDelete = () => {
        onDeleteBoard(); 
    }

    const handleView = () => {
        handleViewBoard(whichBoard.id);
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
            </div>
        </div>
    );
};

export default Board; 