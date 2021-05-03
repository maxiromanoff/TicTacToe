import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Table, Header, Footer } from './components';
import { Layout } from '../../views';
import update from 'immutability-helper';

const X_SYMBOL = '\u0058';
const O_SYMBOL = '\u004F';

const gameMatrix = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const Home = () => {
  const [gameStage, _setGameStage] = useState(gameMatrix);
  const [turnSymbol, _setTurnSymbol] = useState(X_SYMBOL);
  const [point, _setPoint] = useState({
    oWin: 0,
    xWin: 0,
    draw: 0,
  });

  const nextTurnSymbol = () => {
    _setTurnSymbol(turnSymbol === X_SYMBOL ? O_SYMBOL : X_SYMBOL);
  };

  const reset = () => {
    _setGameStage(gameMatrix);
    _setTurnSymbol(X_SYMBOL);
  }

  const handleStage = (i, j) => {
    if (gameStage[i][j]) {
      return;
    }
    const newStage = update(gameStage, {
      [i]: {
        [j]: { $set: turnSymbol }
      }
    })
    nextTurnSymbol();
    _setGameStage(newStage);
    const winner = getWinner(newStage);
    if (winner) {
      if (winner === X_SYMBOL) {
        _setPoint(prev => ({
          ...prev,
          xWin: prev.xWin + 1,
        }));
      }
      if (winner === O_SYMBOL) {
        _setPoint(prev => ({
          ...prev,
          oWin: prev.oWin + 1,
        }));
      }
      Alert.alert(
        `Congrat!`,
        `${winner} is winner`
      );
    } else if (!hasNulls(newStage)) {
      _setPoint(prev => ({
        ...prev,
        draw: prev.draw + 1,
      }));
      Alert.alert(
        `Draw!`,
      );
    }
  };

  const hasNulls = (inputArray) => {
    let hasNulls = false;
    for (let i = 0; i < inputArray.length; i++) {
      const row = inputArray[i];
      for (let j = 0; j < row.length; j++) {
        if (inputArray[i][j] === null) {
          hasNulls = true;
        }
      }
    }
    return hasNulls;
  };

  const getWinner = (gameStage) => {
    let transposed = [[], [], []];
    let diagonals = [[], []];
    for (let i = 0; i < gameStage.length; i++) {
      const row = gameStage[i];
      for (let j = 0; j < row.length; j++) {
        transposed[i][j] = gameStage[j][i];
        if (i === j) {
          diagonals[0][i] = gameStage[i][j];
        }
        if (i === Math.abs(j - (row.length - 1))) {
          diagonals[1][i] = gameStage[i][j]
        }
      }
    }
    const allLines = gameStage.concat(transposed).concat(diagonals);
    for (let i = 0; i < allLines.length; i++) {
      const line = allLines[i];
      const isEqual = line.every((item) => item === line[0]);
      if (isEqual) {
        return line[0];
      }
    }
    return null;
  }

  return (
    <Layout>
      <Header
        {...{ point, hasNulls }}
      />
      <View style={styles.tableContainer}>
        <Table
          {...{
            gameStage,
            handleStage,
          }}
        />
      </View>
      <Footer
        {...{ reset, turnSymbol }}
      />
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  tableContainer: {
    alignItems: 'center',
    marginBottom: 60,
  }
});

export default Home;