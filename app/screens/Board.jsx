import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { baseUrl, urlSolveGame, urlValidate } from '../api';
import BoardRow from '../components/BoardRow';
import { setBoardAsync, answerCheckAsync, solveGameAsync } from '../store/actions/sudokuAction';
import { useDispatch, useSelector } from 'react-redux';

export default function Board({ navigation, route }) {
  const [loading, setLoading] = useState(true);
  const { difficulty, username } = route.params;
  const dispatch = useDispatch();
  const board = useSelector((state) => state.sudokuReducer.board);
  const initialBoard = useSelector((state) => state.sudokuReducer.initialBoard);
  const url = baseUrl + difficulty;
  const payloadForEndGame = { username };

  let levelDisplay = difficulty.toUpperCase()

  useEffect(() => {
    dispatch(setBoardAsync({ url, setLoading }));
  }, []);

  function solveGame() {
    const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`, '')
    const encodeParams = (params) =>
      Object.keys(params)
        .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
        .join('&');

    const data = { board: initialBoard };

    dispatch(solveGameAsync({ urlSolveGame, data, encodeParams }));
  }

  function answerCheck() {
    const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`, '')
    const encodeParams = (params) =>
      Object.keys(params)
        .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
        .join('&');

    const data = { board: board };

    answerCheckAsync({ urlValidate, data, encodeParams });
  }

  return (
    <View style={styles.container}>
      {loading ? <Text>Loading ...</Text> :
        <>
          <Text style={styles.greating}>
            Hi, {username} good luck for you!!
          </Text>
          <Text>
            Level: {levelDisplay}
          </Text>
          {board.map((arrRow, i) => {
            return (
              <BoardRow rows={arrRow} i={i} key={'' + i + 'row'}></BoardRow>
            )
          })}
          <View style={styles.btn}>
            <Button title='Solve Game' onPress={solveGame} />
            <Button title='Answer Check' onPress={answerCheck} />
            <Button title='Finish Game' onPress={() => navigation.replace('Finish Game', payloadForEndGame)} ></Button>
          </View>
        </>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  btn: {
    marginTop: 20
  },
  greating: {
    marginBottom: 20,
    marginTop: 10
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
})