import React, { useState } from 'react'
import './style.css'

function Box(props) {
    const { value, changeTurn, row, col } = props;
  
    function toggleText() {
      if (!value) {
        changeTurn(row, col);
      }
    }
    return (
      <div className="box" onClick={toggleText}>
        {value}
      </div>
    );
  }
export default Box