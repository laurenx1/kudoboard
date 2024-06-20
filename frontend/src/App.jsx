import { useState, useEffect } from 'react'
import axios from 'axios';

import './App.css'

import SearchBar from './components/SearchBar'
import NewBoardForm from './components/NewBoardForm'
import BoardList from './components/BoardList'

import img from './assets/kudoboard_logo.png'

function App() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [createNew, setCreateNew] = useState(false);
  const [boards, setBoards] = useState([]);
  const [imageCounter, setImageCounter] = useState(1); 

  // const addBoard = (newBoard) => {
  //   const imageUrl = `https://picsum.photos/200/300?random=${imageCounter}`
  //   setBoards([...boards, {...newBoard, imageUrl }])
  //   setImageCounter(imageCounter + 1)
  // }

  // const deleteBoard = (index) => {
  //   const updatedBoards = boards.filter((_, i) => i !== index); 
  //   setBoards(updatedBoards)
  // }

  useEffect(() => {
    fetch('http://localhost:3000/boards')
      .then(response => response.json())
      .then(data => setBoards(data))
      .catch(error => console.error('Error fetching boards:', error));
  }, [boards ,query, filter])

  // func to fetch boards from backend
  // const fetchBoards = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3000/boards') // replace with backend URL
  //     setBoards(response.data);
  //   } catch (error) {
  //     console.error('Error fetching boards', error)
  //   }
  // };

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
      await axios.delete(`http://localhost:3000/boards${boardId}`);
      const updatedBoards = boards.filter((board) => board.id !== boardId);
      setBoards(updatedBoards);
    } catch (error) {
      console.error('Error deleting board:', error);
    }
  }

  return (
    <>
      <div>
        <img src={img} className='kudo-logo' style={{width: 200, height:116}}/>
        <SearchBar 
          setQuery={setQuery} 
          setFilter={setFilter} 
          setCreateNew={setCreateNew}>
        </SearchBar>
        {createNew && <NewBoardForm setCreateNew={setCreateNew} addBoard={addBoard} ></NewBoardForm>}
        <BoardList boards={boards} onDeleteBoard={deleteBoard}></BoardList>
      </div>
    </>
  )
}

export default App
