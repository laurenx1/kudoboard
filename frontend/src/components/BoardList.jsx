import React, {useState} from "react";
import ReactDOM from "react-dom";

const BoardList = (props) => {

    const onChange = (e) => {
        props.setQuery(e.target.value);
        console.log(e.target.value)
    }

    return (
      <>


      </>
    );
  }
  export default BoardList;