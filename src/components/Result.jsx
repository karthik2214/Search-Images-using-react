import React from 'react';
//import Search from './Search';

const Result = (props) => {
  
  const img = `https://source.unsplash.com/400x300?${props.name}`;
  
  return (
    <>
    <div >
     <img src={img} alt="random img" />
    </div>
    </>
    )
}

export default Result;