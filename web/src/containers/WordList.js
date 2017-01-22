import { connect } from 'react-redux';
import List from '../components/vocabulary/List';
import { saveWord } from '../actions'

const mapStateToProps = (state) => {
  console.log("state", state)
  return {
    words: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onWordClick: (text) => {
      dispatch(saveWord(text))
    }
  }
}

const WordList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default WordList;
