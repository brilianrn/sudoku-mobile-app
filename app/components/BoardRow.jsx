import React from 'react';
import { StyleSheet, View } from 'react-native';
import BoardCol from './BoardCol';

export default function BoardRow({ rows, i }) {
  return (
    <View style={styles.row}>
      {
        rows.map((num, j) => {
          return (
            <>
              <BoardCol num={num} i={i} j={j} key={'' + j + i}></BoardCol>
            </>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  }
})
