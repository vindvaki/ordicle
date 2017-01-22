let nextWordId = 0
export const saveWord = (text) => {
  return {
    type: 'SAVE_WORD',
    id: nextWordId++,
    text
  }
}
