import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../../../../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ButtonToogle = ({
  name,
  color,
  backgroundColor,
}) => (
  <Button
    style={[
      styles.btn,
      { backgroundColor }
    ]}
  >
    <FontAwesome
      size={23}
      {...{ name, color }}
    />
  </Button>
);

const Toogle = ({ turnSymbol }) => {
  const select = turnSymbol === 'X';
  return (
    <View style={styles.container}>
      <ButtonToogle
        name="circle-o"
        color={select ? "#80D4E3" : "#fff"}
        backgroundColor={select ? 'transparent' : '#80D4E3'}
        {...{ select }}
      />
      <ButtonToogle
        name="close"
        color={select ? "#fff" : "#3888D4"}
        backgroundColor={select ? '#3888D4' : 'transparent'}
        {...{ select }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 80,
    height: 35,
    borderWidth: 1,
    borderColor: '#e4e4e4',
    borderRadius: 20,
  },
  btn: {
    width: 35,
    height: 35,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Toogle;