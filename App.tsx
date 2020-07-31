import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Pota", key: "1" },
    { name: "Mina", key: "2" },
    { name: "Holy", key: "3" },
    { name: "Yoga", key: "4" },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 5,
    margin: 10,
    width: 200,
  },
});
