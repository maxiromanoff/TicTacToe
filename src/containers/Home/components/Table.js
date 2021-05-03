import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../../../components';

const generateMap = (mapData, callback) => {
  const mapJsx = [];
  for (let i = 0; i < mapData.length; i++) {
    const row = mapData[i];
    const rowJsx = [];
    for (let j = 0; j < row.length; j++) {
      rowJsx.push(
        <Button
          onPress={() => { callback(i, j) }}
          key={`cell_${i}_${j}`}
          style={styles.cell}
        >
          <Text style={styles.cellTxt}>
            {mapData[i][j]}
          </Text>
        </Button>
      )
    }
    mapJsx.push(
      <View
        key={`row_${i}`}
        style={styles.row} >
        {rowJsx}
      </View>
    )
  }
  return mapJsx
}

const Table = ({
  gameStage,
  handleStage,
}) => {
  return (
    <View>
      {generateMap(gameStage, handleStage)}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: "#DBDBDB",
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellTxt: {
    fontSize: 24,
    fontWeight: '700',
  }
});

export default Table;
