import React from 'react';

const Word = ({ word, onClick }) => (
  <span onClick={onClick}>{word}</span>
);

export default Word;
