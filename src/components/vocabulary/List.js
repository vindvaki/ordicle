import React from 'react';

const List = ({ words }) => (
  <div>
  {words.map(word =>
    `${word.text} `
  )}
  </div>
);

export default List;
