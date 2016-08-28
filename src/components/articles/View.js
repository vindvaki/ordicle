import React from 'react';
import Word from './Word';

const View = ({ text, title, onWordClick }) => (
  <div>
    <h1>{title}</h1>
    {text.split(/\b/).map((word, index)=>
      <Word
        key={index}
        word={word}
        onClick={() => onWordClick(word)}
      />
    )}
  </div>
);

export default View;
