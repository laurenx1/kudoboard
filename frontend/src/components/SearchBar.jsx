import React, {useState} from "react";
import ReactDOM from "react-dom";
import './SearchBar.css'

const SearchBar = (props) => {

    const onChange = (e) => {
        props.setQuery(e.target.value);
        console.log(e.target.value)
    }

    return (
      <div className="search-form">
        <form className="search-bar">
          <label htmlFor="search"></label>
          <input id="search" 
            type="search" 
            pattern=".*\S.*" 
            required value={props.query} 
            onChange={onChange} 
            placeholder="Search Boards..."/>
          <span className="caret"></span>
        </form>
      </div>
    );
  }
  export default SearchBar;