import React, { cloneElement } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Button } from '../../../../components';

const RoundCard = ({
  Icon,
  onPress,
}) => {
  return (
    <Button style={styles.card} {...{ onPress }}>
      <View style={styles.cardIcon}>
        {cloneElement(Icon, {
          size: 25,
          color: '#fff',
        })}
      </View>
    </Button>
  )
}

const styles = StyleSheet.create({
  card: {
    borderColor: '#e4e4e4',
    borderWidth: 0.8,
    borderRadius: 60,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardIcon: {
    backgroundColor: '#A4B5B8',
    borderRadius: 48,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default RoundCard;