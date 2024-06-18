import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import searchBar from './components/SearchBar'
import './App.css'
import SearchBar from './components/SearchBar'
import img from './assets/kudoboard_logo.png'

function App() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // code here
  }, [query, filter])

  return (
    <>
      <div>
        <img src={img} className='kudo-logo' style={{width: 200, height:116}}/>
        <SearchBar setQuery={setQuery} setFilter={setFilter}></SearchBar>
      </div>
    </>
  )
}

export default App
