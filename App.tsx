import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import { StyleSheet, View, FlatList, Text } from "react-native";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy Coffee", key: "1" },
    { text: "Go Shopping", key: "2" },
    { text: "Play Game", key: "3" },
  ]);

  const onPressTask = (key) => {
    setTodos((previousTask) => {
      return previousTask.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setTodos((previosTodo) => {
      return [{ text: text, key: Math.random().toString() }, ...previosTodo];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} onPressTask={onPressTask} />
            )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 10,
  },
});
