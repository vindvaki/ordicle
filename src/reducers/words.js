const word = (state, action) => {
  switch (action.type) {
    case 'SAVE_WORD':
      return {
        id: action.id,
        text: action.text,
        saved: true
      }
    default:
      return state
  }
}


const words = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_WORD':
      return [
        ...state,
        word(undefined, action)
      ]
    default:
        return state
  }
}

export default words
