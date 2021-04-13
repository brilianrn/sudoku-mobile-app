export function setBoard(payload) {
  return { type: 'board/setBoard', payload };
}

export function setInitialBoard(payload) {
  return { type: 'initialBoard/setInitialBoard', payload: payload.map(row => [...row]) };
}

export function setBoardAsync({url, setLoading}) {
  return ((dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(({ board }) => {
        dispatch(setInitialBoard(board));
        dispatch(setBoard(board));
        setLoading(false);
      })
      .catch(err => {
        console.log(err)
      })
  })
}

export function answerCheckAsync({urlValidate, data, encodeParams}){
  fetch(urlValidate, {
      method: 'POST',
      body: encodeParams(data),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
      .then(response => response.json())
      .then(({status}) => {
        alert('Your game is ' + status);
      })
      .catch(console.warn)
}

export function solveGameAsync({urlSolveGame, data, encodeParams}){
  return ((dispatch) => {
    fetch(urlSolveGame, {
        method: 'POST',
        body: encodeParams(data),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
        .then(response => response.json())
        .then(response => {
          dispatch(({ type: 'board/setBoard', payload: response.solution }))
        })
        .catch(console.warn)
  })
}