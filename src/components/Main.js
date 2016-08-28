import React, { PropTypes } from 'react';
import ArticleContainer from '../containers/ArticleContainer';
import WordList from '../containers/WordList';

function Main() {
  return (
    <div>
      <ArticleContainer />
      <h1>Vocabulary</h1>
      <WordList />
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
