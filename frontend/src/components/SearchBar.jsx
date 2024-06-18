import React, {useState} from "react";
import ReactDOM from "react-dom";

const SearchBar = (props) => {

    const onChange = (e) => {
        props.setQuery(e.target.value);
        console.log(e.target.value);
    }

    const handleShowForm = () => {
      props.setCreateNew(true);
  }

    return (
      <>
        <form className="search-bar">
          <label htmlFor="search"></label>
          <input id="search" 
            type="search" 
            pattern=".*\S.*" 
            required value={props.query} 
            onChange={onChange} 
            placeholder="Search Boards..."
            style={{width: 600, height:40}}
            />
        </form>

        <div id='categories' style={{padding: '20px', display: 'flex', gap: '20px'}}>
          <button style={{border: 'groove'}}>All</button>
          <button style={{border: 'groove'}}>Recent</button>
          <button style={{border: 'groove'}}>Celebration</button>
          <button style={{border: 'groove'}}>Thank you</button>
          <button style={{border: 'groove'}}>Inspiration</button>
        </div>

        <div>
          <button style={{border: 'groove'}} onClick={handleShowForm}>Create a New Board</button>
        </div>
        

      </>
    );
  }
  export default SearchBar;