import { useState, useEffect} from 'react'

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

  const addBoard = (newBoard) => {
    const imageUrl = `https://picsum.photos/200/300?random=${imageCounter}`
    setBoards([...boards, {...newBoard, imageUrl }])
    setImageCounter(imageCounter + 1)
  }

  const deleteBoard = (index) => {
    const updatedBoards = boards.filter((_, i) => i !== index); 
    setBoards(updatedBoards)
  }

  useEffect(() => {
    // code here
  }, [query, filter])

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
