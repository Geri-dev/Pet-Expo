import React from 'react';
import './title.css';


// Title component that takes subTitle and title as props
const Title = ({subTitle, title}) => {
  return (
    <div className = "title">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default Title;