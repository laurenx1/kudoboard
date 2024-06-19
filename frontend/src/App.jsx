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
        {createNew && <NewBoardForm setCreateNew={setCreateNew} ></NewBoardForm>}
        <BoardList></BoardList>
      </div>
    </>
  )
}

export default App
