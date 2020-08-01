import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TodoItem({ item, onPressTask }: { item: any }) {
  return (
    <TouchableOpacity onPress={() => onPressTask(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    borderColor: "red",
    marginTop: 10,
  },
});
