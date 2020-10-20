import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';

import { main } from './components/style';
import { TodoInput, TodoCard } from './components';

const App = () => {
  const [list, setList] = useState([]);

  function addTodo(text) {
    const element = {
      id: list.length,
      todo: text, // short version of this line is just => text,
      isDone: false,
    };

    const newArray = [...list, element];
    setList(newArray);
  }

  function doneTodo(todoId) {
    const newArray = [...list]; // instead of changing state it self, change copy of it!
    const todoIndex = newArray.findIndex((item) => item.id === todoId);

    newArray[todoIndex].isDone = !newArray[todoIndex].isDone;

    setList(newArray);
  }

  function removeTodo(todoId) {
    const newArray = [...list];
    const todoIndex = newArray.findIndex((t) => t.id === todoId);
    newArray.splice(todoIndex, 1);
    setList(newArray);
  }

  const renderTodo = ({ item }) => {
    return (
      <TodoCard
        data={item}
        onDone={() => doneTodo(item.id)}
        onRemove={() => removeTodo(item.id)}
      />
    );
  };

  return (
    <SafeAreaView style={main.container}>
      <KeyboardAvoidingView style={main.container} behavior="padding">
        <View style={main.banner}>
          <Text style={main.todoText}>TODO</Text>
          <Text style={main.todoCount}>
            {list.filter((t) => t.isDone === false).length}
          </Text>
        </View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={list}
          renderItem={renderTodo}
          ListEmptyComponent={() => (
            <>
              <Text style={main.emptyComponent}>Nothing to do 📝</Text>
              <Text style={main.emptyComponent}>
                With one click you can line through your todo. ☑
              </Text>
              <Text style={main.emptyComponent}>
                If you press on todo long, it will be removed from your todo
                list. 🗑
              </Text>
            </>
          )}
        />
        <TodoInput onTodoEnter={(todoText) => addTodo(todoText)} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;
