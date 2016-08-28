import React from 'react';
import ArticleView from '../components/articles/View'

class ArticleContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      article: {
        title: 'Squats',
        text: 'You know the squat challenge? You do one squat, wait 30 seconds, then do two, wait 30 seconds, then do three, etc etc, all the way up to 30, and then you do 30 more? Today my PT decided we\'d do the same amount of push-ups too. One squat, one push-up, wait 30 seconds, two squats, two push-ups.'
      }
    };
  }

  render() {
    return(
      <ArticleView text={this.state.article.text} title={this.state.article.title} />
    );
  }
}

export default ArticleContainer;
