import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import searchBar from './components/SearchBar'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  const [query, setQuery] = useState('');

  useEffect(() => {
    // code here
  }, [query])

  return (
    <>
      <div>
        <img src='./assets/kudoboard_logo.png' className='kudo-logo' />
        <SearchBar setQuery={setQuery}></SearchBar>
      </div>
    </>
  )
}

export default App
