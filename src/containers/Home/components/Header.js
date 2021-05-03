import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = ({ point }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <FontAwesome
          size={23}
          name="circle-o"
          color="#80D4E3"
        />
        <Text style={styles.circleTxt}>{point.oWin}</Text>
      </View>
      <View style={styles.card}>
        <FontAwesome
          size={23}
          name="close"
          color="#3888D4"
        />
        <Text style={styles.closeTxt}>{point.xWin}</Text>
      </View>
      <View style={styles.card}>
        <FontAwesome
          size={23}
          name="balance-scale"
          color="#B3BCC7"
        />
        <Text style={styles.scaleTxt}>{point.draw}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
    marginBottom: 60,
  },
  card: {
    alignItems: 'center',
  },
  circleTxt: {
    color: '#80D4E3',
    fontSize: 14,
    marginTop: 6,
    fontWeight: '700',
  },
  closeTxt: {
    color: '#3888D4',
    fontSize: 14,
    marginTop: 6,
    fontWeight: '700',
  },
  scaleTxt: {
    color: '#B3BCC7',
    fontSize: 14,
    marginTop: 6,
    fontWeight: '700',
  },
});
export default Header;