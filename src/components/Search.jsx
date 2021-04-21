import React, { useState } from 'react';
import Result from "./Result";

const Search = () => {
  
  const [img, setImg ] = useState(""); 
  const inputEvent = (event) => {
    const data = event.target.value;
    setImg(data);
  }
  
  return (
    <>
    <div className="searchbar">
    <input type="text" value={img} onChange={inputEvent} placeHolder="Search Anything Here" />
    { img === "" ? null : <Result name={img} />}
    </div>
    </>
    )
}

export default Search;