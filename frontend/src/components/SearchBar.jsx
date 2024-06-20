import React, {useState} from "react";
import ReactDOM from "react-dom";

const SearchBar = ({ setQuery, setFilter, setCreateNew }) => {

    const onChange = (e) => {
        setQuery(e.target.value);
        console.log(e.target.value);
    }

    const handleShowForm = () => {
      setCreateNew(true);
  }

  const handleFiltering = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  }

    return (
      <>
        <form className="search-bar">
          <label htmlFor="search"></label>
          <input id="search" 
            type="search" 
            pattern=".*\S.*" 
            required
            onChange={onChange} 
            placeholder="Search Boards..."
            style={{width: 600, height:40}}
            />
        </form>

        <div id='categories' style={{padding: '20px', display: 'flex', gap: '20px', justifyContent: 'center'}}>
          <button style={{border: 'groove'}} value='All' onClick={handleFiltering}>All</button>
          <button style={{border: 'groove'}} value='Recent' onClick={handleFiltering}>Recent</button>
          <button style={{border: 'groove'}} value= 'Celebration' onClick={handleFiltering}>Celebration</button>
          <button style={{border: 'groove'}} value= 'Thank You' onClick={handleFiltering}>Thank you</button>
          <button style={{border: 'groove'}} value= 'Inspiration' onClick={handleFiltering}>Inspiration</button>
        </div>

        <div>
          <button style={{border: 'groove'}} onClick={handleShowForm}>Create a New Board</button>
        </div>
        

      </>
    );
  }
  export default SearchBar;