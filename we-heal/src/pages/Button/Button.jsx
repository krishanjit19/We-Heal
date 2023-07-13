import React from 'react';
import './Button.scss';

const Button = (props) => {
  return (
    <button className='btn'>{props.name}</button>
  )
}

export default Button