import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import './App.css'

import SearchBar from './components/SearchBar'
import NewBoardForm from './components/NewBoardForm'
import BoardList from './components/BoardList'
import ViewBoard from './components/ViewBoard'

import img from './assets/kudoboard_logo.png'

function App() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [createNew, setCreateNew] = useState(false);
  const [boards, setBoards] = useState([]);
  const [imageCounter, setImageCounter] = useState(1); 


  useEffect(() => {
    let url = 'http://localhost:3000/boards'
    if (query) {
      url += `?query=${encodeURIComponent(query)}`;
    }
    else if (filter !== '' && filter != 'All') {
      url += `?category=${filter}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => setBoards(data))
      .catch(error => console.error('Error fetching boards:', error));
  }, [query, filter])


  const addBoard = async (newBoard) => {
    fetch('http://localhost:3000/boards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify(newBoard)
    })
     .then(response => response.json())
     .then(data => setBoards([...boards, data]))
     .catch(error => console.error('Error adding board:', error));
  };

  
  const deleteBoard = async (boardId) => {
    try {
      await fetch(`http://localhost:3000/boards/${boardId}`, {
        method: 'DELETE'
      });
      const updatedBoards = boards.filter((board) => board.id !== boardId);
      setBoards(updatedBoards);
    } catch (error) {
      console.error('Error deleting board:', error);
    }
  }

  return (
    <>
    <Router>
      <div>
        <img src={img} className='kudo-logo' style={{width: 200, height:116}}/>
        <SearchBar 
          setQuery={setQuery} 
          setFilter={setFilter} 
          setCreateNew={setCreateNew}>
        </SearchBar>
        {createNew && <NewBoardForm setCreateNew={setCreateNew} addBoard={addBoard} ></NewBoardForm>}
        <Routes>
          <Route path='/' element={<BoardList boards={boards} onDeleteBoard={deleteBoard} />} />
          <Route path='/viewBoard/:boardId' element={<ViewBoard />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
