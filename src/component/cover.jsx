import React from 'react';
import './cover.css';
import coverImg from '../assets/Me.jpeg';

console.log(coverImg);

function Cover() {
  return (
    <div
      className="coverPage"
      style={{ backgroundImage: `url(${coverImg})` }}
    ></div>
  );
}

export default Cover;
