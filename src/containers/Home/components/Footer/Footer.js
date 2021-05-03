import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { RoundCard, Toogle } from './index';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Footer = ({ reset, turnSymbol }) => {
  return (
    <View>
      <View style={styles.toogle}>
        <Toogle {...{ turnSymbol }} />
      </View>
      <View style={styles.footerBtn}>
        <RoundCard
          Icon={<Ionicons name="sync" />}
          onPress={reset}
        />
        <View style={styles.players}>
          <Text style={styles.playersTxt}>2 PLAYER</Text>
        </View>
        <RoundCard
          Icon={<Ionicons name="ios-settings-outline" />}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  toogle: {
    marginBottom: 40,
    alignItems: 'center',
  },
  footerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  players: {
    borderColor: '#e4e4e4',
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 20,
  },
  playersTxt: {
    fontWeight: '700',
    fontSize: 13,
    color: '#B3BCC7'
  }
});
export default Footer;