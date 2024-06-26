import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import './App.css'

import SearchBar from './components/SearchBar'
import NewBoardForm from './components/NewBoardForm'
import BoardList from './components/BoardList'
import ViewBoard from './components/ViewBoard'

import img from './assets/kudoboard_logo.png'
// import githubPfp from './assets/github_pfp.png'
import gitLogo from './assets/github_logo_1.png'

function App() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [createNew, setCreateNew] = useState(false);
  const [boards, setBoards] = useState([]);
  const [imageCounter, setImageCounter] = useState(1); 


  useEffect(() => {
    let url = import.meta.env.VITE_BACKEND_URL + '/boards'
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
    fetch(import.meta.env.VITE_BACKEND_URL + '/boards', {
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
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/boards/${boardId}`, {
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
        <Routes>
          <Route path='/' element={
            <>
              <SearchBar 
                setQuery={setQuery} 
                setFilter={setFilter} 
                setCreateNew={setCreateNew}>
              </SearchBar>
              {createNew && <NewBoardForm setCreateNew={setCreateNew} addBoard={addBoard} ></NewBoardForm>}
              <BoardList boards={boards} onDeleteBoard={deleteBoard} />
            </>
          } />
          <Route path='/viewBoard/:boardId' element={<ViewBoard />} />
        </Routes>
      </div>
    </Router>
    <footer>
      <span className='footer-content'>
        <a href='https://github.com/laurenx1'> 
            <img src={gitLogo} className='github'/>
        </a>
      </span>
    </footer>
    </>
  )
}

export default App
