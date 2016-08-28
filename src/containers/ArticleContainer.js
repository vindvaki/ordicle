import { connect } from 'react-redux';
import ArticleView from '../components/articles/View';
import { saveWord } from '../actions'

const mapStateToProps = (state) => {
  return {
    title: 'Squats',
    text: 'You know the squat challenge? You do one squat, wait 30 seconds, then do two, wait 30 seconds, then do three, etc etc, all the way up to 30, and then you do 30 more? Today my PT decided we\'d do the same amount of push-ups too. One squat, one push-up, wait 30 seconds, two squats, two push-ups.'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onWordClick: (text) => {
      dispatch(saveWord(text))
    }
  }
}

const ArticleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleView)

export default ArticleContainer;
