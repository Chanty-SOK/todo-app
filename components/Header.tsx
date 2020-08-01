import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}> My Todos </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    color: "#fff",
  },
});
