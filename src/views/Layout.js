import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';

const Layout = ({
  children,
  bgColor,
  style,
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: bgColor || "#ffffff",
        },
        styles.layout,
        style,
      ]}
    >
      <StatusBar
        animated
        barStyle='dark-content'
        backgroundColor="#ffffff"
      />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});
export default Layout;