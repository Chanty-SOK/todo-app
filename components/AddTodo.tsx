import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [task, setTask] = useState("");
  const changeHandler = (val) => {
    setTask(val);
  };
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Enter a new task..."
        onChangeText={changeHandler}
      />
      <Button title="Add New" onPress={() => submitHandler(task)} />
    </View>
  );
}
const styles = StyleSheet.create({
  textInput: {
    marginBottom: 15,
    borderBottomColor: "#000",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderBottomWidth: 1,
  },
  button: {},
});
