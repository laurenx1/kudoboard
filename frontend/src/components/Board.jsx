import React from 'react'
import './Board.css'

const Board = ({ title, category, author, imageUrl, onDeleteBoard }) => {
    console.log(imageUrl)
    return (
        <div className='board'>
            <img src={imageUrl} alt={title} className='board-image' />
            <h3>{title}</h3>
            <p>{category}</p>
            <p>{author}</p>
            <button className='view-btn'>View Board</button>
            <button className='delete-btn' onClick={onDeleteBoard}>Delete Board</button>
        </div>
    );
};

export default Board; 