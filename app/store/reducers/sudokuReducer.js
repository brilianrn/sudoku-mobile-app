const initialState = {
  board: [
  [0, 0, 2, 3, 4, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 2],
  [0, 0, 7, 9, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 6, 0, 0, 0, 1],
  [0, 7, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 8, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 2, 0],
  [0, 0, 0, 4, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
],
  initialBoard: [
  [0, 0, 2, 3, 4, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 2],
  [0, 0, 7, 9, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 6, 0, 0, 0, 1],
  [0, 7, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 8, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 2, 0],
  [0, 0, 0, 4, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]
};

function sudokuReducer(state = initialState, action) {
  const {type, payload} = action;

  if (type === 'board/setBoard') {
    return {...state, board: payload};
  } else if (type === 'initialBoard/setInitialBoard') {
    return {...state, initialBoard: payload};
  } 

  return state;
}

export default sudokuReducer;