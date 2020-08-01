import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

export default function TodoItem({ item, onPressTask }: { item: any }) {
  return (
    <TouchableOpacity onPress={() => onPressTask(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color="#333" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    marginTop: 10,
    borderColor: "#ddd",
    flexDirection: "row",
  },
  itemText: {
    marginLeft: 10,
  },
});
