import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function BoardCol(props) {
  const { num, i, j } = props;
  const dispatch = useDispatch();
  const board = useSelector((state) => state.sudokuReducer.board);
  const initialBoard = useSelector((state) => state.sudokuReducer.initialBoard);
  const [numCol, setNumCol] = useState(num);

  function getNewNum() {
    const payload = board.map(row => [...row]);

    payload[i][j] = Number(numCol);
    dispatch({ type: 'board/setBoard', payload })
  }

  return (
    <View style={styles.col}>
      {num == 0 || initialBoard[i][j] != board[i][j] ? <TextInput maxLength={1} keyboardType='numeric' onChangeText={setNumCol} onSubmitEditing={getNewNum} defaultValue={num == 0 ? String('') : String(num)} /> :
        <Text style={styles.number}>{num}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  col: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    backgroundColor: '#79e7ff',
    borderColor: 'black',
    borderWidth: 1,
    textAlign: 'center'
  },
  number: {
    color: 'red',
  }
})